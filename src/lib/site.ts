import {
  Bell,
  CalendarCheck,
  Cctv,
  DoorOpen,
  KeyRound,
  SquareParking,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react"

export const SITE_ORIGIN = "https://mohammedbagowabair.github.io"
export const SITE_PATH = "/active-link-automation/"
export const SITE_URL = `${SITE_ORIGIN}${SITE_PATH}`

/** Public file URL that respects the GitHub Pages project base. */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, "")}`
}

export const PHONE_DISPLAY = "+60 16-666 0106"
export const PHONE_E164 = "+60166660106"
export const WHATSAPP_NUMBER = "60166660106"
export const EMAIL = "activelink0724@gmail.com"
export const FACEBOOK = "https://www.facebook.com/activelinkautomation"
export const GOOGLE_REVIEWS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Active+Link+Automation+%26+Electrical+Nilai"
export const INSTAGRAM = "https://www.instagram.com/activelinkautomation"
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=2.814138,101.796191"
export const DIRECTIONS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=2.814138,101.796191"
export const MAP_EMBED =
  "https://maps.google.com/maps?q=2.814138,101.796191&z=16&hl=en&output=embed"

export const ADDRESS_LINES = [
  "PT 7166, Ground Floor",
  "Jalan BBN 1/1A, Putra Point",
  "Bandar Baru Nilai",
  "71800 Nilai, Negeri Sembilan",
  "Malaysia",
] as const

export const ADDRESS_ONE_LINE =
  "PT 7166, Ground Floor, Jalan BBN 1/1A, Putra Point, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan, Malaysia"

export const TAGLINE = "Security. Automation. Electrical. One team. Complete solutions."

export const DEFAULT_ENQUIRY =
  "Hello Active Link Automation & Electrical, I would like to enquire about your security, automation or electrical services."

export function whatsappHref(message: string = DEFAULT_ENQUIRY) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type ServiceCategory = "Security" | "Automation" | "Electrical" | "Repair"

export type Service = {
  id: string
  title: string
  category: ServiceCategory
  summary: string
  icon: LucideIcon
  image?: string
  imageAlt?: string
  width?: number
  height?: number
}

export const services: Service[] = [
  {
    id: "cctv",
    title: "CCTV systems",
    category: "Security",
    summary: "From a single home to large commercial and industrial sites.",
    icon: Cctv,
    image: asset("images/hero.jpg"),
    imageAlt: "Rows of CCTV cameras mounted across an exterior wall",
    width: 2000,
    height: 1345,
  },
  {
    id: "alarms",
    title: "Security alarms",
    category: "Security",
    summary: "Alarm systems for homes, shops, offices and other properties that need a clear alert.",
    icon: Bell,
  },
  {
    id: "access",
    title: "Access control",
    category: "Security",
    summary: "Control who enters a home, shop, office, factory or private compound.",
    icon: KeyRound,
    image: asset("images/camera.jpg"),
    imageAlt: "A door fitted with a smart lock beside a phone running a lock app",
    width: 1600,
    height: 1067,
  },
  {
    id: "attendance",
    title: "Attendance systems",
    category: "Automation",
    summary: "Attendance systems for shops, offices and other workplaces.",
    icon: CalendarCheck,
  },
  {
    id: "autogate",
    title: "Autogate systems",
    category: "Automation",
    summary: "Autogate systems for homes and private entrances.",
    icon: DoorOpen,
    image: asset("images/gate.jpg"),
    imageAlt: "A contemporary private home with a courtyard and pool",
    width: 1600,
    height: 1061,
  },
  {
    id: "barrier",
    title: "Barrier gates",
    category: "Automation",
    summary:
      "For factories, commercial buildings, car parks, private compounds and controlled entrances.",
    icon: SquareParking,
    image: asset("images/parking.jpg"),
    imageAlt: "Aerial view of a marked outdoor car park",
    width: 1400,
    height: 933,
  },
  {
    id: "automation",
    title: "Automation solutions",
    category: "Automation",
    summary: "Equipment selected for the property, then installed, configured and tested.",
    icon: Workflow,
    image: asset("images/circuit.jpg"),
    imageAlt: "Close-up of a circuit board",
    width: 1400,
    height: 933,
  },
  {
    id: "electrical",
    title: "Electrical services",
    category: "Electrical",
    summary: "Wiring, panels, lighting, sockets, fans, earthing and power-fault work.",
    icon: Zap,
    image: asset("images/wires.jpg"),
    imageAlt: "An electrician working on a wall-mounted electrical enclosure",
    width: 1600,
    height: 1068,
  },
  {
    id: "repair",
    title: "CCTV troubleshooting & repair",
    category: "Repair",
    summary: "Offline cameras, lost recording, poor image, night vision, networks, NVRs and DVRs.",
    icon: Wrench,
  },
]

export const serviceFilters = ["All", "Security", "Automation", "Electrical", "Repair"] as const

export type ServiceFilter = (typeof serviceFilters)[number]

export const repairIssues = [
  "CCTV offline",
  "No recording",
  "Camera not displaying",
  "Poor image",
  "Night vision problems",
  "Network connection issues",
  "Faulty cameras",
  "NVR/DVR problems",
  "Camera replacement",
  "System upgrades",
] as const

export const electricalTasks = [
  "Wiring",
  "Panel repair, replacement and upgrades",
  "Socket installation and relocation",
  "Switch installation",
  "Light installation",
  "Outdoor lighting",
  "Fan installation",
  "Ground and earthing work",
  "Power restoration",
  "Power trip troubleshooting",
  "Electrical fault troubleshooting",
] as const

export const industries = [
  {
    title: "Residential",
    who: "Homeowners",
    text: "Houses and private compounds that need cameras, alarms, gates, access or electrical work.",
    image: asset("images/home.jpg"),
    alt: "Modern house at dusk with the interior lights on",
    width: 1400,
    height: 933,
  },
  {
    title: "Commercial",
    who: "Shops, offices, pharmacies, cafés, restaurants",
    text: "Premises that need CCTV, alarms, access, attendance and day-to-day electrical work.",
    image: asset("images/cafe.jpg"),
    alt: "Interior of a café with a service counter and seating",
    width: 1400,
    height: 960,
  },
  {
    title: "Industrial",
    who: "Factories and warehouses",
    text: "Larger sites, including barrier gates and controlled entrances.",
    image: asset("images/warehouse.jpg"),
    alt: "Warehouse aisles with racking and stacked cartons",
    width: 1400,
    height: 933,
  },
  {
    title: "Agricultural & remote",
    who: "Farms and large areas",
    text: "Sites with limited infrastructure, or with no internet at all.",
    image: asset("images/farm.jpg"),
    alt: "Open farmland in low golden light",
    width: 1400,
    height: 788,
  },
] as const

export const processSteps = [
  {
    title: "Understand the property",
    text: "Walk the site and see how it is actually used.",
  },
  {
    title: "Identify the real requirement",
    text: "Separate the symptom from the job that needs doing.",
  },
  {
    title: "Select suitable equipment",
    text: "Choose gear that fits the property, not a generic package.",
  },
  {
    title: "Plan the installation",
    text: "Set out cable routes, positions and the order of work.",
  },
  {
    title: "Configure and test properly",
    text: "Set the system up and prove it before the job is closed.",
  },
] as const

export const partners = [
  { name: "Hikvision", detail: "HikTech Star Winner" },
  { name: "Dahua", detail: "KIP Partner" },
  { name: "CynicsXtra", detail: "CynicsXtra" },
  { name: "Tiandy", detail: "Master Dealer" },
] as const

export const reviews = [
  {
    id: "professional",
    quote:
      "Very professional service with friendly staff. They were responsive and informative, making the whole process easy to understand. A trustworthy place for CCTV products and services.",
  },
  {
    id: "proactive",
    quote:
      "Very proactive service. Asked them to troubleshoot one CCTV and reposition another, but they also fixed an additional CCTV with a broken wire without extra charges. Honest, efficient, and professional. Will definitely use them again.",
  },
  {
    id: "aftersales",
    quote:
      "Ambil servis CCTV dan autogate dengan Chin dah lama. After sales servis pun tiptop. Highly recommended.",
  },
] as const

export const areas = [
  { name: "Nilai", note: "Based in Bandar Baru Nilai" },
  { name: "Seremban", note: "Within the service area" },
  { name: "Negeri Sembilan", note: "Within the service area" },
  { name: "Selangor", note: "Within the service area" },
  { name: "Surrounding areas", note: "Beyond the places named above" },
] as const

export const faqs = [
  {
    id: "where",
    question: "Where are you based, and which areas do you cover?",
    answer:
      "The premises are at PT 7166, Ground Floor, Jalan BBN 1/1A, Putra Point, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan. Active Link serves Nilai, Seremban, Negeri Sembilan, Selangor and surrounding areas.",
  },
  {
    id: "hours",
    question: "What are your opening hours?",
    answer:
      "Monday to Friday, 9:00 AM to 6:00 PM. Saturday, 9:00 AM to 5:00 PM. Sunday, closed.",
  },
  {
    id: "pay",
    question: "Which payment methods do you accept?",
    answer: "Cash, debit and credit cards, QR Pay and IBG.",
  },
  {
    id: "cctv-faults",
    question: "What CCTV problems can you troubleshoot?",
    answer:
      "CCTV offline, no recording, a camera not displaying, poor image, night vision problems, network connection issues, faulty cameras, NVR/DVR problems, camera replacement and system upgrades.",
  },
  {
    id: "remote",
    question: "Do you work on farms and sites with no internet?",
    answer:
      "Yes. Agricultural and remote sites are part of the work: farms, large areas, and places with limited infrastructure or no internet.",
  },
  {
    id: "systems",
    question: "What do you install besides CCTV?",
    answer:
      "Security alarms, access control, attendance systems, autogate systems, barrier gates, automation solutions and electrical services.",
  },
  {
    id: "approach",
    question: "How do you approach a new job?",
    answer:
      "Understand the property, identify the real requirement, select suitable equipment, plan the installation, then configure and test properly.",
  },
  {
    id: "brands",
    question: "Which brands are you aligned with?",
    answer:
      "Hikvision (HikTech Star Winner), Dahua (KIP Partner), CynicsXtra and Tiandy (Master Dealer).",
  },
  {
    id: "quote",
    question: "How do I ask for a quote?",
    answer:
      "Call or WhatsApp +60 16-666 0106, email activelink0724@gmail.com, or use the quote form on this page. The form opens WhatsApp with your message. It is not sent to a server.",
  },
] as const

export const hours = [
  { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { days: "Saturday", time: "9:00 AM – 5:00 PM" },
  { days: "Sunday", time: "Closed" },
] as const

export const payments = ["Cash", "Debit & credit cards", "QR Pay", "IBG"] as const

export const marqueeItems = [
  "CCTV systems",
  "Security alarms",
  "Access control",
  "Attendance",
  "Autogate",
  "Barrier gates",
  "Automation",
  "Electrical",
  "CCTV repair",
] as const

const weekdayWindows: Record<string, [number, number] | null> = {
  Mon: [9 * 60, 18 * 60],
  Tue: [9 * 60, 18 * 60],
  Wed: [9 * 60, 18 * 60],
  Thu: [9 * 60, 18 * 60],
  Fri: [9 * 60, 18 * 60],
  Sat: [9 * 60, 17 * 60],
  Sun: null,
}

export function getBusinessStatus(date = new Date()): { open: boolean; label: string } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kuala_Lumpur",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date)
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? ""
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0")
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0")
  const window = weekdayWindows[weekday]
  if (!window) return { open: false, label: "Closed today" }
  const mins = hour * 60 + minute
  if (mins >= window[0] && mins < window[1]) return { open: true, label: "Open now" }
  return { open: false, label: "Closed now" }
}

export type PropertyId = "home" | "commercial" | "industrial" | "remote"

export const properties: { id: PropertyId; title: string; detail: string }[] = [
  { id: "home", title: "A home", detail: "Homeowners and private compounds" },
  {
    id: "commercial",
    title: "A shop, office or F&B",
    detail: "Shops, offices, pharmacies, cafés, restaurants",
  },
  { id: "industrial", title: "A factory or warehouse", detail: "Industrial sites and controlled entrances" },
  {
    id: "remote",
    title: "A farm or remote site",
    detail: "Large areas, limited infrastructure or no internet",
  },
]

export const propertyNeeds: Record<PropertyId, { id: string; title: string; blurb: string }[]> = {
  home: [
    {
      id: "cctv",
      title: "CCTV",
      blurb: "Cameras and recording sized for a house, from a few points to fuller coverage.",
    },
    {
      id: "alarm",
      title: "Security alarm",
      blurb: "An alarm system for the property.",
    },
    {
      id: "autogate",
      title: "Autogate",
      blurb: "An autogate for the driveway or private entrance.",
    },
    {
      id: "access",
      title: "Access control",
      blurb: "Control who comes through the door or gate.",
    },
    {
      id: "repair",
      title: "Fix existing CCTV",
      blurb:
        "Offline cameras, no recording, a blank display, poor image, night vision, network faults, NVR/DVR issues, replacement or an upgrade.",
    },
    {
      id: "electrical",
      title: "Electrical work",
      blurb:
        "Wiring, panels, sockets, switches, lights, fans, outdoor lighting, earthing, power restoration or a trip that keeps returning.",
    },
  ],
  commercial: [
    {
      id: "cctv",
      title: "CCTV",
      blurb: "Cameras for a shop, office, pharmacy, café or restaurant, up to larger commercial sites.",
    },
    {
      id: "alarm",
      title: "Security alarm",
      blurb: "An alarm system for the premises.",
    },
    {
      id: "access",
      title: "Access control",
      blurb: "Control entry for staff, tenants or the public door.",
    },
    {
      id: "attendance",
      title: "Attendance",
      blurb: "An attendance system for the workplace.",
    },
    {
      id: "repair",
      title: "Fix existing CCTV",
      blurb:
        "Offline systems, lost recording, cameras not displaying, poor image, night vision, network issues, faulty cameras, NVR/DVR problems, replacement or upgrades.",
    },
    {
      id: "electrical",
      title: "Electrical work",
      blurb: "Wiring, panels, sockets, lighting, fans, earthing and power-fault troubleshooting.",
    },
  ],
  industrial: [
    {
      id: "cctv",
      title: "CCTV for a large site",
      blurb: "Camera systems for factories, warehouses and other industrial sites.",
    },
    {
      id: "barrier",
      title: "Barrier gate",
      blurb: "Barrier gates for factories, car parks, private compounds and controlled entrances.",
    },
    {
      id: "access",
      title: "Access control",
      blurb: "Control who enters the building, yard or gatehouse.",
    },
    {
      id: "automation",
      title: "Automation",
      blurb: "Automation planned around how the site actually runs, then configured and tested.",
    },
    {
      id: "repair",
      title: "Fix existing CCTV",
      blurb: "Offline cameras, recording faults, image problems, networks, NVR/DVR issues, replacements and upgrades.",
    },
    {
      id: "electrical",
      title: "Electrical work",
      blurb: "Panels, wiring, lighting, power restoration and electrical fault finding.",
    },
  ],
  remote: [
    {
      id: "cctv",
      title: "CCTV for a large or remote site",
      blurb:
        "Coverage for farms and wide areas, including places with limited infrastructure or no internet. Equipment is chosen after the property is understood.",
    },
    {
      id: "alarm",
      title: "Security alarm",
      blurb: "An alarm suited to a farm, yard or remote property.",
    },
    {
      id: "electrical",
      title: "Electrical work",
      blurb: "Wiring, earthing, outdoor lighting, power restoration and fault finding where the supply is the problem.",
    },
    {
      id: "repair",
      title: "Fix existing CCTV",
      blurb: "Cameras offline, not recording, poor night image, network faults and recorder problems.",
    },
  ],
}

export function propertyLabel(id: PropertyId) {
  return properties.find((item) => item.id === id)?.title ?? id
}
