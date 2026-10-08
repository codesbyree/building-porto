"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, useGSAP);
}

interface MorphingTextProps {
  textA: string;
  textB: string;
  startDelay?: number;
  holdDuration?: number;
}

export function MorphingText({ textA, textB, startDelay = 1, holdDuration = 2 }: MorphingTextProps) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = spanRef.current;
      if (!el) return;

      let isShowingA = true;
      let currentSplit = new SplitText(el, { type: "chars" });
      let delayedCallInstance: gsap.core.Tween;

      const swapTextValue = () => {
        gsap.to(currentSplit.chars, {
          y: -5,
          autoAlpha: 0,
          stagger: 0.03,
          duration: 0.35,
          ease: "power3.in(1.5)",
          onComplete: () => {
            currentSplit.revert();

            isShowingA = !isShowingA;
            el.textContent = isShowingA ? textA : textB;

            currentSplit = new SplitText(el, { type: "chars" });

            gsap.fromTo(
              currentSplit.chars,
              { y: 5, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                stagger: 0.03,
                duration: 0.35,
                ease: "power2.out",
                onComplete: () => {
                  delayedCallInstance = gsap.delayedCall(holdDuration, swapTextValue);
                },
              },
            );
          },
        });
      };

      delayedCallInstance = gsap.delayedCall(startDelay + holdDuration, swapTextValue);

      return () => {
        delayedCallInstance?.kill();
        currentSplit?.revert();
      };
    },
    { scope: spanRef, dependencies: [textA, textB, startDelay, holdDuration] },
  );

  return <span ref={spanRef}>{textA}</span>;
}
