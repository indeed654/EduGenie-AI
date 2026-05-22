import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[960px] px-4 sm:px-6 lg:px-10 py-10">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="mt-2 text-sm text-[#94A3B8]">Send feedback and product requests.</p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold">Email</div>
            <div className="mt-2 text-sm text-[#94A3B8]">support@edugenie.ai (demo)</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold">Response time</div>
            <div className="mt-2 text-sm text-[#94A3B8]">Within 24–48 hours</div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[14px] border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#111827] hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Back to landing
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1F293B7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Open dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

