import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-sm tracking-wide text-[--color-brand-electric]">
        404
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-[--color-fg-muted]">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-[--color-fg] px-6 py-3 text-sm font-semibold text-[--color-brand-navy] transition-colors hover:bg-white"
      >
        Back to LexRights
      </Link>
    </div>
  );
}
