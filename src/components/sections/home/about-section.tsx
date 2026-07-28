import { Circle } from "lucide-react";
import { ScrollView } from "@/components/scroll-view";

const mySkills = [
  {
    title: "Full-stack build",
    description:
      "Comfortable moving from interface polish to APIs, databases, auth, payments, and deployment.",
  },
  {
    title: "Product-minded",
    description:
      "I care about the path users take through a product, not just the code that powers it.",
  },
  {
    title: "Calm collaboration",
    description:
      "Teaching assistant and client-facing experience shaped a clear, practical communication style.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-20 md:py-28" id="about">
      <div className="section-shell">
        <div
          className="depth-card group grid gap-10 rounded-[2rem] p-6 md:grid-cols-[0.85fr_1.15fr] md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          tabIndex={0}
        >
          <ScrollView>
            <div className="space-y-4">
              <span className="eyebrow">About</span>
              <h2 className="text-balance text-5xl font-semibold leading-none md:text-6xl md:max-w-[17rem]">
                Developer with an{" "}
                <span
                  className="relative inline-grid place-items-center align-middle text-primary [grid-template-areas:'stack'] [&>*]:[grid-area:stack]"
                  role="img"
                  aria-label="eye"
                >
                  <span
                    aria-hidden="true"
                    className="text-6xl leading-1 transition-opacity duration-600 md:text-7xl group-hover:opacity-0 group-focus:opacity-0"
                  >
                    👁
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-5xl leading-1 opacity-0 transition-opacity duration-600 group-hover:opacity-100 group-focus:opacity-100 md:text-6xl relative -top-[0.3rem] md:-top-[0.45rem]"
                  >
                    eye
                  </span>
                </span>{" "}
                for the little details.
              </h2>
            </div>
          </ScrollView>

          <div className="space-y-8">
            <ScrollView delay={0.1}>
              <div className="space-y-4">
                <p>
                  My background combines studies at Simon Fraser University in Computing Science, web development training at
                  BrainStation (with hands-on work as a Teaching Assistant) along with professional experience as a Full-Stack Developer.
                </p>
                <p>
                  I build practical web products that feel considered with
                  carefully crafted interfaces and reliable systems behind them.
                </p>
              </div>
            </ScrollView>

            <ScrollView stagger delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                {mySkills.map((skill) => (
                  <div
                    className="rounded-2xl border bg-background/60 p-4 shadow-inner"
                    key={skill.title}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Circle className="size-3 fill-primary text-primary" />
                      <h3 className="text-sm font-semibold">{skill.title}</h3>
                    </div>
                    <p className="text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
