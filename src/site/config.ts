export const siteConfig = {
  name: "Talabartería Pérez",

  legalName: "Talabartería Pérez",

  email: "info@talabarteriaperez.com",

  phone: "+593999999999",

  whatsapp: "593999999999",

  address: "Machachi, Ecuador",

  logo: "/logo.svg",

  defaultLanguage: "es",

  languages: ["es"] as const,
};

export type Language = (typeof siteConfig.languages)[number];