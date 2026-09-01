# Design and source credits

Adapted from the user's Design Memory library; its source repository was not modified.

"CSS Button Hover Styles" by Codrops (ButtonHoverStyles), MIT.
https://github.com/codrops/ButtonHoverStyles/blob/main/css/base.css

Used the pan fill transition, adapted to wine-red/ivory colors, rectangular buttons, keyboard focus parity, and reduced-motion preferences.

"Images Reveal (fanned photo stack)" by codse (animata), MIT.
https://github.com/codse/animata/blob/main/animata/image/images-reveal.tsx

Adapted the fanned photo composition and straighten-on-hover behavior in CSS, with authentic local photographs, alt text, keyboard focus and reduced-motion support. No demo images copied.

Photographs: Marta Ramondetto, as credited in the Google Business photo gallery for La cave d’Antoine Vino & caffè, viewed 2026-08-31. Attribution is not a license. Private design preview only until permission is established. Original image bytes are preserved in assets/images; source URLs and original cache paths are recorded in research/photo-originals-manifest.json.

Fonts: Cormorant Garamond and DM Sans (SIL Open Font License), downloaded from Google Fonts and self-hosted as variable woff2 files in assets/fonts — no external request at runtime. Icons: Lucide (ISC) — inlined as static SVG markup.

Social card: AI-generated editorial graphic; not a depiction of the venue.

"Mask Reveal Up" by codse (animata), MIT.
https://github.com/codse/animata/blob/main/animata/text/mask-reveal-up.tsx

Adapted the per-line enter specification into a once-only IntersectionObserver/Web Animations enhancement. Removed cycling, kept server-rendered semantic text, reduced travel to 24px and stagger to 60ms, and added reduced-motion handling.

"Letter Swap (Forward)" by Daniel Petho (Fancy Components), MIT.
https://fancycomponents.dev/r/letter-swap-forward-anim.json

Adapted duplicated, aria-hidden letter markup and vertical swap into CSS. Keyboard focus parity, bounded stagger, and reduced-motion fallback added.

"Parallax Image Layers" by Osmo (https://osmo.supply/), via osmosupply on
CodePen, license unconfirmed. https://codepen.io/osmosupply/pen/NWQevrB

Visual/concept reference only. No pen code or demo imagery copied. The native-scroll implementation in assets/js/main.js was independently written (ported from the project's earlier React source without behavior change); the hero, vineyard and gallery use different image/text depth rates. No Lenis/GSAP code from this reference is included.

Atmospheric vineyard photo: Beatrice Zinetti, “a vineyard with a sunset,” Barbaresco / Langhe, published September 8, 2022.
https://unsplash.com/photos/a-vineyard-with-a-sunset-7Bk2QKqwQRY
Free commercial use under the Unsplash License: https://unsplash.com/license (checked 2026-08-31).
Local file: assets/images/langhe-atmosfera.jpg. No retouching; CSS crops it responsively. This is an atmospheric landscape, not the venue, its view, property, or a claimed supplier vineyard.

Atmospheric wine-glass photo: Alexandra Slo, “two wine glasses sitting on top of a wooden table.”
https://unsplash.com/photos/two-wine-glasses-sitting-on-top-of-a-wooden-table-sjRFypj_XrY
Free commercial use under the Unsplash License (checked 2026-08-31). Local file: assets/images/calici-atmosfera.jpg. No retouching; CSS cropping only. It does not depict the venue.

"Text Highlighter" by Daniel Petho (Fancy Components), MIT.
https://fancycomponents.dev/r/text-highlighter.json

Adapted its background-gradient marker into semantic selectable text, with one-time IntersectionObserver activation and reduced-motion/static handling.

"Soft Blur In" by codse (animata), MIT.
https://github.com/codse/animata/blob/main/animata/text/soft-blur-in.tsx

Adapted only for a short static phrase. Removed cycling and imperative replacement, preserved a single accessible label and added reduced-motion handling.

"Progressive Blur" by ibelick (motion-primitives), MIT.
https://github.com/ibelick/motion-primitives/blob/main/components/core/progressive-blur.tsx

Adapted the masked-layer technique without the Motion dependency for one static photo-edge treatment.

"Edge Blur" by Cult UI (nolly-studio/cult-ui), MIT.
https://www.cult-ui.com/r/edge-blur.json

Adapted the five masked blur layers to the 48px edge above the fixed mobile contact bar, under its controls.

"SVG Path Page Transition (Vertical)" by Codrops (codrops-sketches), MIT.
https://github.com/codrops/codrops-sketches/tree/main/021-svg-path-page-transition-vertical

Adapted its three curve states to the accessible mobile menu dialog. CSS handles the short entrance; unsupported browsers and reduced-motion users get a static sheet.

"ScrollTrigger Image Zoom" by GreenSock on CodePen, license unconfirmed.
https://codepen.io/GreenSock/pen/YzbPYMx

Visual reference only. No code was copied. The project uses a new bounded native-scroll implementation without GSAP, pinning or debug markers.
