interface PromptCardProps {
  icon: string;
  title: string;
}

export default function PromptCard({ icon, title }: PromptCardProps) {
  return (
    <button
      className="flex w-full items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50/40 px-4 py-3 text-left text-sm text-slate-700 transition hover:border-rose-200"
      type="button"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg shadow">
        {icon}
      </span>
      <span className="flex-1">{title}</span>
    </button>
  );
}
