import { BrandLogo } from "./BrandLogo";

const footerColumns = [
  { title: "Menu", items: ["Home", "Work", "Services", "Pricing"] },
  { title: "Navigation", items: ["Blog", "Projects", "Tutorial", "Contact"] },
  { title: "Social", items: ["LinkedIn", "Instagram", "Twitter", "Dribbble"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-14 sm:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Brand &amp; UI/UX Designer based in London.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold">{column.title}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {column.items.map((item) => (
                <li key={item}>
                  <a href="#home" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-[1400px] text-xs text-muted-foreground">
        © 2026 Dominic. All rights reserved.
      </p>
    </footer>
  );
}
