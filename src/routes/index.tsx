import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { SiteLayout, Action } from "@/components/SiteLayout";
import { PaintFinder } from "@/components/PaintFinder";
import { LOOKS, PRODUCTS, PROJECTS } from "@/lib/products";
const workingPhotos = [
  "/images/team-working-exterior.jpg",
  "/images/team-working-ceiling-1.jpg",
  "/images/team-working-wall-1.jpg",
  "/images/team-working-ceiling-2.jpg",
  "/images/team-working-wall-2.jpg",
] as const;

const Hero3D = lazy(async (): Promise<{ default: () => ReactNode }> => {
  try { return await import("@/components/Hero3D"); }
  catch { try { return await import("@/components/Hero3D"); } catch { return { default: () => null }; } }
});

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Silkstone Painters | Decorative Paints & Wall Finishes Lahore" }, { name: "description", content: "Explore decorative wall finishes, real projects and professional painting services in Lahore. Find your perfect Silkstone paint." }, { property: "og:title", content: "Silkstone Painters — Nature of Colours" }, { property: "og:description", content: "Discover decorative finishes, projects and expert painting in Lahore." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Home,
});

function Home() {
  const [mounted, setMounted] = useState(false);
  const catalogueProducts = PRODUCTS;
  useEffect(() => setMounted(true), []);
  return <SiteLayout>
    <section className="p-2 sm:p-4"><div className="bg-hero relative overflow-hidden rounded-lg text-primary-foreground">
      <div className="page-enter relative z-10 mx-auto max-w-6xl px-5 pb-2 pt-8 text-center sm:px-8 sm:pt-16"><span className="glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest">Silkstone Effects · Lahore</span><h1 className="mt-5 text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[1.05] tracking-tight">Silkstone.<br />Walls that feel like art.</h1><p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed sm:text-lg">Real materials. Thoughtful colours. Beautiful walls, finished by people who care about every detail.</p></div>
      <div className="relative mx-auto h-[165px] max-w-5xl sm:h-[360px]" aria-hidden="true"><img src="/images/team-working-exterior.jpg" alt="" fetchPriority="high" className="absolute inset-0 mx-auto h-full w-[82%] rounded-lg object-cover opacity-55 sm:w-[62%]" />{mounted && <Suspense fallback={null}><Hero3D /></Suspense>}</div>
      <div className="relative z-10 mx-auto flex max-w-xl flex-wrap justify-center gap-3 px-4 pb-6"><Action to="/collection" light>Explore collection</Action><Action to="/paint-finder">Find my paint</Action></div>
    </div></section>
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 sm:py-20">
      <section aria-labelledby="team-at-work-heading"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-primary">Silkstone team at work</p><h2 id="team-at-work-heading" className="max-w-3xl text-3xl font-semibold sm:text-5xl">Professional hands. Real work.</h2><p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">Our painters prepare and finish every surface carefully, from detailed ceilings to interior and exterior walls.</p></div><Action to="/services" light>Our services</Action></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-6 sm:grid-rows-2">{workingPhotos.map((photo, index) => <div key={photo} className={`reveal-content overflow-hidden rounded-lg bg-muted ${index === 0 ? "col-span-2 aspect-[4/3] sm:col-span-3 sm:row-span-2 sm:aspect-auto" : "aspect-square sm:col-span-1"}`}><img src={photo} alt={`Silkstone painters working on site ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" className="size-full object-cover transition-transform duration-500 hover:scale-105" /></div>)}</div></section>
      <section aria-labelledby="home-catalogue-heading"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-primary">Paint catalogue</p><h2 id="home-catalogue-heading" className="text-3xl font-semibold sm:text-5xl">Our finishes.</h2><p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">Explore our decorative finishes — free quote on request. Confirm coverage and pricing with Silkstone before ordering.</p></div><Action to="/collection" light>View full collection</Action></div><div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">{catalogueProducts.map(p => <Link to="/collection" key={p.name} className="group min-w-0 overflow-hidden rounded-lg bg-card"><div className="relative aspect-[4/3] overflow-hidden bg-muted"><img src={p.preview} alt={`${p.name} decorative finish`} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />{p.bucket && <img src={p.bucket} alt={`${p.name} paint container`} loading="lazy" decoding="async" className="absolute bottom-2 right-2 size-20 rounded-lg bg-card object-contain p-1 shadow-soft" />}</div><div className="p-4"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-lg font-semibold">{p.name}</h3><span className="text-sm font-semibold text-primary">{p.sheen}</span></div><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">View details <ArrowRight className="size-4" /></span></div></Link>)}</div></section>
      <section className="grid gap-4 lg:grid-cols-2"><div className="bg-card-grad rounded-lg p-6 text-primary-foreground sm:p-10"><div className="inline-flex items-center gap-3 rounded-full bg-card/20 p-1 pr-4"><img src="/images/team-working-wall-2.jpg" alt="Silkstone painter at work" loading="lazy" className="size-10 rounded-full object-cover" /><span className="text-sm">Welcome to Silkstone</span></div><h2 className="mt-7 text-3xl font-semibold leading-tight sm:text-4xl">Your space deserves more than another coat of paint.</h2><p className="mt-4 leading-relaxed opacity-90">We bring decorative finishes and skilled application together to create walls with character. From the first sample to the final detail, we work alongside you.</p><div className="mt-7"><Action to="/about" light>Get to know us</Action></div></div><div className="rounded-lg bg-card p-6 sm:p-10"><p className="text-sm text-muted-foreground">Explore by finish</p><h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Pick the right finish.</h2><div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">{LOOKS.map((look, i) => <Link key={look} to="/paint-finder" search={{ look }} className={`flex min-h-28 flex-col justify-between rounded-lg p-4 transition-transform hover:-translate-y-1 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted"}`}><Sparkles className="size-5" /><span className="font-semibold">{look}</span></Link>)}</div></div></section>
      <section id="finder"><div className="mb-2"><p className="text-sm text-primary">Paint Finder</p><h2 className="text-3xl font-semibold sm:text-5xl">Find my paint.</h2><p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">Pick your room, choose a finish and a colour tone — then send us your selection for a free quote.</p></div><PaintFinder /></section>
      <section><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-primary">Our work</p><h2 className="text-3xl font-semibold sm:text-5xl">Real walls, real results.</h2></div><Action to="/projects" light>View projects</Action></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{PROJECTS.slice(0,4).map(([img,name], i) => <Link key={i} to="/projects" className="relative aspect-[3/4] overflow-hidden rounded-lg"><img src={img} alt={`${name} completed wall finish`} loading="lazy" className="size-full object-cover" /><span className="absolute bottom-3 left-3 rounded-full bg-card px-3 py-1 text-xs font-semibold">{name}</span></Link>)}</div></section>
      <section className="flex flex-col items-start gap-6 rounded-lg bg-primary p-7 text-primary-foreground sm:p-12"><Check className="size-9" /><h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">Ready to see what your walls could become?</h2><p className="max-w-xl opacity-90">Tell us about your space and we’ll help you choose a finish that feels right.</p><Action to="/paint-finder" light>Start with Paint Finder</Action></section>
    </div>
  </SiteLayout>;
}
