interface BadgeProps {
  title: string;
}

export const Badge = ({ title }: BadgeProps) => {
  return (
    <div className="flex items-start py-1 px-2 rounded-lg bg-purple-200">
      <span className="text-purple-600 text-[11px] font-medium">{title}</span>
    </div>
  );
};
