// src/components/Marquee.tsx
import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
  draggable = false,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  draggable?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!draggable) return;

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Width of a single copy of the content — the track renders two copies
    // back-to-back so it can loop seamlessly.
    let loopWidth = track.scrollWidth / 2;
    const measure = () => {
      loopWidth = track.scrollWidth / 2;
    };
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const directionSign = reverse ? -1 : 1;

    let position = 0;
    let dragging = false;
    let activePointerId: number | null = null;
    let lastX = 0;
    let lastTime = performance.now();
    let rafId = 0;

    // Keeps position inside a single loop-width so the number never grows
    // unbounded and the duplicated content always lines up seamlessly.
    const wrap = (value: number) => {
      if (loopWidth <= 0) return value;
      const remainder = value % loopWidth;
      return remainder > 0 ? remainder - loopWidth : remainder;
    };

    const tick = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Auto-scroll advances every frame — including while the user is
      // dragging — so manual drag and automatic motion combine instead of
      // one pausing the other.
      if (!reduceMotionQuery.matches && loopWidth > 0) {
        const speed = (loopWidth / duration) * directionSign;
        position -= speed * dt;
      }

      position = wrap(position);
      track.style.transform = `translate3d(${position}px, 0, 0)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      activePointerId = event.pointerId;
      lastX = event.clientX;
      container.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== activePointerId) return;
      const delta = event.clientX - lastX;
      lastX = event.clientX;
      position += delta;
    };

    const stopDragging = (event: PointerEvent) => {
      if (activePointerId !== null && event.pointerId !== activePointerId) return;
      dragging = false;
      activePointerId = null;
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", stopDragging);
    container.addEventListener("pointercancel", stopDragging);
    container.addEventListener("pointerleave", stopDragging);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", stopDragging);
      container.removeEventListener("pointercancel", stopDragging);
      container.removeEventListener("pointerleave", stopDragging);
    };
  }, [draggable, duration, reverse]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        draggable ? "cursor-grab touch-pan-y select-none active:cursor-grabbing" : "marquee-pause",
        className,
      )}
    >
      <div
        ref={trackRef}
        className={draggable ? "flex w-max" : reverse ? "marquee-track-reverse" : "marquee-track"}
        style={!draggable ? ({ "--marquee-duration": `${duration}s` } as React.CSSProperties) : undefined}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}