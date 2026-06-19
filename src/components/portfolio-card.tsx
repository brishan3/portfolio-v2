import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CustomCursorElement } from "./custom-cursor-element";
import { ViewCursorLabel } from "./view-cursor-label";
import { ScrollView } from "./scroll-view";
import { Badge } from "./ui/badge";
import type { PortfolioItem } from "@/content/portfolio";

export default function PortfolioCard({
  card,
}: {
  card: PortfolioItem;
}) {
  return (
    <article>
      <CustomCursorElement cursor={<ViewCursorLabel />}>
        <ScrollView>
          <a
            href={card.url}
            target="_blank"
            rel="noreferrer"
            className="depth-card group block overflow-hidden rounded-[2rem] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-primary/45 hover:shadow-xl hover:shadow-moss/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="overflow-hidden rounded-[1.5rem] border bg-background shadow-inner">
              <Image
                className="aspect-video w-full object-cover object-top saturate-[0.92] transition-all duration-700 group-hover:saturate-100"
                height="720"
                width="1280"
                src={card.img}
                alt={`${card.name} project screenshot`}
              />
            </div>
            <div className="space-y-5 p-5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="mb-2 block font-mono text-xs capitalize tracking-[0.24em] text-primary">
                    {card.role}
                  </span>
                  <h3 className="text-title text-3xl font-semibold leading-none">
                    {card.name}
                  </h3>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border bg-background text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <p className="text-sm">{card.description}</p>

              <div className="rounded-2xl border bg-background/65 p-4 shadow-inner">
                <span className="mb-1 block font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Outcome
                </span>
                <p className="text-sm text-foreground">{card.outcome}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </a>
        </ScrollView>
      </CustomCursorElement>
    </article>
  );
}
