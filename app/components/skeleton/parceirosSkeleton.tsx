"use client";

import React from "react";

type Props = { count?: number };
export default function ParceirosSkeleton({ count = 3 }: Props) {
  const rows = Array.from({ length: count });

  return (
    <section id="parceiros" className="py-8">
      <div className="mb-4 animate-pulse">
        <div className="w-80 h-4 bg-gray-200 rounded-md mb-2 mx-auto" />
        <div className="w-2/3 h-3 bg-gray-100 rounded-md mx-auto" />
      </div>

      <div className="flex flex-col gap-4">
        {rows.map((_, i) => (
          <div
            key={i}
            className="parceiro-group flex flex-wrap gap-3 items-center justify-center bg-white rounded-lg p-4 shadow-sm animate-pulse"
          >
            <span className="w-28 h-8 bg-gray-200 rounded" />
            <span className="w-28 h-8 bg-gray-200 rounded" />
            <span className="w-28 h-8 bg-gray-200 rounded" />
            <span className="w-28 h-8 bg-gray-200 rounded" />
            <span className="w-28 h-8 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}
