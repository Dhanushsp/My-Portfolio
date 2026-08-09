import { Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";

type PlanItem = {
  tag: string;
  price: string;
  sub: string;
  features: string[];
  featured: boolean;
};

type PricingSectionProps = {
  plans: PlanItem[];
};

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">Choose your Plan</h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Explore my prices and see why over 100 founders choose to build their brand with me.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.tag}
              delay={index * 120}
              className={
                plan.featured
                  ? "glow-ring rounded-3xl bg-primary p-8 text-primary-foreground md:-mt-4"
                  : "rounded-3xl border border-border bg-surface p-8"
              }
            >
              <p
                className={
                  plan.featured
                    ? "text-xs font-semibold uppercase tracking-widest"
                    : "text-xs font-semibold uppercase tracking-widest text-primary"
                }
              >
                {plan.tag}
              </p>
              <p className="mt-4 text-4xl font-bold">{plan.price}</p>
              <p className={plan.featured ? "mt-1 text-sm" : "mt-1 text-sm text-muted-foreground"}>
                {plan.sub}
              </p>
              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={
                        plan.featured
                          ? "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-primary"
                          : "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      }
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className={plan.featured ? "" : "text-muted-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  plan.featured
                    ? "mt-8 block rounded-full bg-background py-3 text-center text-sm font-medium text-foreground transition-transform duration-300 hover:scale-[1.02]"
                    : "mt-8 block rounded-full bg-primary py-3 text-center text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
                }
              >
                Contact me
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
