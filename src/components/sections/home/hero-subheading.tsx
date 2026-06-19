"use client";

import { type ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  "marketing sites",
  "SaaS tools",
  "CMS integrations",
  "e-commerce setups",
  "payment flows",
  "search experiences",
] as const;

const SOLUTION_PAIRS = SOLUTIONS.map((from, index) => ({
  from,
  to: SOLUTIONS[(index + 1) % SOLUTIONS.length],
}));

const LONGEST_PAIR = SOLUTION_PAIRS.reduce((longest, pair) => {
  const phrase = `${pair.from} to ${pair.to},`;

  return phrase.length > longest.length ? phrase : longest;
}, "");

const CYCLE_MS = 3200;

const slotTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

const phraseVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const phrasePartVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: slotTransition },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { ...slotTransition, duration: 0.28 },
  },
};

function SolutionPhrase({ from, to }: { from: string; to: string }) {
  return (
    <>
      <span className="text-foreground">{from}</span> to{" "}
      <span className="text-foreground">{to}</span>,
    </>
  );
}

function AnimatedPhrasePart({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      variants={phrasePartVariants}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}

function AnimatedPhrase({ from, to }: { from: string; to: string }) {
  return (
    <span className="relative inline-grid max-w-full align-bottom">
      <span
        aria-hidden
        className="invisible col-start-1 row-start-1 whitespace-nowrap"
      >
        {LONGEST_PAIR}
      </span>
      <span className="col-start-1 row-start-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`${from}-${to}`}
            variants={phraseVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="inline-flex whitespace-nowrap"
          >
            <AnimatedPhrasePart className="text-foreground">
              {from.charAt(0).toUpperCase() + from.slice(1)}
            </AnimatedPhrasePart>
            <AnimatedPhrasePart className="px-1">to</AnimatedPhrasePart>
            <AnimatedPhrasePart className="text-foreground">
              {to},
            </AnimatedPhrasePart>
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

export function HeroSubheading({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const from = SOLUTIONS[index];
  const to = SOLUTIONS[(index + 1) % SOLUTIONS.length];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SOLUTIONS.length);
    }, CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <p
        className={cn(
          "mt-4 max-w-2xl text-balance text-base text-muted-foreground md:text-xl leading-relaxed",
          className,
        )}
      >
        <SolutionPhrase from={from} to={to} />
        <br />
        <span className="text-regular font-display">
          and all the small details that make a launch feel finished
        </span>
      </p>
    );
  }

  return (
    <p
      className={cn(
        "mt-4 max-w-2xl text-balance text-base text-muted-foreground md:text-xl leading-relaxed",
        className,
      )}
    >
      <AnimatedPhrase from={from} to={to} />
      <br />
      <span className="text-regular font-display">
       and all the small details that make a launch feel finished
      </span>
    </p>
  );
}
