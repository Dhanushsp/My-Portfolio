import { Reveal } from "@/components/Reveal";
import { PillButton } from "./PillButton";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type TemplateProduct = {
  name: string;
  description: string;
  price: string;
  niche: string;
  href: string;
};

type TemplateBundle = {
  bundleName: string;
  description: string;
  products: TemplateProduct[];
};

const bundles: TemplateBundle[] = [
  {
    bundleName: "SaaS & Startup",
    description: "Landing pages and dashboard shells built for product launches.",
    products: [
      {
        name: "Nimbus SaaS Kit",
        description: "A clean marketing site + dashboard shell for SaaS products.",
        price: "$49",
        niche: "SaaS",
        href: "#",
      },
      {
        name: "Launchpad",
        description: "High-converting landing page for early-stage startups.",
        price: "$39",
        niche: "Startup",
        href: "#",
      },
    ],
  },
  {
    bundleName: "E-commerce",
    description: "Storefronts and product pages tuned for conversion.",
    products: [
      {
        name: "Storefront Pro",
        description: "A polished multi-category storefront template.",
        price: "$59",
        niche: "E-commerce",
        href: "#",
      },
      {
        name: "Boutique",
        description: "Minimal single-product template for boutique brands.",
        price: "$35",
        niche: "Retail",
        href: "#",
      },
    ],
  },
  {
    bundleName: "Creative & Portfolio",
    description: "Portfolio and agency sites for designers and studios.",
    products: [
      {
        name: "Studio",
        description: "Bold portfolio template for design studios.",
        price: "$45",
        niche: "Portfolio",
        href: "#",
      },
      {
        name: "Atelier",
        description: "Photography-first template with fullbleed galleries.",
        price: "$42",
        niche: "Photography",
        href: "#",
      },
    ],
  },
];

function ProductCard({ product }: { product: TemplateProduct }) {
  return (
    <Reveal className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors duration-500 hover:border-primary/60">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-foreground">{product.price}</p>
          <a
            href={product.href}
            className="mt-3 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View template →
          </a>
        </div>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary ring-1 ring-primary/20">
          {product.niche}
        </span>
      </div>
    </Reveal>
  );
}

function BundleSection({ bundle, index }: { bundle: TemplateBundle; index: number }) {
  return (
    <section className="mt-16 first:mt-0">
      <Reveal delay={index * 80}>
        <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
          {bundle.bundleName}
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">{bundle.description}</p>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bundle.products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

export function TemplatesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      <main className="px-4 pb-24 pt-32 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Templates
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Website templates, bundled by niche.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ready-made bundles grouped by niche. Pick a bundle, then a template inside it — each
              links out to its own product page.
            </p>
          </Reveal>

          {bundles.map((bundle, index) => (
            <BundleSection key={bundle.bundleName} bundle={bundle} index={index} />
          ))}

          <Reveal delay={bundles.length * 80} className="mt-20 text-center">
            <p className="text-muted-foreground">Don&apos;t see your niche?</p>
            <div className="mt-4 inline-flex">
              <PillButton href="#contact">Request a custom template</PillButton>
            </div>
          </Reveal>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
