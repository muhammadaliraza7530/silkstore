import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X, MessageCircle, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = { url: "/logo.jpg" };

export const WA = "https://wa.me/923197128442";
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/19imUsrSMQ/", Icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bobby-barnard-6b7197273?utm_source=share_via&utm_content=profile&utm_medium=member_android", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/bobbybarnardpaintermind?stkn=MWtocTk5M2t5YXF5Mg==", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@bobbybarnard?si=WaJeEBk7NUnRNLvP", Icon: Youtube },
  { label: "Pinterest", href: "https://pin.it/2Ap7xw7b0", Icon: PinterestIcon },
];

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
    </svg>
  );
}
export const NAV = [
  ["Home", "/"], ["Paint Finder", "/paint-finder"], ["Collection", "/collection"],
  ["Projects", "/projects"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function Action({ to, children, light = false, external = false }: { to: string; children: ReactNode; light?: boolean; external?: boolean }) {
  const content = <><span className="min-w-0 break-words px-3 text-left text-sm font-semibold leading-tight">{children}</span><span className={`grid size-10 shrink-0 place-items-center rounded-full ${light ? "bg-primary text-primary-foreground" : "bg-card text-primary"}`}><ArrowUpRight className="size-4" /></span></>;
  const cls = `inline-flex min-h-12 max-w-full items-center justify-between gap-2 rounded-full p-1 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${light ? "bg-card text-foreground" : "bg-primary text-primary-foreground"}`;
  return external ? <a href={to} target={to.startsWith("http") ? "_blank" : undefined} rel={to.startsWith("http") ? "noreferrer" : undefined} className={cls}>{content}</a> : <Link to={to as "/"} search={{}} className={cls}>{content}</Link>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-enter border-b border-border pb-8 pt-9 sm:pb-12 sm:pt-16"><p className="text-xs font-semibold uppercase text-primary">{eyebrow}</p><h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p></div>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <div className="min-h-screen overflow-x-clip bg-background text-foreground">
    <header className="relative z-40 border-b border-border bg-card/90">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-3 sm:px-6 lg:gap-5">
        <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2.5"><img src={logo.url} alt="" className="size-11 shrink-0 rounded-full object-contain" /><span className="min-w-0 leading-tight"><strong className="block truncate text-base">Silkstone</strong><span className="block truncate text-xs text-muted-foreground">Nature of Colours</span></span></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">{NAV.map(([label, to]) => <Link key={to} to={to} className={`rounded-full px-3 py-2 text-sm transition-colors ${pathname === to ? "bg-secondary text-primary" : "text-foreground hover:bg-muted"}`}>{label}</Link>)}</nav>
        <div className="flex shrink-0 items-center gap-1.5"><a href={WA} aria-label="WhatsApp" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-secondary text-primary"><MessageCircle className="size-5" /></a><Button variant="ghost" size="icon" className="size-11 rounded-full lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
      </div>
      {open && <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-1 border-t border-border px-4 py-3 lg:hidden">{NAV.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-3 text-sm font-medium ${pathname === to ? "bg-secondary text-primary" : "hover:bg-muted"}`}>{label}</Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="mt-16 border-t border-border bg-card"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:grid-cols-[1fr_auto] sm:items-end sm:px-6"><div className="min-w-0"><Link to="/" className="inline-flex items-center gap-2"><img src={logo.url} alt="" loading="lazy" className="size-10 rounded-full object-contain" /><strong>Silkstone Painters</strong></Link><p className="mt-3 text-sm text-muted-foreground">Decorative paints & expert finishes in Lahore.</p><nav aria-label="Social media" className="mt-6"><p className="mb-3 text-xs font-semibold uppercase text-primary">Follow our work</p><div className="flex flex-wrap gap-2">{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} aria-label={`Silkstone on ${label}`} title={label} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full border border-border bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><Icon className="size-5" aria-hidden="true" /></a>)}</div></nav></div><div className="min-w-0 text-sm text-muted-foreground sm:text-right"><p>© {new Date().getFullYear()} Silkstone Painters</p><p className="mt-1 break-words">Design and developed by <strong className="text-foreground">Brand Up</strong></p></div></div></footer>
  </div>;
}
