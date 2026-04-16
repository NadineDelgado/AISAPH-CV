"use client";

import React from "react";

type Props = { count?: number };
export default function DepoimentosSkeleton({ count = 3 }: Props) {
  const cards = Array.from({ length: count });

  return (
    <section id="depoimentos" className="py-8">
      <div className="dep-header mb-6 animate-pulse">
        <div className="section-tag mx-auto w-36 h-4 bg-gray-200 rounded-md mb-3" />
        <div className="w-80 h-10 bg-gray-200 rounded-md mb-2" />
        <div className="w-2/3 h-4 bg-gray-100 rounded-md" />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((_, i) => (
          <div
            key={i}
            className="dep-card bg-white rounded-lg p-4 shadow-sm flex flex-col gap-4 min-h-[180px] animate-pulse"
          >
            <div className="flex items-start gap-3">
              <div className="dep-quote w-8 h-8 text-center leading-8 rounded-full bg-gray-200" />
              <div className="flex-1">
                <div className="w-full h-4 bg-gray-200 rounded mb-2" />
                <div className="w-5/6 h-3 bg-gray-100 rounded" />
              </div>
            </div>

            <div className="mt-auto flex items-center gap-3">
              <div className="dep-avatar w-10 h-10 rounded-full bg-gray-200" />
              <div className="flex-1">
                <div className="w-36 h-4 bg-gray-200 rounded mb-1" />
                <div className="w-24 h-3 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
