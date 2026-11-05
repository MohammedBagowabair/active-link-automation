import { usePrefersReducedMotion, useTilt } from "../useTilt.ts";

export function CameraRig() {
  const reduced = usePrefersReducedMotion();
  const ref = useTilt(!reduced);

  return (
    <figure className="camera-col">
      <div className="scene">
        <div className="bloom bloom-violet" aria-hidden="true" />
        <div className="bloom bloom-cyan" aria-hidden="true" />
        <div className="scanfield" aria-hidden="true" />
        <div className="pivot" ref={ref}>
          <div className="shoe" aria-hidden="true" />
          <div className="stem" aria-hidden="true" />
          <div className="body">
            <div className="face front">
              <div className="lens">
                <span className="ring ring-a" />
                <span className="ring ring-b" />
                <span className="iris" />
                <span className="sweep" />
              </div>
            </div>
            <div className="face back" />
            <div className="face right" />
            <div className="face left" />
            <div className="face top" />
            <div className="face bottom" />
          </div>
        </div>
      </div>
      <figcaption>Illustrated security camera. Not a live feed.</figcaption>
    </figure>
  );
}
