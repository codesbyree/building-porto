"use client";

import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "@/lib/utils";

interface ScrollAreaProps extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
  hideScrollBar?: boolean;
}

export function ScrollArea({ className, children, hideScrollBar = false, ...props }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root className={cn("relative group overflow-hidden", className)} {...props}>
      <ScrollAreaPrimitive.Viewport className="h-full max-h-[inherit] w-full rounded-[inherit] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </ScrollAreaPrimitive.Viewport>
      {!hideScrollBar && <ScrollBar />}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

interface ScrollBarProps extends React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar> {
  hidden?: boolean;
}

export function ScrollBar({ className, orientation = "vertical", hidden = false, ...props }: ScrollBarProps) {
  if (hidden) return null;

  return (
    <ScrollAreaPrimitive.Scrollbar
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-opacity duration-200 opacity-0 group-hover:opacity-100 p-0.5 bg-transparent hover:bg-muted/50 w-2.5 rounded-full",
        orientation === "vertical" && "h-full right-0 top-0 border-l border-transparent",
        orientation === "horizontal" && "h-2.5 bottom-0 left-0 flex-col border-t border-transparent",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border hover:bg-muted-foreground/50 transition-colors" />
    </ScrollAreaPrimitive.Scrollbar>
  );
}
