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
  "KEBS Stickers",
  "KRA Stickers",
  "Warning Stickers",
  "Rechargeable",
  "Battery Level Visible",
  "Fast Delivery"
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
    title: "Premium stock on hand"
  },
  {
    src: "/assets/vapes/tall-shot-2.jpeg",
    alt: "Tall hero vape image",
    title: "Designed for a premium shelf feel"
  },
  {
    src: "/assets/vapes/slim-shot.jpeg",
    alt: "Slim vape product image",
    title: "Fast ordering, sleek presentation"
  }
];

export type Product = {
  name: string;
  badge: string;
  puffSize: string;
  nicotine: string;
  rechargeable: string;
  batteryVisible: string;
  liquidLevel: string;
  airInletAdjustable: string;
  warningStickers: string;
  kebsStickers: string;
  kraStickers: string;
  fullKitPrice: string;
  podPrice: string;
  flavors: string[];
  accent: string;
  accentSecondary: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    name: "Vapengin Jupiter 2",
    badge: "Restocked",
    puffSize: "6500 puffs",
    nicotine: "5%",
    rechargeable: "Yes",
    batteryVisible: "Yes",
    liquidLevel: "Not listed",
    airInletAdjustable: "Not listed",
    warningStickers: "Yes",
    kebsStickers: "Yes",
    kraStickers: "Yes",
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
    accentSecondary: "shadow-lime",
    image: "/assets/vapes/jupiter-2.jpeg",
    imageAlt: "Vapengin Jupiter 2 vape product"
  },
  {
    name: "Vapengin Jupiter Plus",
    badge: "Restocked",
    puffSize: "13,000 puffs",
    nicotine: "5%",
    rechargeable: "Yes",
    batteryVisible: "Yes",
    liquidLevel: "No",
    airInletAdjustable: "No",
    warningStickers: "Yes",
    kebsStickers: "Yes",
    kraStickers: "Yes",
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
    accentSecondary: "shadow-neon",
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
    title: "Premium Verified Stock",
    text: "Every unit is positioned as premium stock with visible battery display and compliance stickers called out clearly."
  },
  {
    title: "Fast Kenya Delivery",
    text: "The site is designed around quick ordering through WhatsApp or phone so customers can move from browsing to delivery fast."
  },
  {
    title: "Bold Flavour Selection",
    text: "From icy fruit mixes to clean mint profiles, the catalogue is presented with a refined high-end retail feel."
  }
];

export const orderSteps = [
  {
    step: "01",
    title: "Choose your product",
    text: "Compare kits, pods, puff count, and flavour lineup."
  },
  {
    step: "02",
    title: "Message on WhatsApp or call",
    text: "Send your order instantly using the main CTA buttons."
  },
  {
    step: "03",
    title: "Get delivery",
    text: "Confirm your order details and receive fast delivery across Kenya."
  }
];
