import { Badge } from "./Badge";

interface CardProps {
  title: string;
  description: string;
  badges: string[];
}

export const Card = ({ badges, description, title }: CardProps) => {
  return (
    <div className="shadow-card p-6 flex flex-col items-start gap-[10px] self-stretch rounded-lg bg-white">
      <strong className="text-base">{title}</strong>

      <p className="flex h-[45px] flex-col justify-center text-gray-600 text-sm self-stretch overflow-hidden whitespace-nowrap text-ellipsis font-medium">
        {description}
      </p>

      <div className="flex items-start gap-2">
        {badges.map((badge) => (
          <Badge title={badge} />
        ))}
      </div>
    </div>
  );
};
