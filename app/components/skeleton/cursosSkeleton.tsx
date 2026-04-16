"use client";

import React from "react";

type Props = { count?: number };
export default function CursosSkeleton({ count = 3 }: Props) {
  const cards = Array.from({ length: count });

  return (
    <section id="cursos" className="py-8">
      <div className="cursos-intro mb-6 animate-pulse">
        <div className="w-44 h-4 bg-gray-200 rounded-md mb-3" />
        <div className="w-80 h-10 bg-gray-200 rounded-md mb-2" />
        <div className="w-2/3 h-4 bg-gray-100 rounded-md" />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((_, i) => (
          <div
            key={i}
            className="curso-card bg-white rounded-lg p-4 shadow-sm flex flex-col gap-3 min-h-[220px] animate-pulse"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-6 bg-gray-200 rounded" />
              <div className="w-10 h-10 bg-gray-200 rounded-md" />
            </div>

            <div className="w-32 h-4 bg-gray-100 rounded" />

            <div className="w-3/4 h-5 bg-gray-200 rounded mt-1" />

            <div className="w-full h-12 bg-gray-100 rounded mt-2" />

            <div className="mt-auto flex gap-3">
              <div className="flex-1 h-3 bg-gray-200 rounded" />
              <div className="flex-1 h-3 bg-gray-200 rounded" />
              <div className="flex-1 h-3 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
