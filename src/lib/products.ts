const marbaleno = { url: "/images/marbaleno.jpg" };
const masken = { url: "/images/masken.jpg" };
const shaneel = { url: "/images/shaneel.jpg" };
const beatriz = { url: "/images/beatriz.jpg" };
const beatrizSample = { url: "/images/beatriz-sample.jpg" };
const sandito = { url: "/images/sandito.jpg" };
const liquid = { url: "/images/liquid-wallpaper.jpg" };
const pj1 = { url: "/images/project-1.jpg" };
const pj2 = { url: "/images/project-2.jpg" };
const pj3 = { url: "/images/project-3.jpg" };
const pj4 = { url: "/images/project-4.jpg" };
const pj5 = { url: "/images/project-5.jpg" };
const pj7 = { url: "/images/project-7.jpg" };
const pj8 = { url: "/images/project-8.jpg" };
const pj9 = { url: "/images/project-9.jpg" };
const pj10 = { url: "/images/project-10.jpg" };
const pj11 = { url: "/images/project-11.jpg" };
const pj12 = { url: "/images/project-12.jpg" };
const pj13 = { url: "/images/project-13.jpg" };
const pj14 = { url: "/images/project-14.jpg" };

export type Look = "Marble" | "Velvet" | "Stone" | "Metallic" | "Pearl" | "Pattern";
export type Room = "Living room" | "Bedroom" | "Office" | "Hotel & Retail" | "Lobby & Hall";
export type Product = {
  name: string;
  look: Look;
  tagline: string;
  desc: string;
  bucket?: string;
  preview: string;
  gallery: string[];
  rooms: Room[];
  sheen: "Matt" | "Satin" | "High gloss";
};

export const LOOKS: Look[] = ["Marble", "Velvet", "Stone", "Metallic", "Pearl", "Pattern"];
export const ROOMS: Room[] = ["Living room", "Bedroom", "Office", "Hotel & Retail", "Lobby & Hall"];

export const TONES = [
  { name: "Natural", color: "" },
  { name: "Ivory", color: "#efe3c8" },
  { name: "Silver", color: "#c9ced6" },
  { name: "Charcoal", color: "#3a3f47" },
  { name: "Sea blue", color: "#2f7fa3" },
  { name: "Emerald", color: "#2f8a64" },
  { name: "Terracotta", color: "#b5543a" },
  { name: "Gold", color: "#c9a14a" },
];

export const PRODUCTS: Product[] = [
  { name: "Marbaleno", look: "Marble", sheen: "High gloss", tagline: "Italian marble effect", desc: "Special Italian formulation that looks and feels like real marble — bold veins, mirror-like depth.", bucket: marbaleno.url, preview: pj11.url, gallery: [pj11.url, pj14.url, pj12.url, pj13.url], rooms: ["Living room", "Lobby & Hall", "Hotel & Retail", "Office"] },
  { name: "Masken", look: "Metallic", sheen: "Satin", tagline: "Sandy glitter metallic", desc: "A special sandy glitter texture that catches light with a soft metallic sparkle.", bucket: masken.url, preview: pj2.url, gallery: [pj2.url, pj1.url], rooms: ["Living room", "Bedroom", "Hotel & Retail"] },
  { name: "Shaneel", look: "Velvet", sheen: "Satin", tagline: "Shiny velvet cloth", desc: "Modern Spanish-style walls that look like shiny velvet cloth — calm, rich and elegant.", bucket: shaneel.url, preview: pj3.url, gallery: [pj3.url, pj4.url, pj5.url], rooms: ["Bedroom", "Living room", "Office"] },
  { name: "Beatriz", look: "Pearl", sheen: "High gloss", tagline: "Shiny beads texture", desc: "A shiny beaded texture with a glossy, soft touch.", bucket: beatriz.url, preview: beatrizSample.url, gallery: [beatrizSample.url], rooms: ["Bedroom", "Living room", "Hotel & Retail"] },
  { name: "Sandito", look: "Stone", sheen: "Matt", tagline: "Sand & stencil effect", desc: "Sandy stone effect with a matt concrete finish — perfect for stencil and mandala work.", bucket: sandito.url, preview: pj7.url, gallery: [pj7.url, pj8.url, pj9.url, pj10.url], rooms: ["Lobby & Hall", "Hotel & Retail", "Living room"] },
  { name: "Liquid Wallpaper", look: "Pattern", sheen: "Satin", tagline: "Seamless patterned walls", desc: "Patterned walls without paper, joints or peeling — painted directly on the wall.", preview: liquid.url, gallery: [liquid.url], rooms: ["Living room", "Bedroom", "Hotel & Retail", "Office"] },
];

export const PROJECTS = [
  [pj1.url, "Masken"], [pj11.url, "Marbaleno"], [pj7.url, "Sandito"], [pj3.url, "Shaneel"], [pj9.url, "Sandito"], [pj13.url, "Marbaleno"],
  [pj2.url, "Masken"], [pj4.url, "Shaneel"], [pj8.url, "Sandito"], [pj12.url, "Marbaleno"], [pj5.url, "Shaneel"], [pj10.url, "Sandito"],
] as const;
