import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <p className="mt-2 text-sm text-[#94A3B8]">Mini preview of streaks, progress and analytics.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/materials"
            className="inline-flex items-center justify-center rounded-[14px] border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Study now
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-[14px] border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            FAQ
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-[#94A3B8]">Study streak</div>
          <div className="mt-1 text-4xl font-bold">14 days</div>
          <div className="mt-4 h-px bg-white/10" />
          <div className="mt-4 text-sm text-[#94A3B8]">Auto revision reminders enabled</div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-[#94A3B8]">Exam countdown</div>
          <div className="mt-1 text-4xl font-bold">09:12:05</div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 bg-gradient-to-r from-[#00F5FF] to-[#7C3AED]" />
          </div>
          <div className="mt-3 text-sm text-[#94A3B8]">Adaptive prep blocks</div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-1">
          <div className="text-sm text-[#94A3B8]">Progress analytics</div>
          <div className="mt-1 text-4xl font-bold">+18%</div>
          <div className="mt-4 grid grid-cols-5 gap-2 items-end">
            {[12, 18, 14, 22, 28].map((h, i) => (
              <div key={i} className="w-full rounded bg-gradient-to-t from-[#00F5FF] to-[#7C3AED]" style={{ height: h + 20 }} />
            ))}
          </div>
          <div className="mt-4 text-sm text-[#94A3B8]">Heatmaps and revision tracker</div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold">Calendar study graph</div>
        <div className="mt-3 grid grid-cols-7 gap-2">
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className="h-8 rounded border border-white/10 bg-black/20"
              style={{ opacity: 0.35 + (i % 7) * 0.07 }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="mt-4 text-xs text-[#94A3B8]">Demo visualization (wire to real data later)</div>
      </div>
    </main>
  );
}

