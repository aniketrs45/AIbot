export default function ChatInput() {
  return (
    <div className="rounded-2xl border border-brand-orange/60 bg-white p-4 shadow-soft">
      <div className="flex items-center gap-3">
        <input
          className="flex-1 border-none text-sm outline-none placeholder:text-slate-400"
          placeholder="Enter here to start a chat"
          type="text"
        />
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
          type="button"
          aria-label="Upload"
        >
          ⬆️
        </button>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-white"
          type="button"
          aria-label="Send"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
