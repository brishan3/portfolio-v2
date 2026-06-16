"use client";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";
import { FOOTER_LINKS } from "@/content/footer";
import { Github, Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden py-16">
      <div className="paper-grain absolute inset-0 -z-10 opacity-[0.08]" />
      <div className="section-shell">
        <ScrollView>
          <div className="depth-card rounded-[2rem] p-6 md:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <Link href="/" aria-label="go home" className="block size-fit">
                <Logo />
              </Link>
              <p className="max-w-md text-sm">
                Project-first portfolio for full-stack web work, built with a
                quiet interface and an earthy palette.
              </p>
            </div>
          </div>
        </ScrollView>
        <ScrollView stagger delay={0.1}>
          <div className="my-8 flex flex-wrap justify-center gap-5 text-xs font-semibold uppercase tracking-[0.2em]">
            {FOOTER_LINKS.map((link, index) => (
              <div key={link.title}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    className="block text-muted-foreground duration-150 hover:text-primary"
                  >
                    <span>{link.title}</span>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </ScrollView>
        <ScrollView delay={0.15} viewMargin="0px 0px -20px 0px">
          <div className="my-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href="https://linkedin.com/in/brishan-king"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-full border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="size-4" />
            </Link>
            <Link
              href="https://github.com/brishan3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-full border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="size-4" />
            </Link>
          </div>
        </ScrollView>
        <ScrollView delay={0.2} viewMargin="0px 0px -20px 0px">
          <span className="block text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brishan King
          </span>
        </ScrollView>
      </div>
    </footer>
  );
}
