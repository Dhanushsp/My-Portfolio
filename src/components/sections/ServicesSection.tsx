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

        <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.n}
              delay={index * 120}
              className="group rounded-3xl border border-border bg-surface p-4 text-sm transition-colors duration-500 hover:border-primary/60"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-lg font-semibold text-primary ring-1 ring-primary/20">
                  {service.n}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
