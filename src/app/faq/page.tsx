import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="mx-auto w-full max-w-[960px] px-4 sm:px-6 lg:px-10 py-10">
      <h1 className="text-4xl font-semibold">FAQ</h1>
      <p className="mt-2 text-sm text-[#94A3B8]">Straight answers, no filler.</p>

      <div className="mt-8 space-y-3">
        {[
          { q: "Is EduGenie AI actually useful or just UI?", a: "Useful. You get AI-structured notes, PYQ drill flow, revision planning, and analytics that map to what you’re weak at." },
          { q: "Does it work for multiple subjects?", a: "Yes—notes, PYQs, and revision tracking are designed to scale across subjects with consistent study mechanics." },
          { q: "Will animations hurt performance?", a: "No. We respect reduced motion and keep heavy layers lazy-loaded." },
        ].map((f) => (
          <section key={f.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold">{f.q}</h2>
            <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">{f.a}</p>
          </section>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-[14px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1F293B7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
        >
          Go to dashboard
        </Link>
      </div>
    </main>
  );
}

