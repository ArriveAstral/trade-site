export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  applications: string[];
  isFeatured: boolean;
  seo: {
    title: string;
    description: string;
  };
};

const sharedFeatures = [
  "Export packaging options available",
  "Private label and color customization on request",
  "Suitable for distributor and retail channel inquiries",
  "Specification details can be adjusted for target markets",
];

export const products: Product[] = [
  {
    id: "toaster-001",
    slug: "2-slice-bread-toaster",
    name: "2-Slice Bread Toaster",
    category: "Bread Toasters",
    summary:
      "Compact 2-slice toaster for household breakfast use and retail appliance programs.",
    description:
      "A compact bread toaster designed for everyday breakfast preparation. This model is suitable for entry-level retail programs, supermarket channels, and online home appliance assortments.",
    specs: [
      { label: "Capacity", value: "2 slices" },
      { label: "Power", value: "650-750W" },
      { label: "Controls", value: "Browning control with cancel function" },
      { label: "Housing", value: "Plastic or stainless steel finish" },
    ],
    features: [
      "Compact countertop footprint",
      "Removable crumb tray",
      "Multiple browning levels",
      ...sharedFeatures,
    ],
    applications: ["Home kitchens", "Apartments", "Retail appliance shelves"],
    isFeatured: true,
    seo: {
      title: "2-Slice Bread Toaster",
      description:
        "Compact 2-slice bread toaster for overseas retail and distributor inquiries.",
    },
  },
  {
    id: "toaster-002",
    slug: "4-slice-bread-toaster",
    name: "4-Slice Bread Toaster",
    category: "Bread Toasters",
    summary:
      "Family-size toaster with four slots for higher breakfast preparation capacity.",
    description:
      "A 4-slice toaster prepared for family breakfast use and higher-volume daily operation. It offers a practical product option for mid-range small appliance catalogs.",
    specs: [
      { label: "Capacity", value: "4 slices" },
      { label: "Power", value: "1200-1500W" },
      { label: "Controls", value: "Dual browning controls" },
      { label: "Functions", value: "Defrost, reheat, cancel" },
    ],
    features: [
      "Four-slot family capacity",
      "Independent control zones",
      "Wide slot option available",
      ...sharedFeatures,
    ],
    applications: ["Family kitchens", "Breakfast bars", "Retail chains"],
    isFeatured: true,
    seo: {
      title: "4-Slice Bread Toaster",
      description:
        "Family-size 4-slice bread toaster with export packaging and customization options.",
    },
  },
  {
    id: "toaster-003",
    slug: "digital-bread-toaster",
    name: "Digital Bread Toaster",
    category: "Bread Toasters",
    summary:
      "Digital toaster model with modern controls for upgraded home appliance ranges.",
    description:
      "A digital bread toaster for buyers looking for an upgraded appearance and modern control experience. Suitable for differentiated retail appliance lines.",
    specs: [
      { label: "Capacity", value: "2 slices or 4 slices" },
      { label: "Power", value: "800-1500W by model" },
      { label: "Display", value: "Digital timer or LED indicator" },
      { label: "Finish", value: "Stainless steel style available" },
    ],
    features: [
      "Digital control interface",
      "Modern exterior design",
      "Preset heating modes",
      ...sharedFeatures,
    ],
    applications: ["Premium home appliance programs", "Online retail", "Gifts"],
    isFeatured: false,
    seo: {
      title: "Digital Bread Toaster",
      description:
        "Digital bread toaster for modern small appliance assortments and export programs.",
    },
  },
  {
    id: "breakfast-001",
    slug: "compact-breakfast-maker",
    name: "Compact Breakfast Maker",
    category: "Breakfast Makers",
    summary:
      "Space-saving breakfast maker for small kitchens, dormitories, and compact homes.",
    description:
      "A compact breakfast maker designed for customers who need a simple multi-function breakfast appliance in limited kitchen space.",
    specs: [
      { label: "Functions", value: "Heating plate and mini oven by model" },
      { label: "Power", value: "600-900W" },
      { label: "Size", value: "Compact countertop design" },
      { label: "Color", value: "Custom color available on request" },
    ],
    features: [
      "Small-space kitchen friendly",
      "Simple mechanical controls",
      "Lightweight appliance body",
      ...sharedFeatures,
    ],
    applications: ["Dormitories", "Apartments", "Small kitchens"],
    isFeatured: true,
    seo: {
      title: "Compact Breakfast Maker",
      description:
        "Compact breakfast maker for small kitchens and overseas home appliance buyers.",
    },
  },
  {
    id: "breakfast-002",
    slug: "3-in-1-breakfast-station",
    name: "3-in-1 Breakfast Station",
    category: "Breakfast Makers",
    summary:
      "Multi-function breakfast station combining coffee, frying, and oven functions.",
    description:
      "A practical 3-in-1 breakfast station for buyers seeking a complete morning appliance solution. It can combine coffee brewing, frying, and oven heating in one product.",
    specs: [
      { label: "Functions", value: "Coffee maker, griddle, mini oven" },
      { label: "Power", value: "1000-1500W" },
      { label: "Coffee Capacity", value: "4 cups by standard model" },
      { label: "Packaging", value: "Color box or export carton" },
    ],
    features: [
      "Three breakfast functions in one appliance",
      "Good display value for retail shelves",
      "Practical family breakfast solution",
      ...sharedFeatures,
    ],
    applications: ["Family kitchens", "Holiday homes", "Retail promotions"],
    isFeatured: true,
    seo: {
      title: "3-in-1 Breakfast Station",
      description:
        "3-in-1 breakfast station with coffee, griddle, and oven functions for export inquiries.",
    },
  },
  {
    id: "breakfast-003",
    slug: "family-breakfast-maker",
    name: "Family Breakfast Maker",
    category: "Breakfast Makers",
    summary:
      "Larger breakfast maker model for family use and complete kitchen appliance programs.",
    description:
      "A family breakfast maker designed for larger daily breakfast preparation. This product can support wider retail positioning and bundled home appliance promotions.",
    specs: [
      { label: "Functions", value: "Oven, grill, and warming options" },
      { label: "Power", value: "1200-1600W" },
      { label: "Capacity", value: "Family-size heating area" },
      { label: "MOQ", value: "To be confirmed by configuration" },
    ],
    features: [
      "Larger heating capacity",
      "Family-oriented product positioning",
      "Multiple finish options",
      ...sharedFeatures,
    ],
    applications: ["Family kitchens", "Retail appliance sets", "Promotions"],
    isFeatured: false,
    seo: {
      title: "Family Breakfast Maker",
      description:
        "Family breakfast maker for overseas retailers and distributors of small kitchen appliances.",
    },
  },
  {
    id: "coffee-001",
    slug: "drip-coffee-maker",
    name: "Drip Coffee Maker",
    category: "Coffee Machines",
    summary:
      "Classic drip coffee maker for home, office, and entry-level retail appliance lines.",
    description:
      "A reliable drip coffee maker for daily coffee preparation. This model is suitable for standard household appliance assortments and office use programs.",
    specs: [
      { label: "Capacity", value: "6-12 cups by model" },
      { label: "Power", value: "600-1000W" },
      { label: "Carafe", value: "Glass carafe or thermal option" },
      { label: "Filter", value: "Reusable or paper filter compatible" },
    ],
    features: [
      "Simple daily coffee brewing",
      "Keep-warm plate option",
      "Water level window",
      ...sharedFeatures,
    ],
    applications: ["Home kitchens", "Offices", "Hotel rooms"],
    isFeatured: true,
    seo: {
      title: "Drip Coffee Maker",
      description:
        "Drip coffee maker for household, office, and export small appliance programs.",
    },
  },
  {
    id: "coffee-002",
    slug: "espresso-coffee-machine",
    name: "Espresso Coffee Machine",
    category: "Coffee Machines",
    summary:
      "Espresso machine option for buyers building higher-value coffee appliance catalogs.",
    description:
      "An espresso coffee machine for more advanced coffee preparation needs. Suitable for product ranges that require a stronger visual and functional coffee appliance offering.",
    specs: [
      { label: "Pressure", value: "15-20 bar by model" },
      { label: "Power", value: "850-1350W" },
      { label: "Water Tank", value: "Detachable tank option" },
      { label: "Milk System", value: "Steam wand or frothing option" },
    ],
    features: [
      "Espresso extraction capability",
      "Steam frothing option",
      "Premium countertop appearance",
      ...sharedFeatures,
    ],
    applications: ["Home coffee bars", "Small offices", "Premium retail"],
    isFeatured: true,
    seo: {
      title: "Espresso Coffee Machine",
      description:
        "Espresso coffee machine for overseas buyers and premium small appliance catalogs.",
    },
  },
  {
    id: "coffee-003",
    slug: "capsule-coffee-machine",
    name: "Capsule Coffee Machine",
    category: "Coffee Machines",
    summary:
      "Compact capsule coffee machine for convenient single-serve coffee preparation.",
    description:
      "A capsule coffee machine designed for quick and convenient coffee preparation. It is suitable for compact kitchens, offices, and modern appliance retail channels.",
    specs: [
      { label: "Coffee Type", value: "Capsule system by model" },
      { label: "Power", value: "900-1400W" },
      { label: "Water Tank", value: "0.6-1.2L by model" },
      { label: "Operation", value: "One-touch brewing option" },
    ],
    features: [
      "Single-serve convenience",
      "Compact appliance body",
      "Fast brewing workflow",
      ...sharedFeatures,
    ],
    applications: ["Apartments", "Offices", "Convenience retail"],
    isFeatured: false,
    seo: {
      title: "Capsule Coffee Machine",
      description:
        "Capsule coffee machine for convenient single-serve coffee and export retail channels.",
    },
  },
  {
    id: "coffee-004",
    slug: "commercial-coffee-maker",
    name: "Commercial Coffee Maker",
    category: "Coffee Machines",
    summary:
      "Higher-capacity coffee maker for office, hospitality, and light commercial use.",
    description:
      "A higher-capacity coffee maker for buyers serving office, hospitality, and light commercial customer groups. Specifications can be adjusted by target market.",
    specs: [
      { label: "Capacity", value: "Large carafe or urn option" },
      { label: "Power", value: "1200-1800W" },
      { label: "Use Case", value: "Office and light commercial service" },
      { label: "Material", value: "Stainless steel option available" },
    ],
    features: [
      "Large-volume coffee preparation",
      "Durable exterior option",
      "Suitable for B2B appliance channels",
      ...sharedFeatures,
    ],
    applications: ["Offices", "Catering", "Hospitality supply"],
    isFeatured: false,
    seo: {
      title: "Commercial Coffee Maker",
      description:
        "Commercial coffee maker for office, hospitality, and light commercial appliance buyers.",
    },
  },
  {
    id: "microwave-001",
    slug: "compact-microwave-oven",
    name: "Compact Microwave Oven",
    category: "Microwave Ovens",
    summary:
      "Compact microwave oven for small kitchens, apartments, and entry-level appliance ranges.",
    description:
      "A compact microwave oven for daily heating and defrosting needs. It is suitable for small kitchens, apartments, dormitories, and standard retail appliance programs.",
    specs: [
      { label: "Capacity", value: "17-20L by model" },
      { label: "Power", value: "700-800W" },
      { label: "Controls", value: "Mechanical or digital option" },
      { label: "Turntable", value: "Glass turntable included" },
    ],
    features: [
      "Compact size for limited spaces",
      "Simple heating and defrosting",
      "Entry-level retail positioning",
      ...sharedFeatures,
    ],
    applications: ["Apartments", "Dormitories", "Small kitchens"],
    isFeatured: true,
    seo: {
      title: "Compact Microwave Oven",
      description:
        "Compact microwave oven for small kitchens and overseas small appliance buyers.",
    },
  },
  {
    id: "microwave-002",
    slug: "digital-microwave-oven",
    name: "Digital Microwave Oven",
    category: "Microwave Ovens",
    summary:
      "Digital microwave oven with modern controls for mainstream home appliance markets.",
    description:
      "A digital microwave oven prepared for mainstream household appliance channels. It offers practical heating programs and a modern control panel.",
    specs: [
      { label: "Capacity", value: "20-30L by model" },
      { label: "Power", value: "800-1000W" },
      { label: "Controls", value: "Digital panel with preset programs" },
      { label: "Finish", value: "White, black, or stainless steel style" },
    ],
    features: [
      "Digital control panel",
      "Preset cooking programs",
      "Modern retail appearance",
      ...sharedFeatures,
    ],
    applications: ["Home kitchens", "Retail chains", "Online appliance stores"],
    isFeatured: true,
    seo: {
      title: "Digital Microwave Oven",
      description:
        "Digital microwave oven with preset programs for overseas home appliance channels.",
    },
  },
  {
    id: "microwave-003",
    slug: "grill-microwave-oven",
    name: "Grill Microwave Oven",
    category: "Microwave Ovens",
    summary:
      "Microwave oven with grill function for more flexible kitchen appliance programs.",
    description:
      "A grill microwave oven designed for buyers who need more flexible product positioning than a basic microwave. It supports heating, defrosting, and grill-style cooking options.",
    specs: [
      { label: "Capacity", value: "20-30L by model" },
      { label: "Power", value: "Microwave 800-1000W, grill option by model" },
      { label: "Functions", value: "Microwave, defrost, grill" },
      { label: "Accessories", value: "Turntable and grill rack option" },
    ],
    features: [
      "Additional grill function",
      "Flexible cooking modes",
      "Higher-value retail positioning",
      ...sharedFeatures,
    ],
    applications: ["Family kitchens", "Retail appliance upgrades", "Promotions"],
    isFeatured: false,
    seo: {
      title: "Grill Microwave Oven",
      description:
        "Grill microwave oven with heating, defrosting, and grill functions for export buyers.",
    },
  },
  {
    id: "microwave-004",
    slug: "built-in-microwave-oven",
    name: "Built-in Microwave Oven",
    category: "Microwave Ovens",
    summary:
      "Built-in microwave oven option for kitchen projects and higher-end appliance lines.",
    description:
      "A built-in microwave oven for kitchen project buyers and premium appliance ranges. It is suitable for projects that require a cleaner integrated kitchen appearance.",
    specs: [
      { label: "Installation", value: "Built-in kitchen cabinet design" },
      { label: "Capacity", value: "20-32L by model" },
      { label: "Controls", value: "Digital panel option" },
      { label: "Finish", value: "Stainless steel style available" },
    ],
    features: [
      "Integrated kitchen appearance",
      "Project-friendly product positioning",
      "Premium finish options",
      ...sharedFeatures,
    ],
    applications: ["Kitchen projects", "Apartments", "Premium appliance lines"],
    isFeatured: false,
    seo: {
      title: "Built-in Microwave Oven",
      description:
        "Built-in microwave oven for kitchen projects and premium export appliance programs.",
    },
  },
];

export const featuredProducts = products.filter((product) => product.isFeatured);
