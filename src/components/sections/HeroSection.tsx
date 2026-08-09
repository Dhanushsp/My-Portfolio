import { Zap } from "lucide-react";

import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";

import { PillButton } from "./PillButton";

type HeroSectionProps = {
  heroBg: string;
  clients: string[];
};

export function HeroSection({ heroBg, clients }: HeroSectionProps) {
  const icons = [
    { key: "react", title: "React", subtitle: "Building interactive user interfaces" },
    { key: "js", title: "JavaScript", subtitle: "Writing clean and efficient code" },
    { key: "tw", title: "Tailwind CSS", subtitle: "Creating modern and responsive designs" },
    { key: "figma", title: "Figma", subtitle: "Designing intuitive user experiences" },
  ];

  return (
    <div className="flex flex-col lg:min-h-svh">
      <section
        id="home"
        className="relative flex flex-1 flex-col bg-cover bg-no-repeat bg-[position:76%_center] sm:bg-[position:80%_center] lg:bg-[position:right_center] px-4 pb-24 pt-28 sm:px-8 sm:pb-3 lg:min-h-0 lg:justify-center lg:pt-20"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >

        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between gap-8 lg:justify-center lg:gap-[clamp(1rem,4svh,3rem)]">
          <div className="grid grid-cols-1 items-start gap-4 lg:-translate-y-10 lg:gap-8 xl:gap-10">
            <div className="lg:flex lg:justify-start">
              <div className="w-full pt-0 lg:w-full lg:pt-4">
                <h1
                  className="animate-rise mt-0 text-[1.8rem] font-bold leading-[1.04] tracking-tight sm:text-5xl lg:mt-6 hero-title"
                  style={{ animationDelay: "140ms" }}
                >
                  Brand &amp; UI/UX
                  <br />
                  Designer based
                  <br />
                  in London
                </h1>

                {/* Desktop: replace paragraph with icons row. Mobile: show paragraph and stacked icons. */}
                <div className="animate-rise mt-5 lg:mt-6" style={{ animationDelay: "240ms" }}>
                  <p className="block text-sm leading-relaxed text-muted-foreground max-w-md lg:hidden">
                    Hi, I&apos;m Dominic Wagner - a UI/UX and brand designer passionate about creating
                    seamless digital experiences that connect and convert.
                  </p>

                  <div className="mt-4 flex flex-col gap-3 lg:hidden">
                    {icons.map((ic) => (
                      <div key={ic.key} className="flex items-center gap-3">
                        <div className="h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/10 border border-primary/30 text-primary flex">
                          <span className="font-semibold">{ic.title.slice(0,2)}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{ic.title}</div>
                          <div className="text-xs text-muted-foreground">{ic.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hidden lg:flex lg:items-center lg:gap-6 mt-1">
                    {icons.map((ic) => (
                      <div key={ic.key} className="flex flex-col items-center gap-2">
                        <div className="h-14 w-14 flex items-center justify-center rounded-3xl bg-card/80 border border-border text-primary">
                          <span className="font-semibold">{ic.title.slice(0,2)}</span>
                        </div>
                        <div className="text-sm font-medium text-foreground">{ic.title}</div>
                      </div>
                    ))}
                  </div>

                  <div className="animate-rise mt-7 lg:mt-8" style={{ animationDelay: "340ms" }}>
                    <PillButton href="#work" size="lg">
                      See my works
                    </PillButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-rise relative z-20 flex min-h-24 items-center justify-center sm:min-h-28 lg:mt-2 lg:block lg:min-h-0 lg:-translate-y-14" style={{ animationDelay: "420ms" }}>
            <h2 className="text-fade-bottom select-none text-center text-[19vw] sm:text-[18vw] lg:px-20 xl:px-24 lg:text-[22vw] font-bold leading-[0.85] tracking-tight hero-wordmark">
              Dominic
            </h2>
          </div>
        </div>

        <div className="animate-float absolute bottom-10 right-4 z-20 hidden items-center gap-3 rounded-2xl border border-primary/40 bg-card/88 px-4 py-3 backdrop-blur-md sm:right-8 lg:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Zap className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">Let&apos;s create</span>
            <span className="block text-sm font-semibold">something great!</span>
            <span className="block text-xs text-primary">Available for new projects</span>
          </span>
        </div>
      </section>

      {/* Mobile: pin marquee to bottom, desktop keep it inline below hero */}
      <Reveal className="fixed bottom-0 left-0 right-0 bg-background/90 border-t border-border py-3 lg:static lg:mt-2 lg:py-5">
        <Marquee duration={30}>
          {clients.map((client) => (
            <span
              key={client}
              className="flex items-center gap-3 px-8 text-lg font-medium text-muted-foreground lg:text-base"
            >
              <span className="h-3.5 w-3.5 rounded-full border-2 border-primary" />
              {client}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </div>
  );
}
