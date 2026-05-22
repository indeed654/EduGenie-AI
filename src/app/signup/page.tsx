import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="mx-auto w-full max-w-[960px] px-4 sm:px-6 lg:px-10 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-3xl font-semibold">Start Learning Free</h1>
        <p className="mt-2 text-sm text-[#94A3B8]">
          This is a premium-ready auth placeholder. Wire it to your auth provider.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-medium">Continue with Google</div>
            <p className="mt-1 text-xs text-[#94A3B8]">OAuth button goes here</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-medium">Continue with Email</div>
            <p className="mt-1 text-xs text-[#94A3B8]">Email form goes here</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1F2937] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Go to dashboard
          </Link>
          <Link
            href="/materials"
            className="inline-flex items-center justify-center rounded-[14px] border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#111827] hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Browse materials
          </Link>
        </div>
      </div>
    </main>
  );
}

