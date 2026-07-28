import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { SERVICES_LIST } from "@/content/services";

export default function ServicesSection2() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" id="services">
      <div className="contour-field texture-soft-mask absolute inset-x-0 -top-28 -z-10 h-[32rem] opacity-10" />
      <div className="section-shell space-y-12">
        <div className="relative z-10 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <ScrollView>
            <div className="space-y-4">
              <span className="eyebrow">Capabilities</span>
              <h2 className="text-balance text-5xl font-semibold leading-none md:text-6xl">
                The stack behind the work.
              </h2>
            </div>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="max-w-2xl md:ml-auto">
              A peek at the tools and systems I reach for across project builds,
              from front-end polish to CMS workflows, payments, search, and
              backend foundations.
            </p>
          </ScrollView>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES_LIST.map((service, index) => (
            <ScrollView key={service.name} delay={index * 0.05}>
              <div className="depth-card h-full rounded-[1.75rem] p-6 transition-colors duration-300 hover:border-primary/40">
                <div className="mb-5 flex items-center justify-between gap-6">
                  <h3 className="text-title text-3xl font-semibold leading-none">
                    {service.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <p className="mb-6 text-sm">{service.description}</p>
                <ScrollView stagger delay={0.04}>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <ScrollViewStaggerWrapper key={tag}>
                        <Badge variant="secondary" className="rounded-full">
                          {tag}
                        </Badge>
                      </ScrollViewStaggerWrapper>
                    ))}
                  </div>
                </ScrollView>
              </div>
            </ScrollView>
          ))}
        </div>
      </div>
    </section>
  );
}
