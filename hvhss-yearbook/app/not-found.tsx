import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="font-hand text-4xl text-gold">This page graduated already.</p>
      <p className="mt-4 text-sm text-ink/60 dark:text-ivory/60">
        We couldn't find what you were looking for — it may have moved, or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-ivory hover:bg-gold hover:text-ink dark:bg-ivory dark:text-ink dark:hover:bg-gold"
      >
        Back to Home
      </Link>
    </div>
  );
}
