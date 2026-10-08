"use client";

import { useRef, type HTMLAttributes } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cn } from "cn";
import { ScrollArea } from "./scroll-area";
import { MorphingText } from "./morphing-text";

interface Props extends HTMLAttributes<HTMLDivElement> {
  position: "left" | "right";
}

export function WidgetIsland(props: Props) {
  const { position, children, className, ...rest } = props;

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(container.current, {
        xPercent: position === "left" ? -100 : 100,
      });

      gsap.to(container.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out(1.5)",
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className={cn(
        "slide-in w-100 h-dvh absolute z-10 top-0 left-0 bg-linear-to-r from-background/60 via-background/30 to-transparent",
        position === "right" && "bg-linear-to-l right-0 left-auto",
        className,
      )}
    >
      <ScrollArea className="h-dvh" hideScrollBar>
        <div {...rest} className="p-4 flex flex-col gap-4">
          {children}
        </div>
      </ScrollArea>
    </div>
  );
}

export function WidgetGrid(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} className={cn("w-full grid grid-cols-12", className)}>
      {children}
    </div>
  );
}

interface WidgetContentProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function WidgetContent(props: WidgetContentProps) {
  const { children, className, title, ...rest } = props;

  return (
    <div {...rest} className={cn("col-span-12 w-full flex flex-col gap-1", className)}>
      {title && <h2 className="text-sm text-gray-950/70 dark:text-gray-50/70">{title}</h2>}

      <div className="gap-4 p-2 bg-gray-950/60 outline-gray-600/20 w-full rounded-md outline min-h-11 flex backdrop-blur-sm">{children}</div>
    </div>
  );
}

interface WidgetStatProps {
  title: string;
  value: string;
  unit?: string;
  className?: string;
}

export function WidgetStat(props: WidgetStatProps) {
  const { title, value, unit, className } = props;

  return (
    <div className={cn("flex flex-col p-2 rounded-sm bg-gray-950/40 outline outline-gray-800/50", className)}>
      <h3 className="text-gray-50/60 text-xs">{title}</h3>
      <p className="text-gray-50 text-lg font-semibold">
        <MorphingText textA={value} textB={value} />
        {unit && <span className="text-xs ml-1 text-gray-50/60 font-normal">{unit}</span>}
      </p>
    </div>
  );
}
