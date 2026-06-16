"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/content/nav";
import { ThemeToggle } from "./theme-toggle";

const SECTION_IDS = ["home", "portfolio", "about", "services", "contact"];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const updateActiveSection = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.38;
      const currentSection =
        SECTION_IDS.findLast((id) => {
          const section = document.getElementById(id);
          return section ? section.offsetTop <= readingLine : false;
        }) ?? "home";

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/" && activeSection === "home";
    }

    return href.replace("#", "") === activeSection;
  };

  const renderNavLink = (
    item: (typeof NAV_LINKS)[number],
    markerId: string,
    onClick?: () => void
  ) => {
    const isActive = isActiveLink(item.href);

    return (
      <Link
        href={item.href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "group relative block rounded-full px-3 py-2 text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "isolate",
          isActive && "text-foreground"
        )}
      >
        {isActive && (
          <motion.span
            layoutId={markerId}
            className="absolute inset-0 -z-10 rounded-full border bg-primary/10 shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.18)]"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
        )}
        <span className="relative">{item.name}</span>
      </Link>
    );
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-3"
      >
        <div
          className={cn(
            "mx-auto mt-3 max-w-6xl px-4 transition-[max-width,background-color] duration-300 sm:px-5 lg:px-6",
            menuState ? "rounded-3xl lg:rounded-full" : "rounded-full",
            isScrolled &&
              cn(
                "max-w-5xl border shadow-sm shadow-clay/10 backdrop-blur-xl lg:px-5",
                menuState ? "bg-background" : "bg-background/40"
              )
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-5 py-3 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4">
            <div className="flex w-full justify-between lg:w-auto lg:min-w-0">
              <Link
                href="/"
                aria-label="home"
                className="flex min-w-0 items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-2 block cursor-pointer rounded-full p-2.5 text-primary lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="hidden min-w-0 justify-center lg:flex">
              <ul className="flex max-w-full flex-wrap justify-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] xl:gap-2 xl:tracking-[0.22em]">
                {NAV_LINKS.map((item, index) => (
                  <li key={index} className="relative">
                    {renderNavLink(item, "desktop-nav-marker")}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "in-data-[state=active]:block lg:in-data-[state=active]:flex mb-2 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-4 transition-all duration-300",
                menuState
                  && !isScrolled && "rounded-3xl border bg-card/95 p-6 shadow-2xl shadow-clay/15 backdrop-blur",
                menuState && isScrolled
                  && "rounded-3xl border bg-card/0 p-0 shadow-clay/15 backdrop-blur border-transparent"
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-3 text-sm font-semibold uppercase tracking-[0.2em]">
                  {NAV_LINKS.map((item, index) => (
                    <li key={index} className="relative">
                      {renderNavLink(item, "mobile-nav-marker", () =>
                        setMenuState(false)
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <ThemeToggle />
              <Link
                href="#portfolio"
                className="hidden whitespace-nowrap rounded-full border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:block"
              >
                View work
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
