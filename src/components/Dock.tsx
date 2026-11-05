import { phoneTel, whatsappUrl } from "../data.ts";
import { IconChat, IconPhone } from "./Icons.tsx";

export function Dock() {
  return (
    <nav className="dock" aria-label="Quick contact">
      <a href={`tel:${phoneTel}`}>
        <IconPhone />
        <span>Call</span>
      </a>
      <a href="#contact">
        <span className="dock-mark" aria-hidden="true" />
        <span>Quote</span>
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <IconChat />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}
