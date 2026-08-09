import { Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";

type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
};

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
            Trusted by Brands, Loved by Clients
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Great design goes beyond aesthetics — it creates impact. Hear from clients who have
            experienced the power of thoughtful branding and design firsthand.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.name}-${index}`}
              delay={index * 120}
              className="rounded-3xl border border-border bg-surface p-7"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
