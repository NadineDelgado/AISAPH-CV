"use client";

import React from "react";

type Props = { count?: number };
export default function PorquesSkeleton({ count = 3 }: Props) {
  const items = Array.from({ length: count });

  return (
    <section id="porque" className="py-8">
      <div className="porque-header mb-6 animate-pulse">
        <div className="section-tag w-44 h-4 bg-gray-200 rounded-md mb-3" />
        <div className="w-72 h-10 bg-gray-200 rounded-md mb-2" />
        <div className="w-2/3 h-4 bg-gray-100 rounded-md" />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((_, i) => (
          <div
            key={i}
            className="porque-item bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4 animate-pulse min-h-[160px]"
          >
            <div className="icon-wrap w-12 h-12 bg-gray-200 rounded-full" />
            <div className="w-40 h-5 bg-gray-200 rounded" />
            <div className="w-full h-12 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}
