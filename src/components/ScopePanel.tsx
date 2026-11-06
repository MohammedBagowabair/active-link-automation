const marks = ["CCTV", "Alarms", "Gates", "Power"] as const;

export function ScopePanel() {
  return (
    <figure className="scope">
      <div className="scope-plate">
        <span className="corners" aria-hidden="true" />
        <div className="reticle" aria-hidden="true">
          <span className="reticle-ring r1" />
          <span className="reticle-ring r2" />
          <span className="reticle-ring r3" />
          <span className="reticle-cross h" />
          <span className="reticle-cross v" />
          <span className="reticle-sweep" />
          <span className="reticle-core" />
        </div>
        <ul className="scope-tags">
          {marks.map((mark) => (
            <li key={mark}>{mark}</li>
          ))}
        </ul>
      </div>
      <figcaption>Bandar Baru Nilai · established 2014</figcaption>
    </figure>
  );
}
