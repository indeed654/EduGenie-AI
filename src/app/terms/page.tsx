import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-[960px] px-4 sm:px-6 lg:px-10 py-10">
      <h1 className="text-4xl font-semibold">Terms</h1>
      <p className="mt-2 text-sm text-[#94A3B8]">Demo terms page. Replace with your terms of service.</p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-[#94A3B8] leading-relaxed">
          By using EduGenie AI you agree to responsible study practices. This is a functional placeholder route.
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-[14px] border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#111827] hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

