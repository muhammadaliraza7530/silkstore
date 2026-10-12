# Project rules
- Keep the seven content pages as TanStack routes and share navigation and footer in SiteLayout — each page remains independently addressable.
- Keep the 3D hero in Hero3D, lazy-loaded only after hydration with a static photo underneath — this prevents WebGL from blocking the first render.
- Keep the shared PaintFinder on home and its dedicated page — both entry points must offer the same functioning paint choices.
- All images, logos, videos and icons live in public/ (images in public/images) and use absolute paths such as /logo.jpg — this keeps the site portable to Vercel and other hosts.
- Keep gentle entrance and interaction motion in global styles with a reduced-motion override — this gives pages consistent movement without excluding motion-sensitive visitors.
