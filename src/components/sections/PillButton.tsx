import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PillButtonProps = {
  children: ReactNode;
  href?: string;
  size?: "default" | "lg";
};

export function PillButton({ children, href = "#contact", size = "default" }: PillButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full bg-primary py-1.5 pl-1.5 pr-5 text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:gap-3 sm:py-2 sm:pl-2 sm:pr-7",
        size === "lg" && "lg:gap-4 lg:py-2.5 lg:pl-2.5 lg:pr-9",
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full bg-background/95 text-primary transition-transform duration-300 group-hover:rotate-45 sm:h-11 sm:w-11",
          size === "lg" && "lg:h-12 lg:w-12",
        )}
      >
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>
      <span className={cn("text-sm font-medium sm:text-base", size === "lg" && "lg:text-lg")}>{children}</span>
    </a>
  );
}
