import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#050a1f] text-[#f5f7ff]">
        <div className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center px-4 text-center">
          <span className="font-mono text-sm tracking-wide text-[#4a7bff]">
            404
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-[#8b95b8]">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#043afd] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2e5bff]"
          >
            Back to LexRights
          </Link>
        </div>
      </body>
    </html>
  );
}
