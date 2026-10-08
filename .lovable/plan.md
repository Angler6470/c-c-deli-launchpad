# C&C Delicatessen single-page website

## Goal
Create a fast, mobile-first restaurant page that helps hungry customers immediately call, order, scan the menu, and find the store.

## Page structure
- Replace the current blank home page with the complete C&C Delicatessen experience.
- Add a compact sticky header with the business name, Menu and Location anchor links, and a high-visibility Call Now action.
- Place a slim daily-special banner directly below the header, with its text kept in one obvious editable constant.
- Build an image-led first section featuring an appetizing deli/Latin food visual, a bold value-focused headline, and large Order Online and View Menu actions.
- Add a two-tab menu switcher for Classic Deli and Latin & Caribbean Hot Food, with the requested placeholder dishes presented in easy-to-scan rows.
- Add a Location section/footer containing the provided address, hours, and a clearly styled Google Maps placeholder block.

## Visual direction
- Use a clean off-white surface, dark charcoal typography, and warm terracotta/chili red accents through semantic design tokens.
- Favor strong type hierarchy, generous touch targets, restrained borders, and dense but readable menu information.
- Keep motion minimal and respect reduced-motion preferences.
- Make the mobile layout the priority, then adapt navigation and spacing for larger screens without hiding key actions.

## Interactions and links
- Menu and Location links scroll to their matching sections.
- View Menu scrolls to the menu; menu tabs switch content without reloading.
- Call Now uses a telephone link with a clearly marked placeholder number because no phone number was supplied.
- Order Online remains a clearly labeled placeholder action because no ordering URL was supplied.

## Technical details
- Update the home route only; no database or account system is needed.
- Define the restaurant palette and typography roles in the global design system and use semantic classes throughout.
- Add route-specific title, description, Open Graph, and Twitter metadata for C&C Delicatessen.
- Use an optimized locally stored food image asset rather than a remote hotlink.
- Preserve keyboard access, visible focus states, semantic headings, and ARIA state for the menu tabs.
- Verify the page at mobile and desktop sizes, check tab switching and anchor behavior, and confirm the preview builds cleanly.

## Known placeholders
- Phone number
- Online ordering destination
- Daily special text
- Google Maps embed
