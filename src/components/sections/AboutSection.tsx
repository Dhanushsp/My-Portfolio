import { Reveal } from "@/components/Reveal";

import { PillButton } from "./PillButton";

export function AboutSection() {
  return (
    <section className="px-4 py-24 sm:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
            Crafting Meaningful Brands &amp; Intuitive Digital Experiences That Stand Out
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex flex-col items-start justify-end">
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            I&apos;m Dominic, a London-based Brand and UI/UX Designer passionate about crafting
            visually compelling identities and seamless experiences. With a strategic approach and
            a keen eye for detail, I help businesses stand out and connect with their audience.
            Let&apos;s create something remarkable together.
          </p>
          <div className="mt-8">
            <PillButton href="#work">See my works</PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
