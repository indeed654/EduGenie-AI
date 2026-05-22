import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-[720px] px-4 sm:px-6 lg:px-10 py-16 text-center">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="text-6xl font-semibold">404</div>
        <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-sm text-[#94A3B8]">The page you’re looking for doesn’t exist.</p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1F293B7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

