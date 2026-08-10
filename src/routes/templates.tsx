import { Reveal } from "@/components/Reveal";
import { PillButton, SiteFooter, SiteHeader } from "@/components/sections";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

type TemplateProduct = {
  name: string;
  description: string;
  price: string;
  niche: string;
  href: string; // TODO: replace with each product's real link
  image: string;
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
        image: work1,
      },
      {
        name: "Launchpad",
        description: "High-converting landing page for early-stage startups.",
        price: "$39",
        niche: "Startup",
        href: "#",
        image: work2,
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
        image: work3,
      },
      {
        name: "Boutique",
        description: "Minimal single-product template for boutique brands.",
        price: "$35",
        niche: "Retail",
        href: "#",
        image: work4,
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
        image: work5,
      },
      {
        name: "Atelier",
        description: "Photography-first template with fullbleed galleries.",
        price: "$42",
        niche: "Photography",
        href: "#",
        image: work1,
      },
    ],
  },
];

function ProductCard({ product, delay }: { product: TemplateProduct; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-3xl border border-border bg-slate-950/10 shadow-sm transition-all duration-500 hover:shadow-lg"
    >
      <div className="relative h-56 sm:h-64 lg:h-72">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-3">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl bg-slate-950/70 px-3 py-2 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-100">
              {product.niche}
            </span>
            <a
              href={product.href}
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-white/90"
            >
              View template
            </a>
          </div>
        </div>
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

      <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-3">
        {bundle.products.map((product, productIndex) => (
          <ProductCard
            key={product.name}
            product={product}
            delay={index * 80 + productIndex * 120}
          />
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
              Ready-made bundles grouped by niche. Pick a bundle, then a template inside it —
              each links out to its own product page.
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