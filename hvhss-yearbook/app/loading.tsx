export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-ivory dark:bg-navy">
      <div className="flex flex-col items-center">
        <span className="font-display text-sm tracking-[0.4em] text-gold">GKS</span>
        <div className="mt-4 h-[1px] w-40 overflow-hidden bg-gold/20">
          <div className="h-full w-1/3 bg-gold animate-shimmer" />
        </div>
        <span className="mt-4 text-[11px] uppercase tracking-[0.3em] text-ink/40 dark:text-ivory/40">
          Batch of 2026
        </span>
      </div>
    </div>
  );
}
