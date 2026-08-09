import { Menu } from "lucide-react";
import { useState } from "react";

import { BrandLogo } from "./BrandLogo";

export type NavLink = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  links?: NavLink[];
};

const defaultLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader({ links = defaultLinks }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-rise fixed left-0 right-0 top-4 z-50 px-4 sm:px-8">
      <nav className="mx-auto flex max-w-[1400px] items-start">
        <div className="rounded-3xl border border-border bg-card/80 px-4 py-2.5 backdrop-blur-xl sm:px-5 sm:py-3">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#home" aria-label="Dominic home">
              <BrandLogo />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="rounded-full p-0.5 text-foreground/80 transition-colors hover:text-primary sm:p-1"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
          {open && (
            <ul className="animate-rise mt-4 flex flex-col gap-3 border-t border-border pt-4 text-sm text-muted-foreground">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
