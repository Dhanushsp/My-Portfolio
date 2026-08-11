// src/components/sections/WorkSection.tsx
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";

type WorkSectionProps = {
  topRowWorks: string[];
  bottomRowWorks: string[];
};

export function WorkSection({ topRowWorks, bottomRowWorks }: WorkSectionProps) {
  return (
    <section id="work" className="py-6">
      <Reveal>
        <Marquee duration={45} draggable>
          {topRowWorks.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="group relative mr-5 h-56 w-64 shrink-0 overflow-hidden rounded-2xl sm:h-80 sm:w-96"
            >
              <img
                src={src}
                alt={`Bundle design ${index + 1}`}
                loading="lazy"
                width={800}
                height={800}
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          ))}
        </Marquee>
      </Reveal>
      <Reveal delay={100} className="mt-5">
        <Marquee duration={55} reverse draggable>
          {bottomRowWorks.map((src, index) => (
            <div
              key={`${src}-${index}-reverse`}
              className="group relative mr-5 h-40 w-48 shrink-0 overflow-hidden rounded-2xl sm:h-56 sm:w-72"
            >
              <img
                src={src}
                alt={`Project design ${index + 1}`}
                loading="lazy"
                width={800}
                height={800}
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
            </div>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}