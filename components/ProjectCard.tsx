"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/content";

const accents = {
  blue: "from-[#FFF7C7] via-white to-[#FFFBEA]",
  brown: "from-[#F8FAFC] via-white to-[#FFF3B0]",
  caramel: "from-[#FFF7ED] via-white to-[#FFF7C7]",
};

type ProjectCardProps = {
  study: CaseStudy;
  index?: number;
};

export function ProjectCard({ study, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Link
        href={study.route}
        className="group grid overflow-hidden rounded-lg border border-slate-900/10 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#F5B700]/60 hover:shadow-[0_34px_90px_rgba(15,23,42,0.12)] lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className={`relative min-h-[290px] bg-gradient-to-br p-3 sm:min-h-[410px] sm:p-5 ${accents[study.accent]}`}>
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-[#FFD21E] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 shadow-sm backdrop-blur">
            Case Study
          </div>
          <div className="relative h-full min-h-[260px] overflow-hidden rounded-md border border-slate-900/10 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] sm:min-h-[370px]">
            <Image
              src={study.previewImage}
              alt={study.previewAlt}
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
              sizes="(min-width: 1024px) 760px, 100vw"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between border-t border-slate-900/8 p-7 sm:p-10 lg:border-l lg:border-t-0">
          <div>
            <h3 className="text-balance text-3xl font-semibold leading-[1.04] text-slate-950 sm:text-4xl">
              {study.shortTitle}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              {study.description}
            </p>
          </div>
          <span className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#C28A00]">
            View Case Study
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
