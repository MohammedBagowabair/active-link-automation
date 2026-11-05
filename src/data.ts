export const phoneDisplay = "+60 16-666 0106";
export const phoneTel = "+60166660106";
export const whatsappUrl = "https://wa.me/60166660106";
export const email = "activelink0724@gmail.com";
export const facebookUrl = "https://www.facebook.com/activelinkautomation";
export const instagramUrl = "https://www.instagram.com/activelinkautomation";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Active+Link+Automation+%26+Electrical%2C+PT+7166+Jalan+BBN+1%2F1A+Putra+Point+Bandar+Baru+Nilai";
export const osmUrl =
  "https://www.openstreetmap.org/?mlat=2.814138&mlon=101.796191#map=17/2.814138/101.796191";
export const mapEmbed =
  "https://www.openstreetmap.org/export/embed.html?bbox=101.790%2C2.810%2C101.802%2C2.818&layer=mapnik&marker=2.814138%2C101.796191";

export const addressLines = [
  "PT 7166, Ground Floor,",
  "Jalan BBN 1/1A, Putra Point,",
  "Bandar Baru Nilai,",
  "71800 Nilai, Negeri Sembilan.",
] as const;

export const serviceCatalog = [
  {
    id: "cctv",
    name: "CCTV",
    summary:
      "Supply, installation, repair, replacement, and upgrades, including NVR and DVR work.",
  },
  {
    id: "alarms",
    name: "Security alarms",
    summary: "Alarm systems for the homes, shops, factories, and remote sites this team covers.",
  },
  {
    id: "access",
    name: "Access control",
    summary: "Access control for sites that need to manage who comes in.",
  },
  {
    id: "attendance",
    name: "Attendance systems",
    summary: "Attendance systems for commercial and industrial sites.",
  },
  {
    id: "autogate",
    name: "Autogate",
    summary: "Automatic gates for homes and other entrances.",
  },
  {
    id: "barrier",
    name: "Barrier gates",
    summary:
      "Factories, commercial buildings, car parks, private compounds, and controlled entrances.",
  },
  {
    id: "automation",
    name: "Automation",
    summary: "Automation alongside the security and electrical services.",
  },
  {
    id: "electrical",
    name: "Electrical",
    summary:
      "Wiring, panels, sockets, switches, lights, fans, earthing, and power faults.",
  },
] as const;

export type ServiceId = (typeof serviceCatalog)[number]["id"];

export const sites = [
  {
    id: "home",
    label: "Home",
    drawing: "Line drawing of a house.",
    blurb:
      "Starting set for a home: CCTV, security alarms, autogate, and electrical. Tick or untick anything before you send.",
    preset: ["cctv", "alarms", "autogate", "electrical"],
  },
  {
    id: "shop",
    label: "Shop",
    drawing: "Line drawing of a shopfront.",
    blurb:
      "Starting set for a shop: CCTV, security alarms, access control, attendance systems, and electrical.",
    preset: ["cctv", "alarms", "access", "attendance", "electrical"],
  },
  {
    id: "factory",
    label: "Factory",
    drawing: "Line drawing of a factory and a barrier arm.",
    blurb:
      "Starting set for a factory: CCTV, access control, attendance systems, barrier gates, and electrical.",
    preset: ["cctv", "access", "attendance", "barrier", "electrical"],
  },
  {
    id: "farm",
    label: "Farm",
    drawing: "Line drawing of a remote shed.",
    blurb:
      "Starting set for a farm or remote site: CCTV, security alarms, and electrical.",
    preset: ["cctv", "alarms", "electrical"],
  },
] as const;

export type SiteId = (typeof sites)[number]["id"];

export const symptoms = [
  {
    id: "offline",
    label: "Offline",
    note: "Offline cameras are a CCTV fault this team repairs, including network faults and faulty cameras.",
  },
  {
    id: "no-recording",
    label: "No recording",
    note: "A system that stops recording is part of CCTV repair, including NVR and DVR work.",
  },
  {
    id: "no-display",
    label: "Camera not displaying",
    note: "A camera that does not display is a listed repair symptom, along with faulty cameras and network issues.",
  },
  {
    id: "poor-image",
    label: "Poor image",
    note: "Poor image quality is a listed CCTV repair symptom.",
  },
  {
    id: "night",
    label: "Night vision",
    note: "Night-vision faults are a listed CCTV repair symptom.",
  },
  {
    id: "network",
    label: "Network issues",
    note: "Network issues on a CCTV system are a listed repair symptom.",
  },
  {
    id: "faulty",
    label: "Faulty cameras",
    note: "Faulty cameras are repaired. Cameras can also be replaced or upgraded.",
  },
  {
    id: "nvr",
    label: "NVR / DVR",
    note: "NVR and DVR faults are part of the CCTV repair work.",
  },
  {
    id: "replacement",
    label: "Replacement",
    note: "Replacement of cameras and recorders is part of the CCTV work.",
  },
  {
    id: "upgrades",
    label: "Upgrades",
    note: "CCTV upgrades are part of the CCTV work.",
  },
] as const;

