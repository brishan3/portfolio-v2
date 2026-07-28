import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedProjectCard } from "@/components/featured-project-card";
import { HeroSubheading } from "@/components/sections/home/hero-subheading";

import { PORTFOLIO_CONTENT } from "@/content/portfolio";

const featuredProjects = PORTFOLIO_CONTENT.slice(0, 4);

export default function HeroSection() {
  const [primaryProject] = featuredProjects;

  return (
    <section
      className="relative isolate flex min-h-[100svh] overflow-hidden pt-24"
      id="home"
    >
      <div className="ambient-orb left-[-8rem] top-24 -z-10 size-80 bg-sage/35" />
      <div className="ambient-orb bottom-8 right-[-6rem] -z-10 size-96 bg-taupe/45 [animation-delay:2s]" />

      <div className="section-shell grid items-center gap-8 py-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-24 lg:pt-0">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">

          <h1 className="max-w-[52rem] text-balance text-5xl font-semibold leading-[0.94] text-foreground sm:text-6xl md:text-7xl lg:text-8xl lg:max-w-[33rem]">
            Pragmatic full-stack web development for working businesses.
          </h1>

          <HeroSubheading />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="#portfolio">
                Open the archive
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6"
            >
              <Link href="#contact">
                <Mail className="size-4" />
                Start a conversation
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:pt-4">
          <div className="relative min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem]">
            <div className="absolute -right-6 top-8 h-56 w-36 rounded-full border border-primary/20 bg-card/45 blur-2xl" />
            <FeaturedProjectCard project={primaryProject} />

            <div className="mt-5 grid max-w-[34rem] grid-cols-3 gap-3">
              {featuredProjects.slice(1).map((project) => (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  key={project.name}
                  className="depth-card group overflow-hidden rounded-lg p-2 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/35"
                >
                  <div className="overflow-hidden rounded-sm border bg-background">
                    <Image
                      className="aspect-video w-full object-cover object-top"
                      height={360}
                      width={640}
                      src={project.img}
                      alt={`${project.name} project screenshot`}
                    />
                  </div>
                  <span className="mt-2 block truncate font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center text-muted-foreground text-sm">
              <Link href="#portfolio" className="hover:text-primary/80">
                View more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
