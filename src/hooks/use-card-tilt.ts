"use client";

import { useRef } from "react";
import {
  useReducedMotion,
  useSpring,
  type SpringOptions,
} from "motion/react";

const DEFAULT_TILT_RANGE = 10;
const DEFAULT_LIFT = -4;
const DEFAULT_SPRING: SpringOptions = { stiffness: 380, damping: 32 };

type UseCardTiltOptions = {
  tiltRange?: number;
  lift?: number;
  spring?: SpringOptions;
};

export function useCardTilt(options?: UseCardTiltOptions) {
  const {
    tiltRange = DEFAULT_TILT_RANGE,
    lift = DEFAULT_LIFT,
    spring = DEFAULT_SPRING,
  } = options ?? {};

  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const liftY = useSpring(0, spring);

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    liftY.set(0);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(((offsetX - centerX) / centerX) * tiltRange);
    rotateX.set(((centerY - offsetY) / centerY) * tiltRange);
    liftY.set(lift);
  };

  return {
    cardRef,
    tiltHandlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: resetTilt,
    },
    tiltStyle: {
      rotateX: shouldReduceMotion ? 0 : rotateX,
      rotateY: shouldReduceMotion ? 0 : rotateY,
      y: shouldReduceMotion ? 0 : liftY,
      transformStyle: "preserve-3d" as const,
    },
  };
}
