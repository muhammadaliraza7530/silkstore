import { useMemo, useState } from "react";
import { Building2, Check, Heart, Hotel, House, Landmark, Store, BriefcaseBusiness, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Action, WA } from "@/components/SiteLayout";
import { PRODUCTS, LOOKS, TONES, type Look, type Room } from "@/lib/products";
const roomChoices: { name: string; room: Room; icon: LucideIcon }[] = [
  { name: "Living room", room: "Living room", icon: House }, { name: "Bedroom", room: "Bedroom", icon: Building2 },
  { name: "Office", room: "Office", icon: BriefcaseBusiness }, { name: "Hotel", room: "Hotel & Retail", icon: Hotel },
  { name: "Retail", room: "Hotel & Retail", icon: Store }, { name: "Lobby wall", room: "Lobby & Hall", icon: Landmark },
];

export function PaintFinder({ initialLook = "All" }: { initialLook?: Look | "All" }) {
  const [room, setRoom] = useState<Room | "Any">("Any");
  const [selectedSpace, setSelectedSpace] = useState("Any space");
  const [look, setLook] = useState<Look | "All">(initialLook);
  const [tone, setTone] = useState<{ name: string; color: string }>(TONES[0] ?? { name: "Natural", color: "" });
  const [customColor, setCustomColor] = useState("#577d91");
  const [selected, setSelected] = useState(PRODUCTS[0]?.name ?? "");
  const [galleryImage, setGalleryImage] = useState<string | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const [area, setArea] = useState("");
  const matches = useMemo(() => PRODUCTS.filter(p => (look === "All" || p.look === look) && (room === "Any" || p.rooms.includes(room))), [look, room]);
  const active = matches.find(p => p.name === selected) ?? matches[0] ?? PRODUCTS[0];
  if (!active) return null;
  const picks = saved.length ? saved : [active.name];
  const message = encodeURIComponent(`Assalam o Alaikum Silkstone! I'd like a quote.\nPaint: ${picks.join(", ")}\nTone: ${tone.name}${tone.color ? ` (${tone.color})` : ""}\nRoom: ${selectedSpace}${area ? `\nWall area: ${area} sq ft` : ""}`);
  const chooseRoom = (name: Room | "Any", label?: string) => { setRoom(name); setSelectedSpace(label ?? "Any space"); setGalleryImage(null); };
  const chooseProduct = (name: string) => { setSelected(name); setGalleryImage(null); };
  return <div className="grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
    <div className="min-w-0 lg:sticky lg:top-5 lg:self-start">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary sm:aspect-[4/3] lg:aspect-[4/5]">
        <img src={galleryImage ?? active.preview} alt={`${active.name} decorative wall finish in ${tone.name} tone`} fetchPriority="high" className="size-full object-cover" />
        {tone.color && <div className="pointer-events-none absolute inset-0 mix-blend-color transition-colors duration-300" style={{ backgroundColor: tone.color, opacity: .75 }} />}
        <Button variant="secondary" size="icon" aria-label={saved.includes(active.name) ? "Remove from shortlist" : "Save to shortlist"} onClick={() => setSaved(s => s.includes(active.name) ? s.filter(n => n !== active.name) : [...s, active.name])} className="absolute right-3 top-3 size-11 rounded-full"><Heart className={saved.includes(active.name) ? "fill-current" : ""} /></Button>
        <div className="absolute inset-x-0 bottom-0 bg-foreground/85 p-4 text-primary-foreground"><p className="text-xs">{active.look} · {active.sheen}</p><h2 className="mt-1 text-xl font-semibold">{active.name}</h2><p className="mt-1 text-sm leading-snug">{active.tagline}</p></div>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-2">{active.gallery.map(src => <Button key={src} variant="ghost" size="icon" onClick={() => setGalleryImage(src)} aria-label={`View ${active.name} finish photo`} className={`size-16 shrink-0 overflow-hidden rounded-md p-0 ${galleryImage === src ? "ring-2 ring-primary" : ""}`}><img src={src} alt="" className="size-full object-cover" /></Button>)}</div>
      <p className="text-xs text-muted-foreground">All finish photos shown here were supplied for Silkstone Painters. Colour appearance varies with lighting.</p>
    </div>
    <div className="min-w-0 space-y-9">
      <section><h2 className="mb-3 text-xl font-semibold">01 / Where is the wall?</h2><div className="grid grid-cols-2 gap-2 sm:grid-cols-3"><Button variant={selectedSpace === "Any space" ? "default" : "outline"} className="h-auto min-h-24 flex-col gap-2 rounded-lg" onClick={() => chooseRoom("Any")}><Building2 className="size-5" />Any space</Button>{roomChoices.map(r => <Button key={r.name} variant={selectedSpace === r.name ? "default" : "outline"} onClick={() => chooseRoom(r.room, r.name)} className="h-auto min-h-24 flex-col gap-2 whitespace-normal rounded-lg p-3 text-center"><r.icon className="size-5" /><span className="text-sm font-semibold">{r.name}</span></Button>)}</div></section>
      <section><h2 className="mb-3 text-xl font-semibold">02 / Choose a finish</h2><div className="flex flex-wrap gap-2">{(["All", ...LOOKS] as const).map(l => <Button key={l} variant={look === l ? "default" : "outline"} className="min-h-11 rounded-full" onClick={() => { setLook(l); setGalleryImage(null); }}>{l}</Button>)}</div></section>
      <section><h2 className="mb-3 text-xl font-semibold">03 / Pick a tone</h2><div className="flex flex-wrap gap-3">{TONES.map(t => <Button key={t.name} variant="outline" size="icon" aria-label={t.name} title={t.name} aria-pressed={tone.name === t.name} onClick={() => setTone(t)} style={{ background: t.color || "var(--gradient-spectrum)" }} className={`size-11 rounded-full border-4 transition-transform hover:scale-110 ${tone.name === t.name ? "ring-2 ring-primary ring-offset-2" : ""}`}>{tone.name === t.name && <Check className="text-foreground drop-shadow" />}</Button>)}<label className={`relative grid size-11 cursor-pointer place-items-center overflow-hidden rounded-full border-4 border-card bg-spectrum text-xs font-bold text-foreground shadow-sm ${tone.name === "Custom" ? "ring-2 ring-primary ring-offset-2" : ""}`} title="Choose a custom colour"><span className="pointer-events-none">+</span><input type="color" value={customColor} aria-label="Choose a custom colour" onChange={e => { setCustomColor(e.target.value); setTone({ name: "Custom", color: e.target.value }); }} className="absolute inset-0 size-full cursor-pointer opacity-0" /></label></div><p className="mt-3 text-sm font-medium" aria-live="polite">{tone.name}{tone.name === "Custom" ? ` · ${tone.color}` : ""}</p><p className="mt-1 text-xs text-muted-foreground">Digital colour is an approximation. Ask for a physical sample before final selection.</p></section>
      <section><h2 className="mb-3 text-xl font-semibold">04 / Select your paint <span className="text-base font-normal text-muted-foreground">({matches.length})</span></h2>{matches.length ? <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{matches.map(p => <Button key={p.name} variant={active.name === p.name ? "default" : "outline"} onClick={() => chooseProduct(p.name)} className="h-auto min-h-20 flex-col items-start whitespace-normal rounded-lg p-3 text-left"><span className="break-words font-semibold">{p.name}</span><span className="text-xs font-normal opacity-80">{p.tagline}</span></Button>)}</div> : <p className="rounded-lg bg-card p-5 text-sm">No exact match. Try another room or finish.</p>}</section>
      <section className="border-t border-border pt-6"><h2 className="text-xl font-semibold">Your selection</h2><p className="mt-2 break-words text-sm text-muted-foreground" aria-live="polite">{picks.join(", ")} · {tone.name}{tone.color ? ` (${tone.color})` : ""} · {selectedSpace}</p><label className="mt-4 block text-sm font-medium" htmlFor="wall-area">Wall area (sq ft)</label><input id="wall-area" inputMode="numeric" value={area} onChange={e => setArea(e.target.value.replace(/\D/g, ""))} placeholder="e.g. 120" className="mt-2 h-12 w-full rounded-lg border border-input bg-card px-4 outline-none focus:ring-2 focus:ring-ring" /><div className="mt-4 flex flex-wrap gap-2"><Action to={`${WA}?text=${message}`} external>Get a WhatsApp quote</Action><Action to="tel:03197128442" external light>Call Silkstone</Action></div></section>
    </div>
  </div>;
}
