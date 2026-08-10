import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Star, Store } from "lucide-react";

import { Reveal } from "@/components/Reveal";

type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  company: string;
  rating: string;
};

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[];
};

const AUTOPLAY_DELAY = 5500;
const DRAG_THRESHOLD = 60;
const SIDE_OFFSET = 62; // % of container width each neighbour is shifted by

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const containerWidth = useRef(1);
  const trackRef = useRef<HTMLDivElement>(null);

  const count = testimonials.length;

  const goTo = (index: number) => setActiveIndex(((index % count) + count) % count);
  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (isDragging || isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [count, isDragging, isPaused]);

  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    containerWidth.current = trackRef.current?.offsetWidth ?? 1;
    setIsDragging(true);
    setIsPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const endDrag = () => {
    if (dragStartX.current === null) return;
    if (dragOffset < -DRAG_THRESHOLD) goNext();
    else if (dragOffset > DRAG_THRESHOLD) goPrev();

    dragStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
    window.setTimeout(() => setIsPaused(false), 400);
  };

  const dragPercent = isDragging ? (dragOffset / containerWidth.current) * 100 : 0;

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

        <div
          ref={trackRef}
          className="relative mx-auto mt-16 max-w-2xl touch-pan-y select-none overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          <div className={`relative min-h-[26rem] ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
            {testimonials.map((testimonial, index) => {
              const position =
                index === activeIndex ? 0 : index === prevIndex ? -1 : index === nextIndex ? 1 : 2;
              const visible = position !== 2;

              const basePercent = position * SIDE_OFFSET;
              const translatePercent = position === 2 ? 140 : basePercent + dragPercent;

              const transform = `translate(-50%, -50%) translateX(${translatePercent}%)`;
              const opacity = position === 0 ? 1 : visible ? 0.35 : 0;
              const zIndex = position === 0 ? 30 : visible ? 20 : 10;

              return (
                <div
                  key={`${testimonial.name}-${index}`}
                  className={`absolute left-1/2 top-1/2 w-[85%] max-w-xl ${
                    isDragging ? "" : "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  }`}
                  style={{ transform, opacity, zIndex }}
                  aria-hidden={!visible}
                  onClick={() => {
                    if (isDragging) return;
                    if (position === -1) goPrev();
                    if (position === 1) goNext();
                  }}
                >
                  <div
                    className={`flex h-full flex-col justify-between rounded-[2rem] bg-[#1a1a1a] p-8 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.85)] sm:p-10 ${
                      position !== 0 ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Store className="h-5 w-5 shrink-0 text-orange-500" />
                        <span className="text-lg font-bold text-white">{testimonial.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white">
                        <Star className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                        <span className="text-base font-medium">{testimonial.rating}</span>
                      </div>
                    </div>

                    <p className="mt-10 text-lg leading-relaxed text-white/85 sm:text-xl">
                      “{testimonial.quote}”
                    </p>

                    <div className="mt-10">
                      <h3 className="text-2xl font-bold text-white">{testimonial.name}</h3>
                      <p className="mt-1 text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}