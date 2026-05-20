"use client";

export function LandingFooter() {
  return (
    <footer className="mt-14 pb-10">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="glass-card neon-border rounded-3xl p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold">FourLegs AI EDU</div>
              <div className="mt-1 text-xs text-[#94A3B8]">
                Premium cyberpunk learning system for notes, PYQs, and revision analytics.
              </div>
            </div>
            <div className="flex gap-3">
              <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#94A3B8] hover:text-[#F8FAFC]" href="#">
                Privacy
              </a>
              <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#94A3B8] hover:text-[#F8FAFC]" href="#">
                Terms
              </a>
              <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#94A3B8] hover:text-[#F8FAFC]" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center text-xs text-[#94A3B8]">
          © {new Date().getFullYear()} FourLegs AI EDU. Built for streaks.
        </div>
      </div>
    </footer>
  );
}

