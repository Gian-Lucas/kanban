"use client";

import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import { useKanban } from "../kanban";
import { Card } from "./Card";

const borderColorColumn = {
  c1: "border-red-300",
  c2: "border-yellow-300",
  c3: "border-green-300",
};

export interface ColumnProps {
  id: "c1" | "c2" | "c3";
  title: string;
}

export const Column = ({ id, title }: ColumnProps) => {
  const { tasks, columns } = useKanban();

  const column = columns.find((col) => col.id === id);

  const columnTasks = column?.taskIds.map((taskId) => {
    const task = tasks.find((t) => t.id === taskId);

    return task;
  });

  return (
    <div>
      <h1 className="text-xl font-bold">{title}</h1>
      <Droppable droppableId={id}>
        {(provided: DroppableProvided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col items-start gap-6 h-full mt-6"
          >
            {columnTasks?.map(
              (task, index) =>
                task && (
                  <Card
                    key={task.id}
                    {...task}
                    index={index}
                    borderColor={borderColorColumn[id] || ""}
                  />
                )
            )}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
