"use client";

import { Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/lib/content";

export function ImageGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="mt-8 grid gap-5">
        {items.map((item) => (
          <button
            type="button"
            key={item.label}
            onClick={() => setActive(item)}
            className="group relative overflow-hidden rounded-lg border border-slate-900/10 bg-white p-3 text-left shadow-[0_22px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-[#F5B700]/60 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] sm:p-4"
          >
            {item.src ? (
              <div className="relative">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md">
                  <Image
                    src={item.src}
                    alt={item.alt ?? item.label}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 1100px, 100vw"
                  />
                </div>
                <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[#FFD21E] text-slate-950 shadow-sm">
                  <Maximize2 size={17} />
                </span>
              </div>
            ) : (
              <div className="relative flex min-h-[280px] flex-col justify-between rounded-md bg-[#FFF3B0] p-5 sm:min-h-[380px]">
                <div className="absolute inset-5 rounded-md border border-dashed border-slate-900/18" />
                <div className="relative flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#C28A00]">
                    Screenshot Placeholder
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#C28A00] shadow-sm">
                    <Maximize2 size={17} />
                  </span>
                </div>
                <div className="relative">
                  <p className="max-w-lg text-2xl font-semibold leading-tight text-slate-950">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Replace this placeholder with the final product screenshot.
                  </p>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
      {active ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Close
          </button>
          <div className="w-full max-w-5xl rounded-lg border border-white/30 bg-white p-5 shadow-xl">
            {active.src ? (
              <div className="relative h-[78vh] w-full overflow-hidden rounded-md">
                <Image
                  src={active.src}
                  alt={active.alt ?? active.label}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            ) : (
              <div className="grid min-h-[62vh] place-items-center rounded-md border border-dashed border-slate-900/22 bg-white/54 p-8 text-center">
                <div>
                  <p className="text-3xl font-semibold text-slate-950">
                    {active.label}
                  </p>
                  <p className="mt-4 text-slate-600">
                    Replace this placeholder with the final product screenshot.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
