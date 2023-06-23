"use client";

import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Column as Col, useKanban } from "./kanban";
import { Column } from "./components/Column";

export default function Home() {
  const { columns, updateColumns } = useKanban();

  const onDragEnd: OnDragEndResponder = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const columnFrom = columns.find((col) => col.id === source.droppableId);
    const columnTo = columns.find((col) => col.id === destination.droppableId);

    if (destination.droppableId === source.droppableId) {
      // Removendo o elemento da posição original
      const taskIdToMove = columnFrom?.taskIds.splice(source.index, 1)[0];

      // Inserindo o elemento na nova posição
      columnFrom?.taskIds.splice(destination.index, 0, taskIdToMove || "");

      const columnsUpdated = columns.map((col) =>
        col.id === columnFrom?.id ? columnFrom : col
      );
      updateColumns(columnsUpdated);
    } else {
      // Removendo o elemento da posição original
      const taskIdToMove = columnFrom?.taskIds.splice(source.index, 1)[0];

      // Inserindo o elemento na nova posição
      columnTo?.taskIds.splice(destination.index, 0, taskIdToMove || "");

      const columnsUpdated = columns.map((col) =>
        col.id === columnTo?.id ? columnTo : col
      );

      updateColumns(columnsUpdated);
    }
  };

  return (
    <div className="p-9 w-full">
      <DragDropContext onDragEnd={onDragEnd}>
        <Header />
        <Filter />

        <div className="mt-8 grid grid-cols-3 gap-12">
          {columns.map((column) => (
            <Column key={column.id} {...column} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
