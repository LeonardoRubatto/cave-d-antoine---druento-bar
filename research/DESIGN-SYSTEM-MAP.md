# Design Memory is the source of truth

Source library: `C:\.Leonardo\Project\design system (website elements template)`. The library is unchanged; all adaptations live in this project.

## Rules applied

- Type follows the 1.25 scale: 12/14/16/20/25/31/39/49/61px, with 76px only for the main desktop headline. Body copy is 16px at 1.65; controls are 12/14px at 1.2.
- Spacing uses the 4px grid and 16/20/24/32px responsive gutters. Surfaces are square; arches and circles have a specific image/control purpose.
- Warm ivory, wine red, olive and ochre replace generic gradients and glass effects. Shadows are project tokens.
- Timed motion uses `cubic-bezier(.22,1,.36,1)` and the 250/400/600ms scale, except Soft Blur In's deliberate 900ms headline reveal from the source item.
- Every nonessential motion has a reduced-motion fallback. There is no smooth-scroll engine, scroll interception, autoplay carousel or recurring text cycle.

## Components used

| Area | Design Memory grounding | Project adaptation |
|---|---|---|
| Highlighted phrases | `text-effects/text-highlighter` | Ochre marker, semantic selectable `mark`, once-only reveal and static fallback. |
| Home headline | `text-effects/soft-blur-in` | One short phrase; no cycling or imperative replacement; accessible phrase retained. |
| Other headings | `text-effects/mask-reveal-up` | Once-only line reveal with server-rendered text. |
| Navigation | `text-effects/letter-swap-forward` | Capped stagger, keyboard parity, one accessible label. |
| Buttons | `primitives/button-hover-styles` | Codrops pan fill in the site palette, with focus parity. |
| Mobile menu | `transitions/svg-path-page-transition-vertical` | Codrops curve in an accessible Base UI dialog; 400ms and static fallback. |
| Hero image | `scroll/scrolltrigger-image-zoom` reference | Independent native-scroll scale from 1.06 to 1.00; no pinning, GSAP or copied code. |
| Image depth | `scroll/parallax-image-layers` reference | Independent clipped, bounded native-scroll depth; disabled on phones. |
| Hero media edge | `backgrounds/progressive-blur` | Six CSS masked layers scoped behind media copy. |
| Mobile contact edge | `backgrounds/edge-blur` | Five layers over the 48px upper edge; controls stay sharp and clickable. |
| About photos | `image-treatment/images-reveal` | Two venue photos fan gently and straighten on hover/focus. |
| Gallery | shadcn/Base UI + library spacing/motion | Keyboard-operable enlarged views; motion does not hide content. |

The library's WebGL blur, fullscreen Hover Grid, long sticky sequences and Liquid Metal composition were reviewed and rejected because they would overwhelm a small neighborhood bar.

## Responsive and verification contract

- Desktop: centered signboard header, asymmetric editorial sections and subtle image depth.
- Phone: compact centered wordmark, dialog menu, single-column content and fixed call/directions bar. Image depth is static.
- Reduced motion: text and markers resolve immediately, menu remains functional, image scale is 1.
- Disabling JavaScript leaves core copy, page links, phone and directions available; the map stays closed.
- The production build, deep routes, navigation, dialogs, map opt-in/out, 320/390/768/1440 widths, document overflow and console errors are checked after the final update.
