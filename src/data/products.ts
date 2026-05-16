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
  isFeatured: boolean;
  seo: {
    title: string;
    description: string;
  };
};

export const products: Product[] = [
  {
    id: "product-001",
    slug: "precision-metal-component",
    name: "Precision Metal Component",
    category: "Metal Parts",
    summary:
      "Placeholder export product with configurable material, finish, and packaging options.",
    description:
      "This is placeholder content for a product detail page. Replace it with product positioning, technical details, application scenarios, packaging information, and export advantages.",
    specs: [
      { label: "Material", value: "Stainless steel / carbon steel / custom" },
      { label: "Surface", value: "Polished, plated, painted, or custom" },
      { label: "MOQ", value: "To be confirmed" },
      { label: "Lead time", value: "15-30 days after order confirmation" },
    ],
    features: [
      "OEM and ODM options prepared",
      "Export packaging placeholder",
      "Specification table ready for expansion",
      "Suitable for product inquiry workflows",
    ],
    isFeatured: true,
    seo: {
      title: "Precision Metal Component",
      description:
        "Precision metal component placeholder page with specifications, features, and direct inquiry channels.",
    },
  },
  {
    id: "product-002",
    slug: "industrial-control-module",
    name: "Industrial Control Module",
    category: "Industrial Components",
    summary:
      "A sample product card prepared for list, detail, SEO, and future CMS migration.",
    description:
      "Use this page to describe the control module, compatibility, certifications, operating conditions, and export service details.",
    specs: [
      { label: "Application", value: "Industrial equipment" },
      { label: "Configuration", value: "Standard or customized" },
      { label: "Certification", value: "Available on request" },
      { label: "Packaging", value: "Export carton or custom package" },
    ],
    features: [
      "Clear specifications for buyers",
      "Prepared for product schema",
      "Direct WhatsApp inquiry",
      "Mobile responsive detail layout",
    ],
    isFeatured: true,
    seo: {
      title: "Industrial Control Module",
      description:
        "Industrial control module placeholder page with product details and direct sales contact.",
    },
  },
  {
    id: "product-003",
    slug: "custom-plastic-housing",
    name: "Custom Plastic Housing",
    category: "Plastic Parts",
    summary:
      "Sample custom product for demonstrating categories, product cards, and detail pages.",
    description:
      "Replace this placeholder with plastic material options, mold requirements, finish options, assembly details, and shipment terms.",
    specs: [
      { label: "Material", value: "ABS / PC / PP / custom" },
      { label: "Color", value: "Custom color available" },
      { label: "Tooling", value: "New mold or existing model" },
      { label: "Usage", value: "Equipment housing and accessories" },
    ],
    features: [
      "Custom color and finish",
      "Prepared for image gallery",
      "Export-focused inquiry content",
      "Easy to migrate into CMS data",
    ],
    isFeatured: true,
    seo: {
      title: "Custom Plastic Housing",
      description:
        "Custom plastic housing placeholder page for overseas buyers and sales inquiries.",
    },
  },
];

export const featuredProducts = products.filter((product) => product.isFeatured);
