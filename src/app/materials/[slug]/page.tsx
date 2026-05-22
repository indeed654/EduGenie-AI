import Link from "next/link";
import { notFound } from "next/navigation";

const materialsBySlug: Record<
  string,
  {
    title: string;
    semester: string;
    tag: string;
    pages: number;
    updated: string;
    highlights: string[];
  }
> = {
  "physics-pyq": {
    title: "Physics PYQ Set",
    semester: "Semester 5",
    tag: "Physics",
    pages: 120,
    updated: "2026-04-12",
    highlights: ["AI-structured solutions", "Topic-wise PYQ drill", "Weak-concept revision loop"],
  },
  "data-structures": {
    title: "Data Structures",
    semester: "Semester 2",
    tag: "CS",
    pages: 98,
    updated: "2026-03-18",
    highlights: ["Notes + examples", "PYQ turbo flow", "Streak-driven revisions"],
  },
  "organic-chemistry": {
    title: "Organic Chemistry",
    semester: "Semester 3",
    tag: "Chem",
    pages: 110,
    updated: "2026-04-02",
    highlights: ["High-contrast cheat sheets", "Mechanism summaries", "Practice prompts"],
  },
  "math-shortnotes": {
    title: "Math Short Notes",
    semester: "Semester 1",
    tag: "Math",
    pages: 76,
    updated: "2026-02-22",
    highlights: ["Short + precise notes", "Exam-ready revision",
    "Instant recall cards"],
  },
  "mock-tests": {
    title: "Mock Papers",
    semester: "Semester 4",
    tag: "CS",
    pages: 140,
    updated: "2026-04-20",
    highlights: ["Timed sets", "Error heatmap", "Revision plan"],
  },
};

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function MaterialDetailPage({ params }: { params: { slug: string } }) {
  const m = materialsBySlug[params.slug];
  if (!m) notFound();

  return (
    <main className="mx-auto w-full max-w-[960px] px-4 sm:px-6 lg:px-10 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-xs text-[#94A3B8]">{m.tag} • {m.semester}</div>
            <h1 className="mt-2 text-3xl font-semibold">{m.title}</h1>
          </div>
          <div className="text-xs text-[#94A3B8]">
            {m.pages} pages • Updated {formatDate(m.updated)}
          </div>
        </div>

        <div className="mt-6 h-px bg-white/10" />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {m.highlights.map((h) => (
            <div key={h} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Included</div>
              <p className="mt-2 text-sm text-[#94A3B8]">{h}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1F2937] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Open in dashboard
          </Link>
          <Link
            href="/materials"
            className="inline-flex items-center justify-center rounded-[14px] border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#111827] hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Back to materials
          </Link>
        </div>
      </div>
    </main>
  );
}

