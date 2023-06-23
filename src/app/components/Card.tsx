"use client";

import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { Badge } from "./Badge";

interface CardProps {
  id: string;
  title: string;
  index: number;
  description: string;
  badges: string[];
  borderColor: string;
}

export const Card = ({
  id,
  index,
  badges,
  description,
  title,
  borderColor,
}: CardProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-6 ${
            snapshot.isDragging ? "border-purple-700" : borderColor
          } border-2 flex flex-col items-start gap-[10px] self-stretch rounded-lg bg-white`}
        >
          <strong className="text-base">{title}</strong>

          <p className="flex h-[45px] flex-col justify-center text-gray-600 text-sm self-stretch overflow-hidden whitespace-nowrap text-ellipsis font-medium">
            {description}
          </p>

          <div className="flex items-start gap-2">
            {badges.map((badge) => (
              <Badge key={Math.random()} title={badge} />
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
};
