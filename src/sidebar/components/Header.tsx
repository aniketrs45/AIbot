export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500"
        type="button"
        aria-label="History"
      >
        ⏱️
      </button>
      <div className="flex items-center gap-3 text-slate-500">
        <button className="text-lg" type="button" aria-label="Expand">
          ⤢
        </button>
        <button className="text-lg" type="button" aria-label="Close">
          ✕
        </button>
      </div>
    </div>
  );
}
