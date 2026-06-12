"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const speedClass = {
    fast: "duration-[20s]",
    normal: "duration-[40s]",
    slow: "duration-[60s]",
  }[speed];

  const dirClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={cn(
        "flex overflow-hidden w-full",
        pauseOnHover && "hover:[&>div]:animate-play-paused",
        className
      )}
    >
      <div className={cn("flex min-w-full shrink-0 items-center justify-around gap-4 whitespace-nowrap", dirClass, speedClass)}>
        {children}
      </div>
      <div aria-hidden="true" className={cn("flex min-w-full shrink-0 items-center justify-around gap-4 whitespace-nowrap", dirClass, speedClass)}>
        {children}
      </div>
      <div aria-hidden="true" className={cn("flex min-w-full shrink-0 items-center justify-around gap-4 whitespace-nowrap", dirClass, speedClass)}>
        {children}
      </div>
    </div>
  );
}
