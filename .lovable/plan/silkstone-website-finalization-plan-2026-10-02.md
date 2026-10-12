# Silkstone Website Finalization Plan

## Goal
Turn the current long single-page website into a polished, mobile-first multi-page Silkstone website. Keep the approved light teal/blue visual direction and premium 3D experience, while ensuring every section fits cleanly on small screens.

## Pages
- **Home** — refined 3D introduction, key finishes, featured work, services preview, and clear links to the main pages.
- **Paint Finder** — full interactive selector for room, finish, tone, product, shortlist, wall area, and WhatsApp quote.
- **Collection** — complete Silkstone paint range with product imagery and details; no prices anywhere.
- **Projects** — swipe-friendly gallery of real completed walls with finish labels and links into Paint Finder.
- **Services** — residential, commercial, decorative, industrial, exterior, and interior painting services.
- **About** — company story, quality promise, team imagery, and Bobby Barnard’s chairman message.
- **Contact** — phone, WhatsApp, email, address, map link, and free site-visit calls to action.

## Room Images
Create six photorealistic room scenes for Paint Finder:
- Living room
- Bedroom
- Office
- Hotel
- Retail space
- Lobby wall

Each image will clearly show a realistic feature wall, natural architectural lighting, believable materials, and no text or artificial-looking visual effects. These images will be used as the room-selection previews.

## Mobile Improvements
- Rebuild the shared navigation as a compact mobile header with an accessible menu.
- Remove fixed-width and truncation patterns that cut text, including the Brand Up footer credit.
- Make headings, action rows, paint controls, cards, contact details, and chairman content wrap naturally at 320–430px widths.
- Keep every touch target comfortably sized and prevent horizontal page overflow.
- Preserve finger swiping for project galleries and room options, with visible controls where helpful.
- Reframe the 3D area for mobile so it does not cover headings or calls to action.

## Shared Experience
- Create reusable header, footer, page introduction, action, and section components so all pages feel consistent.
- Replace homepage hash links with real page navigation.
- Keep WhatsApp and phone actions working throughout.
- Add unique page titles and social descriptions to every page.
- Keep prices removed from every product surface and quote message.

## Validation
- Check all pages at a narrow mobile viewport and desktop viewport.
- Verify menus, route navigation, Paint Finder selections, swipe galleries, phone links, and WhatsApp quote generation.
- Confirm no clipping, unintended horizontal scrolling, blank 3D state, build errors, or runtime errors.

## Technical Details
- Continue with TanStack Router and create one route file per page.
- Keep WebGL client-only and isolated from server rendering.
- Store generated room visuals as project assets.
- Move shared product, room, service, and navigation data into reusable modules where appropriate.
