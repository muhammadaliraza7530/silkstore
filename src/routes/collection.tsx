import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageIntro, Action, WA } from "@/components/SiteLayout";
import { PRODUCTS, type Product } from "@/lib/products";

export const Route = createFileRoute("/collection")({
  head: () => ({ meta: [
    { title: "Paint Catalogue & Collection | Silkstone Painters" },
    { name: "description", content: "Browse Silkstone decorative paints with real finish photos for Marbaleno, Masken, Shaneel, Beatriz, Sandito and Liquid Wallpaper. Free quote on request." },
    { property: "og:title", content: "Paint Catalogue & Collection | Silkstone Painters" },
    { property: "og:description", content: "Explore Silkstone finishes, real photos and expert application in Lahore." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function PaintCard({ product }: { product: Product }) {
  return <article className="reveal-content min-w-0 overflow-hidden rounded-lg bg-card">
    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
      <img src={product.preview} alt={`${product.name} wall finish`} loading="lazy" decoding="async" className="size-full object-cover" />
      {product.bucket && <img src={product.bucket} alt={`${product.name} paint container`} loading="lazy" decoding="async" className="absolute bottom-3 right-3 size-24 rounded-lg bg-card object-contain p-1 shadow-soft" />}
    </div>
    <div className="p-5">
      <span className="text-xs font-semibold uppercase text-primary">{product.look} · {product.sheen}</span>
      <h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
      <p className="mt-1 font-medium">{product.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
      <div className="mt-5"><Action to={`${WA}?text=${encodeURIComponent(`Hello Silkstone, I'd like to ask about ${product.name}. Please share details and a free quote.`)}`} external>Ask about this paint</Action></div>
    </div>
  </article>;
}

function Page() {
  return <SiteLayout><div className="mx-auto max-w-7xl px-4 sm:px-6">
    <PageIntro eyebrow="Silkstone Effects" title="The collection." description="Explore our decorative finishes through real paintwork and product photos. Free quote on request." />
    <section className="py-8" aria-labelledby="catalogue-heading">
      <h2 id="catalogue-heading" className="text-2xl font-semibold">Paint catalogue</h2>
      <p className="mt-2 text-sm text-muted-foreground">For current pricing and coverage, contact Silkstone — we're happy to help.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{PRODUCTS.map(p => <PaintCard key={p.name} product={p} />)}</div>
    </section>
    <div className="rounded-lg bg-secondary p-6 sm:p-9"><h2 className="text-2xl font-semibold">Not sure which finish fits your space?</h2><p className="mt-2 text-muted-foreground">Make your shortlist in a few simple steps.</p><Link to="/paint-finder" className="mt-5 inline-block text-primary underline underline-offset-4">Open Paint Finder →</Link></div>
  </div></SiteLayout>;
}
