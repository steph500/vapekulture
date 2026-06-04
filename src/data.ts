export const whatsappLink =
  "https://wa.me/254791575544?text=Hi%20Vapekulture%2C%20I%20want%20to%20order";
export const phoneLink = "tel:+254791575544";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Flavours", href: "#flavours" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" }
];

export const trustBadges = [
  "Adults 18+ only",
  "Curated premium devices",
  "Rechargeable formats",
  "Direct WhatsApp ordering",
  "Fast response support",
  "Delivery across Kenya"
];

export const heroImages = [
  {
    src: "/assets/vapes/hero-collection.jpeg",
    alt: "Vapekulture premium vape collection"
  },
  {
    src: "/assets/vapes/hero-alt.jpeg",
    alt: "Vapekulture featured vape products"
  },
  {
    src: "/assets/vapes/tall-shot-1.jpeg",
    alt: "Close-up premium vape product shot"
  }
];

export const showcaseImages = [
  {
    src: "/assets/vapes/detail-shot-1.jpeg",
    alt: "Vape product detail shot",
    title: "Refined close-up presentation"
  },
  {
    src: "/assets/vapes/tall-shot-2.jpeg",
    alt: "Tall hero vape image",
    title: "Bold shelf presence"
  },
  {
    src: "/assets/vapes/slim-shot.jpeg",
    alt: "Slim vape product image",
    title: "Premium visual finish"
  }
];

export type Product = {
  name: string;
  badge: string;
  summary: string;
  puffSize: string;
  nicotine: string;
  rechargeable: string;
  batteryVisible: string;
  liquidLevel: string;
  airInletAdjustable: string;
  fullKitPrice: string;
  podPrice: string;
  flavors: string[];
  accent: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    name: "Vapengin Jupiter 2",
    badge: "Everyday Favourite",
    summary:
      "A compact premium setup with strong flavour delivery, visible battery feedback, and flexible full-kit or pod-only ordering.",
    puffSize: "6500 puffs",
    nicotine: "5%",
    rechargeable: "Yes",
    batteryVisible: "Yes",
    liquidLevel: "Not listed",
    airInletAdjustable: "Not listed",
    fullKitPrice: "KSh 2,200",
    podPrice: "KSh 1,800",
    flavors: [
      "Strawberry lychee ice",
      "Ice mint bubblegum",
      "Pineapple passion fruit",
      "Watermelon ice",
      "Grape",
      "Watermelon bubblegum mint",
      "Bubble cranberry",
      "Cherry sparkling juice",
      "Black ice",
      "Grape ice",
      "Strawberry ice",
      "Blueberry ice"
    ],
    accent: "from-lime/60 via-teal/30 to-ice/40",
    image: "/assets/vapes/jupiter-2.jpeg",
    imageAlt: "Vapengin Jupiter 2 vape product"
  },
  {
    name: "Vapengin Jupiter Plus",
    badge: "Extended Puffs",
    summary:
      "A higher-capacity option built for customers who want longer sessions, premium presentation, and simple direct ordering.",
    puffSize: "13,000 puffs",
    nicotine: "5%",
    rechargeable: "Yes",
    batteryVisible: "Yes",
    liquidLevel: "No",
    airInletAdjustable: "No",
    fullKitPrice: "KSh 2,800",
    podPrice: "KSh 2,000",
    flavors: [
      "Miami mint",
      "Peach apple",
      "Arizona blended juice",
      "Peppermint",
      "Blueberry lemon ice",
      "Strawberry pomegranate",
      "Wild berries",
      "Energy forest berries",
      "Blackberry ice",
      "Watermelon lime raspberry"
    ],
    accent: "from-magenta/60 via-ice/30 to-teal/40",
    image: "/assets/vapes/jupiter-plus.jpeg",
    imageAlt: "Vapengin Jupiter Plus vape product"
  }
];

export const comparisonRows = [
  { label: "Puff count", first: "6500 puffs", second: "13,000 puffs" },
  { label: "Nicotine", first: "5%", second: "5%" },
  { label: "Rechargeable", first: "Yes", second: "Yes" },
  { label: "Battery visible", first: "Yes", second: "Yes" },
  { label: "Liquid level", first: "Not listed", second: "No" },
  { label: "Air inlet adjustable", first: "Not listed", second: "No" },
  { label: "Full kit price", first: "KSh 2,200", second: "KSh 2,800" },
  { label: "Pod price", first: "KSh 1,800", second: "KSh 2,000" }
];

export const whyUsItems = [
  {
    title: "Premium Retail Feel",
    text: "The experience is built to feel polished and high-end from first glance to final order message."
  },
  {
    title: "Direct Human Ordering",
    text: "Customers place orders directly with Jascinta Nzomo through WhatsApp or phone for faster coordination."
  },
  {
    title: "Curated Flavour Range",
    text: "The line-up balances icy, mint, berry, and fruit-led profiles while keeping the presentation mature and premium."
  }
];

export const orderSteps = [
  {
    step: "01",
    title: "Choose your product",
    text: "Compare the device line-up, pricing, and flavour options."
  },
  {
    step: "02",
    title: "Message or call directly",
    text: "Send your preferred product and flavour choice on WhatsApp or by phone."
  },
  {
    step: "03",
    title: "Confirm delivery",
    text: "Receive order confirmation and arrange fast delivery across Kenya."
  }
];
