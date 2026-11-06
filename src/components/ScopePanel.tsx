const marks = [
  ["01", "CCTV"],
  ["02", "Alarms"],
  ["03", "Gates"],
  ["04", "Power"],
] as const;

export function ScopePanel() {
  return (
    <figure className="scope">
      <div className="scope-plate">
        <ol className="scope-tags">
          {marks.map(([index, name]) => (
            <li key={name}>
              <span>{index}</span>
              {name}
            </li>
          ))}
        </ol>
        <span className="scope-accent" aria-hidden="true" />
        <figcaption>Bandar Baru Nilai · established 2014</figcaption>
      </div>
    </figure>
  );
}