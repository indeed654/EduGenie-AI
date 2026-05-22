import Link from "next/link";

const materials = [
  { slug: "physics-pyq", title: "Physics PYQ Set", semester: "Semester 5", tag: "Physics", pages: 120, updated: "2026-04-12" },
  { slug: "data-structures", title: "Data Structures", semester: "Semester 2", tag: "CS", pages: 98, updated: "2026-03-18" },
  { slug: "organic-chemistry", title: "Organic Chemistry", semester: "Semester 3", tag: "Chem", pages: 110, updated: "2026-04-02" },
  { slug: "math-shortnotes", title: "Math Short Notes", semester: "Semester 1", tag: "Math", pages: 76, updated: "2026-02-22" },
  { slug: "mock-tests", title: "Mock Papers", semester: "Semester 4", tag: "CS", pages: 140, updated: "2026-04-20" },
];

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function MaterialsPage({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }) {
  const rawQuery = searchParams?.query;
  const query = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery;

  const filtered = !query?.trim()
    ? materials
    : materials.filter((m) => (m.title + " " + m.tag + " " + m.semester).toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Trending Materials</h1>
          <p className="mt-2 text-sm text-[#94A3B8]">Search results for your study query.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#94A3B8]">
          Query: <span className="text-[#F8FAFC]">{query ? query : "—"}</span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-lg font-semibold">No materials found</div>
          <p className="mt-2 text-sm text-[#94A3B8]">Try a different keyword like “Semester 2” or “PYQ”.</p>
          <Link
            href="/materials"
            className="mt-5 inline-flex items-center justify-center rounded-[14px] bg-[#111827] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1F2937] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Clear search
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <Link
              key={m.slug}
              href={`/materials/${m.slug}`}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(0,245,255,0.16),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.14),transparent_55%)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-[#94A3B8]">{m.tag}</span>
                  <span className="text-xs text-[#00F5FF]">Open</span>
                </div>
                <div className="mt-4 text-lg font-semibold leading-tight text-[#F8FAFC]">{m.title}</div>
                <div className="mt-2 text-sm text-[#94A3B8]">{m.semester}</div>
                <div className="mt-4 h-px bg-white/10" />
                <div className="mt-3 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>{m.pages} pages</span>
                  <span>Updated {formatDate(m.updated)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

