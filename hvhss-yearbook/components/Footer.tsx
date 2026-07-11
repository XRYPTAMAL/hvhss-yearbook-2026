import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 dark:border-ivory/5 bg-ivory dark:bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40">
            <span className="font-display text-sm font-semibold text-gold">HV</span>
          </div>
          <p className="font-display text-lg text-ink dark:text-ivory">HVHSS Vellanad</p>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Batch of 2026</p>

          <div className="horizon-line centered" />

          <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-ink/60 dark:text-ivory/60">
            <Link href="/about" className="hover:text-gold">About</Link>
            <Link href="/gallery" className="hover:text-gold">Gallery</Link>
            <Link href="/guestbook" className="hover:text-gold">Guest Book</Link>
            <Link href="/contact" className="hover:text-gold">Contact</Link>
          </nav>

          <p className="mt-6 text-xs text-ink/50 dark:text-ivory/50">
            Made with ❤️ by Amal Dev A
          </p>
          <p className="text-[11px] text-ink/40 dark:text-ivory/40">
            © {new Date().getFullYear()} HVHSS Vellanad, Batch of 2026. All memories reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
