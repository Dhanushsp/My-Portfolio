import { Zap } from "lucide-react";
import {
  FaReact,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";

import { PillButton } from "./PillButton";

type HeroSectionProps = {
  heroBg: string;
  clients: string[];
};

export function HeroSection({
  heroBg,
  clients,
}: HeroSectionProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <section
        id="home"
        className="
          relative
          flex
          flex-1
          flex-col
          bg-cover
          bg-no-repeat
          bg-[position:76%_center]
          px-4
          pb-3
          pt-28
          sm:px-8
          sm:bg-[position:80%_center]
          lg:min-h-0
          lg:justify-center
          lg:bg-[position:right_center]
          lg:pt-20
        "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Main Hero Content */}
        <div className="relative z-10 flex flex-1 flex-col">
          <div className="lg:flex lg:flex-col lg:justify-center">
            <h1
              className="
                animate-rise
                mt-0
                text-[1.8rem]
                font-bold
                leading-[1.04]
                tracking-tight
                sm:text-5xl
                lg:mt-6
                hero-title
              "
              style={{ animationDelay: "140ms" }}
            >
              Brand & UI/UX
              <br />
              Designer based
              <br />
              in London
            </h1>

            {/* Technology Cards */}
            <div
              className="
                animate-rise
                mt-5
                max-w-[50vw]
                sm:max-w-md
                lg:mt-6
                lg:max-w-2xl
                hero-sub
                flex
              "
              style={{ animationDelay: "240ms" }}
            >
              <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2">
                {/* React */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-primary/30
                      bg-primary/10
                      shadow-[0_0_25px_rgba(255,105,0,0.18)]
                      backdrop-blur-xl
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FaReact
                      className="
                        h-4
                        w-4
                        text-primary
                        drop-shadow-[0_0_10px_rgba(255,105,0,0.5)]
                        sm:h-6
                        sm:w-6
                      "
                    />
                  </div>

                  <div className="leading-tight">
                    <span className="block text-sm font-semibold sm:text-base">
                      React
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Building interactive
                      <br />
                      user interfaces
                    </span>
                  </div>
                </div>

                {/* JavaScript */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-primary/30
                      bg-primary/10
                      shadow-[0_0_25px_rgba(255,105,0,0.18)]
                      backdrop-blur-xl
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <SiJavascript
                      className="
                        h-4
                        w-4
                        text-primary
                        drop-shadow-[0_0_10px_rgba(255,105,0,0.5)]
                        sm:h-5
                        sm:w-5
                      "
                    />
                  </div>

                  <div className="leading-tight">
                    <span className="block sm font-semibold sm:text-base">
                      JavaScript
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Writing clean and
                      <br />
                      efficient code
                    </span>
                  </div>
                </div>

                {/* Tailwind CSS */}
                {/* <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-primary/30
                      bg-primary/10
                      shadow-[0_0_25px_rgba(255,105,0,0.18)]
                      backdrop-blur-xl
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <SiTailwindcss
                      className="
                        h-4
                        w-4
                        text-primary
                        drop-shadow-[0_0_10px_rgba(255,105,0,0.5)]
                        sm:h-6
                        sm:w-6
                      "
                    />
                  </div>

                  <div className="leading-tight">
                    <span className="block text-sm font-semibold sm:text-base">
                      Tailwind CSS
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Creating modern
                      <br />
                      and responsive designs
                    </span>
                  </div>
                </div> */}

                {/* Figma */}
                {/* <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-primary/30
                      bg-primary/10
                      shadow-[0_0_25px_rgba(255,105,0,0.18)]
                      backdrop-blur-xl
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FaFigma
                      className="
                        h-4
                        w-4
                        text-primary
                        drop-shadow-[0_0_10px_rgba(255,105,0,0.5)]
                        sm:h-6
                        sm:w-6
                      "
                    />
                  </div>

                  <div className="leading-tight">
                    <span className="block text-sm font-semibold sm:text-base">
                      Figma
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Designing intuitive
                      <br />
                      user experiences
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* CTA */}
            <div
              className="animate-rise mt-7 lg:mt-8"
              style={{ animationDelay: "340ms" }}
            >
              <PillButton href="/templates" size="lg">
                 See my works
               </PillButton>
            </div>
          </div>

          {/* Dominic Wordmark */}
          <div
            className="
              animate-rise
              relative
              z-20
              flex
              min-h-24
              items-center
              justify-center
              sm:min-h-28
              lg:mt-2
              lg:block
              lg:min-h-0
              lg:-translate-y-14
            "
            style={{ animationDelay: "420ms" }}
          >
            <h2
              className="
                hero-wordmark-glass
                mt-24
                select-none
                text-center
                text-[19vw]
                font-bold
                leading-[0.85]
                tracking-tight
                sm:mt-2
                sm:text-[18vw]
                lg:px-20
                lg:text-[22vw]
                xl:px-24
                hero-wordmark
              "
            >
              Dhanush
            </h2>
          </div>
        </div>

        {/* Floating availability card */}
        <div
          className="
            animate-float
            absolute
            bottom-35
            right-4
            z-20
            hidden
            items-center
            gap-3
            rounded-2xl
            border
            border-primary/40
            bg-card/44
            px-4
            py-3
            backdrop-blur-md
            sm:right-8
            lg:flex
          "
        >
          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-primary
            "
          >
            <Zap
              className="
                h-5
                w-5
                fill-primary-foreground
                text-primary-foreground
              "
            />
          </span>

          <span className="leading-tight">
            <span className="block text-sm font-semibold">
              Let&apos;s create
            </span>
            <span className="block text-sm font-semibold">
              something great!
            </span>
            <span className="block text-xs text-primary">
              Available for new projects
            </span>
          </span>
        </div>
      </section>

      {/* Client / Marquee Section */}
      <Reveal className="mt-2 shrink-0 border-y border-border py-5 lg:mt-0 lg:py-4">
        <Marquee duration={30}>
          {clients.map((client) => (
            <span
              key={client}
              className="
                flex
                items-center
                gap-3
                px-8
                text-lg
                font-medium
                text-muted-foreground
                lg:text-base
              "
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