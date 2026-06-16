"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { CustomCursorElement } from "@/components/custom-cursor-element";
import { ViewCursorLabel } from "@/components/view-cursor-label";
import { useCardTilt } from "@/hooks/use-card-tilt";
import type { PortfolioItem } from "@/content/portfolio";

type FeaturedProjectCardProps = {
  project: PortfolioItem;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const { cardRef, tiltHandlers, tiltStyle } = useCardTilt();

  return (
    <CustomCursorElement cursor={<ViewCursorLabel />}>
      <div className="relative z-10 max-w-[34rem] [perspective:1200px]">
        <motion.div
          ref={cardRef}
          {...tiltHandlers}
          style={tiltStyle}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="surface-card group block overflow-hidden rounded-[2rem] p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="overflow-hidden rounded-[1.55rem] border bg-background shadow-inner">
              <Image
                className="aspect-video w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                height={720}
                width={1280}
                src={project.img}
                alt={`${project.name} project screenshot`}
                priority
              />
            </div>
            <div className="space-y-4 p-5">
              <div>
                <span className="eyebrow mb-2 block">{project.role}</span>
                <h2 className="text-title text-3xl font-semibold leading-none sm:text-4xl">
                  {project.name}
                </h2>
              </div>
              <p>{project.description}</p>
            </div>
          </a>
        </motion.div>
      </div>
    </CustomCursorElement>
  );
}
