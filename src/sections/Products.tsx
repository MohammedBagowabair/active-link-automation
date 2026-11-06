import { productCatalog, productWhatsApp } from "../data.ts";
import { IconChat } from "../components/Icons.tsx";

const asset = (path: string) => {
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}${path.replace(/^\//, "")}`;
};

export function Products() {
  return (
    <section className="section band" id="products" aria-labelledby="products-title">
      <div className="wrap">
        <h2 id="products-title">Shop catalog</h2>
        <p className="sub">
          Items Active Link sells over WhatsApp. Tap a card to ask about that
          product. No prices are listed here.
        </p>
        <div className="product-grid">
          {productCatalog.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-media">
                <img
                  src={asset(product.image)}
                  alt={product.name}
                  loading="lazy"
                  width={600}
                  height={600}
                />
              </div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.note}</p>
                <a
                  className="btn btn-primary product-wa"
                  href={productWhatsApp(product.name)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconChat />
                  Ask on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
