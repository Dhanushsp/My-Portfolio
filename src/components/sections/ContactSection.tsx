import { Reveal } from "@/components/Reveal";

import { PillButton } from "./PillButton";

type ContactSectionProps = {
  ctaPortrait: string;
};

export function ContactSection({ ctaPortrait }: ContactSectionProps) {
  return (
    <section id="contact" className="px-4 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[32px] border border-border">
          <img
            src={ctaPortrait}
            alt="Portrait of designer Dominic Wagner"
            loading="lazy"
            width={1408}
            height={800}
            className="h-[420px] w-full object-cover object-right sm:h-[480px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center gap-6 p-8 sm:p-14">
            <h2 className="max-w-md text-3xl font-semibold leading-tight sm:text-5xl">
              Let&apos;s Bring Your Vision to Life
            </h2>
            <div>
              <PillButton href="#contact">Contact me</PillButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
