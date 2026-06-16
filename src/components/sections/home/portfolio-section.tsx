import PortfolioCard from "@/components/portfolio-card";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import { ScrollView } from "@/components/scroll-view";

export default function PortfolioSection() {
  return (
    <section
      className="site-texture relative scroll-mt-28 overflow-hidden py-20 md:py-28"
      id="portfolio"
    >
      <div className="ambient-orb right-[-10rem] top-24 -z-10 size-72 bg-sage/25" />
      <div className="contour-field absolute inset-x-0 top-0 -z-10 h-80 opacity-35" />
      <div className="section-shell space-y-14">
        <div className="relative z-10 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollView>
            <div className="space-y-4 text-center lg:text-left">
              <span className="eyebrow">Selected work</span>
              <h2 className="max-w-3xl text-balance text-5xl font-semibold leading-none md:text-6xl lg:text-7xl text-center mx-auto lg:text-left">
                Screenshots first. Claims second.
              </h2>
            </div>
          </ScrollView>
          <ScrollView delay={0.15}>
            <p className="max-w-xl text-center mx-auto lg:ml-auto lg:text-left lg:mr-0 lg:mb-2">
              Each project is framed by the business it served, the part
              Brishan owned, and the feature or system that made it launchable.
              The work has to carry the page before the adjectives do.
            </p>
          </ScrollView>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PORTFOLIO_CONTENT.map((item, index) => (
            <div key={item.name} className={index % 2 === 1 ? "lg:mt-20" : ""}>
              <PortfolioCard card={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
