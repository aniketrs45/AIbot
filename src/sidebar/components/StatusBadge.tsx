interface StatusBadgeProps {
  text: string;
}

export default function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      {text}
    </div>
  );
}
