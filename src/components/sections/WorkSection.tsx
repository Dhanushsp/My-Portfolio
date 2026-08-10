// src/components/sections/WorkSection.tsx
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";

type WorkSectionProps = {
  works: string[];
};

export function WorkSection({ works }: WorkSectionProps) {
  return (
    <section id="work" className="py-6">
      <Reveal>
        <Marquee duration={45} draggable>
          {works.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="mr-5 h-56 w-64 shrink-0 overflow-hidden rounded-2xl sm:h-80 sm:w-96"
            >
              <img
                src={src}
                alt={`Selected design project ${index + 1}`}
                loading="lazy"
                width={800}
                height={800}
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </Reveal>
      <Reveal delay={100} className="mt-5">
        <Marquee duration={55} reverse draggable>
          {[...works].reverse().map((src, index) => (
            <div
              key={`${src}-${index}-reverse`}
              className="mr-5 h-40 w-48 shrink-0 overflow-hidden rounded-2xl sm:h-56 sm:w-72"
            >
              <img
                src={src}
                alt={`Design case study ${index + 1}`}
                loading="lazy"
                width={800}
                height={800}
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}