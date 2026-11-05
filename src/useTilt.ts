import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion() {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return matches;
}

export function useTilt(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!enabled || !window.matchMedia("(pointer: fine)").matches) {
      el.style.removeProperty("--tilt-x");
      el.style.removeProperty("--tilt-y");
      return;
    }

    const onMove = (event: PointerEvent) => {
      const box = el.getBoundingClientRect();
      if (box.width === 0 || box.height === 0) return;
      const px = (event.clientX - box.left) / box.width - 0.5;
      const py = (event.clientY - box.top) / box.height - 0.5;
      el.style.setProperty("--tilt-x", `${(-py * 8).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${(px * 10).toFixed(2)}deg`);
    };

    const reset = () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, [enabled]);

  return ref;
}