export type SymptomId = (typeof symptoms)[number]["id"];

export const electricalItems = [
  "Wiring",
  "Panel repair, replacement, and upgrades",
  "Sockets",
  "Switches",
  "Lights",
  "Outdoor lighting",
  "Fans",
  "Earthing",
  "Power restoration",
  "Power trips",
  "Fault troubleshooting",
] as const;

export const partners = [
  "Hikvision HikTech Star Winner",
  "Dahua KIP Partner",
  "CynicsXtra",
  "Tiandy Master Dealer",
] as const;

export const reviews = [
  "Very professional service with friendly staff. They were responsive and informative, making the whole process easy to understand. A trustworthy place for CCTV products and services.",
  "Very proactive service. Asked them to troubleshoot one CCTV and reposition another, but they also fixed an additional CCTV with a broken wire without extra charges. Honest, efficient, and professional. Will definitely use them again.",
  "Ambil servis CCTV dan autogate dengan Chin dah lama. After sales servis pun tiptop. Highly recommended.",
] as const;

export const audiences = [
  {
    title: "Residential",
    text: "Homes. CCTV, security alarms, autogate, and electrical from the Bandar Baru Nilai workshop.",
  },
  {
    title: "Commercial",
    text: "Shops and commercial buildings, including barrier gates for car parks and controlled entrances.",
  },
  {
    title: "Industrial",
    text: "Factories. Access control, attendance systems, CCTV, barrier gates, and electrical, including panels and power faults.",
  },
  {
    title: "Agricultural & remote",
    text: "Farms and outlying sites inside Nilai, Seremban, Negeri Sembilan, Selangor, and surrounding areas.",
  },
] as const;

export const areas = [
  { name: "Bandar Baru Nilai", note: "Workshop at Putra Point" },
  { name: "Nilai", note: "Home town" },
  { name: "Seremban", note: "Within the service area" },
  { name: "Negeri Sembilan", note: "Within the service area" },
  { name: "Selangor", note: "Within the service area" },
  { name: "Surrounding areas", note: "Ask when you call" },
] as const;

export const faqs = [
  {
    q: "Where is the workshop?",
    a: "PT 7166, Ground Floor, Jalan BBN 1/1A, Putra Point, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan. Coordinates 2.814138, 101.796191.",
  },
  {
    q: "What are the opening hours?",
    a: "Monday to Friday, 9AM–6PM. Saturday, 9AM–5PM. Sunday, closed.",
  },
  {
    q: "Which areas do you cover?",
    a: "Nilai, Seremban, Negeri Sembilan, Selangor, and surrounding areas. The workshop is in Bandar Baru Nilai.",
  },
  {
    q: "What do you install and repair?",
    a: "CCTV, security alarms, access control, attendance systems, autogate, barrier gates, automation, and electrical. Barrier gates go into factories, commercial buildings, car parks, private compounds, and controlled entrances.",
  },
  {
    q: "Which CCTV problems can I ask about?",
    a: "Offline, no recording, camera not displaying, poor image, night vision, network issues, faulty cameras, NVR/DVR, replacement, and upgrades.",
  },
  {
    q: "What electrical work do you do?",
    a: "Wiring, panel repair, replacement and upgrades, sockets, switches, lights, outdoor lighting, fans, earthing, power restoration, power trips, and fault troubleshooting.",
  },
  {
    q: "How do I ask for a quote?",
    a: "Call or WhatsApp +60 16-666 0106, email activelink0724@gmail.com, or use the form on this page. The form writes a WhatsApp message on your phone. It is not sent to a website server.",
  },
  {
    q: "Which payments do you accept?",
    a: "Cash, debit and credit cards, QR Pay, and IBG.",
  },
] as const;

export function serviceName(id: string) {
  return serviceCatalog.find((item) => item.id === id)?.name ?? id;
}

export function symptomLabel(id: string) {
  return symptoms.find((item) => item.id === id)?.label ?? id;
}

export function siteLabel(id: string) {
  return sites.find((item) => item.id === id)?.label ?? id;
}

export function whatsappHref(text: string) {
  return `${whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export function quoteMessage(input: {
  name: string;
  phone: string;
  site: SiteId;
  services: readonly string[];
  symptom: string;
  notes: string;
}) {
  const systems = serviceCatalog
    .filter((item) => input.services.includes(item.id))
    .map((item) => item.name);
  const lines = [
    "Hello Active Link, I would like a quote.",
    `Name: ${input.name.trim()}`,
    `Phone: ${input.phone.trim()}`,
    `Site: ${siteLabel(input.site)}`,
    `Systems: ${systems.length > 0 ? systems.join(", ") : "Not specified"}`,
  ];
  if (input.symptom) lines.push(`CCTV symptom: ${symptomLabel(input.symptom)}`);
  const notes = input.notes.trim();
  if (notes) lines.push(`Notes: ${notes}`);
  return lines.join("\n");
}
