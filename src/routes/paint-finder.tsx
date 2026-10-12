import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro } from "@/components/SiteLayout";
import { PaintFinder } from "@/components/PaintFinder";
import { LOOKS, type Look } from "@/lib/products";
export const Route = createFileRoute("/paint-finder")({
  validateSearch: (search: Record<string, unknown>) => LOOKS.includes(search["look"] as Look) ? { look: search["look"] as Look } : {},
  head: () => ({ meta: [{ title: "Paint Finder | Silkstone Painters" }, { name: "description", content: "Find the right decorative paint for your room, preferred finish and colour tone with Silkstone's interactive Paint Finder." }, { property: "og:title", content: "Paint Finder | Silkstone Painters" }, { property: "og:description", content: "Find the right decorative paint for your room, preferred finish and colour tone with Silkstone's interactive Paint Finder." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Page,
});
function Page() { const { look } = Route.useSearch(); return <SiteLayout><div className="mx-auto max-w-7xl px-4 sm:px-6"><PageIntro eyebrow="Paint finder" title="Find your perfect finish." description="Choose your space, finish and tone. Compare real finish photos, save your favourites and ask our team for a quote." /><PaintFinder initialLook={look ?? "All"} /></div></SiteLayout>; }
