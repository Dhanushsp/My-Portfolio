import { Reveal } from "@/components/Reveal";

type ServiceItem = {
  n: string;
  title: string;
  body: string;
};

type ServicesSectionProps = {
  services: ServiceItem[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            Design Solutions That Elevate Your Brand
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            From strategy to execution, I provide tailored design services that help brands stand
            out and create meaningful connections.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.n}
              delay={index * 120}
              className="group rounded-3xl border border-border bg-surface p-8 transition-colors duration-500 hover:border-primary/60"
            >
              <span className="text-4xl font-semibold text-primary">{service.n}</span>
              <h3 className="mt-16 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
