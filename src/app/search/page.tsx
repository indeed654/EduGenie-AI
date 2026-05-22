"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const quickSuggestions = [
  "PYQ for Semester 3",
  "Data Structures - Notes",
  "Physics Unit Test",
  "Revision Plan for CS",
];

export default function SearchPage() {
  const params = useSearchParams();
  const [queryInput, setQueryInput] = useState(params.get("query") ?? "");
  const [isPending, startTransition] = useTransition();

  const query = useMemo(() => (queryInput ?? "").trim(), [queryInput]);

  const onSearch = () => {
    startTransition(() => {
      const sp = new URLSearchParams(window.location.search);
      sp.set("query", query);
      window.history.pushState({}, "", `/search?${sp.toString()}`);
      // navigation is handled by pushing URL; we keep it functional without router.
      // Replace with router.push if you want loading skeleton for a full route transition.
    });
  };

  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Search</h1>
          <p className="mt-2 text-sm text-[#94A3B8]">AI-style suggestions and routing to materials.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#94A3B8]">
          Status: <span className="text-[#F8FAFC]">{isPending ? "Loading…" : "Ready"}</span>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <input
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            placeholder="Search materials…"
            className="flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-[#94A3B8]"
            aria-label="Search query"
          />
          <button
            type="button"
            onClick={onSearch}
            disabled={isPending || !query}
            className="rounded-[14px] bg-[#111827] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1F293B7] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            {isPending ? "Searching…" : "Search"}
          </button>
          <Link
            href={`/materials${query ? `?query=${encodeURIComponent(query)}` : ""}`}
            className="rounded-[14px] border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            View results
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {quickSuggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQueryInput(s)}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Link
          href={`/materials${query ? `?query=${encodeURIComponent(query)}` : ""}`}
          className="inline-flex items-center justify-center rounded-[14px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1F293B7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
        >
          Go to materials results
        </Link>
      </div>
    </main>
  );
}

