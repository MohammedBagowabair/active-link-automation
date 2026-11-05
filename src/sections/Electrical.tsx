import { electricalItems } from "../data.ts";

export function Electrical() {
  return (
    <section className="section" id="electrical" aria-labelledby="electrical-title">
      <div className="wrap">
        <h2 id="electrical-title">Electrical work</h2>
        <p className="sub">
          The board below is the electrical list, written as breaker labels. It
          is the scope, not a live panel.
        </p>
        <div className="board">
          <div className="bus" aria-hidden="true" />
          <ul>
            {electricalItems.map((item) => (
              <li key={item}>
                <span className="pip" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
