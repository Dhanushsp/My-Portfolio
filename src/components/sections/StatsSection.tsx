import { Reveal } from "@/components/Reveal";

type StatItem = {
  value: string;
  label: string;
};

type StatsSectionProps = {
  stats: StatItem[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="max-w-md text-3xl font-semibold leading-tight sm:text-5xl">
            Design That Delivers Real Results
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            From increased engagement to stronger brand recognition, my work is backed by
            measurable impact. Here&apos;s a look at the numbers that define success.
          </p>
        </Reveal>
        <div className="flex flex-col gap-8">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120}>
              <p className="text-5xl font-bold text-primary sm:text-6xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
