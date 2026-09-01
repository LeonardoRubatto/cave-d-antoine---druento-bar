# La Cave d’Antoine — research and website decisions

Research date: 31 August 2026. This is a source-backed working brief, not an official business record or an owner-approved legal notice.

## Identity and verified public details

- Trading name: La cave d’Antoine Vino & caffè. Google categorizes it as an enoteca.
- Address: Via Madonna 12, 10040 Druento, Torino, Piemonte, Italy. Instagram calls the same street “strada madonna 12”; use Google's standardized address consistently.
- Business phone: +39 335 537 2815, independently shown on Google and Restaurant Guru.
- Hours: Wednesday–Saturday 17:30–00:00; Sunday–Tuesday closed. Read Google's expanded hours table directly; Restaurant Guru agrees. Holiday exceptions unknown.
- Google entity: /g/11ynys72hj; CID 657776486359804449; map feature 0x4788690025db95ad:0x920e43ab314aa21. Directions coordinates supplied by Restaurant Guru: 45.12890180, 7.58434950.
- Google displayed 5.0/5 from 7 reviews. Restaurant Guru displayed 5.0/5 from 5 Google ratings and an update date of 19 July 2026. Do not mix the counts or treat a small sample as broad market validation.
- Instagram: @lacave.dantoine. Public profile showed 59 followers, with wine/coffee positioning. Visible posts: 5 October 2025 and 27 January 2026. No verified current events calendar.
- Google showed “Add website” during inspection. A claim-business link alone does not prove whether the profile is claimed.

Sources: [Google Business](https://share.google/zh0mbzC94YwaQbhdW), [Instagram](https://www.instagram.com/lacave.dantoine/), [Restaurant Guru](https://es.restaurantguru.com/La-cave-dAntoine-Vino-and-caffe-Druento).

## What it offers, and the limits of the evidence

Photographs show a broad bottle selection, wine by the glass on a chalkboard, a coffee machine, spirits, small tables, warm lights and metal shelving. Customer reviews describe Antoine's personal welcome, wines, cocktails, salumi/cheese boards, outdoor seating, nearby free parking and wheelchair access. Those last three are reviewer observations, not audited facility guarantees. One reviewer rates food/service/atmosphere 3/3/4 on the aggregator despite the aggregate headline. Avoid presenting every aspect as universally praised.

The visible chalkboard describes a place for drinking well and sharing platters rather than a restaurant. Some reviews call it an enoteca with food. Website choice: lead with wine and aperitivo, not a full-service restaurant, chef-led dining, breakfast opening, or a fixed menu. A historical photo or review price is not an offer valid today.

The perceived value proposition is an inference from the photos, owner profile and reviews: personal recommendations and an unhurried social setting. No invented founding narrative, sommelier qualification, awards, organic certification, exclusive wine partnerships, delivery, online ordering or guaranteed reservation inventory.

## Legal/business identity lead — owner confirmation required

[RegistroAziende](https://registroaziende.it/azienda/la-cave-dantoine-di-sollami-antoine-sebastien-druento) lists “La Cave D'Antoine Di Sollami Antoine Sebastien”, P.IVA 13296230017, active in Druento, ATECO 56.30.01. This is a commercial directory, not an official registry extract; keep as an unverified lead and do not publish as confirmed legal data. A separate company “Le Cantine Di Sollami Antoine Sebastien E Veronese Germano S.n.c.” has a different VAT number and address; do not conflate it with this establishment.

No verified business email, PEC, legal operating address, official owner biography or business-account access was found in the accessible material. Never reuse contacts, awards or company history from namesakes in France.

## Surroundings and audience

Druento is an access point to Parco La Mandria. Its municipality describes it as a gateway to the park. The nearby Venaria royal residence and gardens give visitors another reason to explore this part of the Turin area. No unsupported walking/driving times are claimed.

Sources: [Comune di Druento: parks](https://www.comune.druento.to.it/Guidaalpaese?IDCat=9432&IDPagina=61599), [Turismo Torino: La Mandria](https://turismotorino.org/it/visita/cosa-fare-e-vedere/outdoor/parco-naturale-la-mandria-aree-protette-area-metropolitana-di-torino), [Reggia di Venaria](https://lavenaria.it/).

Primary audience: local adults deciding where to meet for aperitivo. Secondary audience: visitors to Druento/La Mandria/Venaria seeking an evening stop. Neighboring alternatives surfaced by the aggregator include Re Bianco and Piola aTipica; these are leads, not a comprehensive competitive audit.

## Build strategy

- Italian-first, one continuous page: welcome → identity → wine/aperitivo/coffee → review → authentic gallery → surroundings → contacts and practical FAQ.
- Phone reservation is the conversion, with clear language that only the venue confirms availability. Directions open the verified coordinates. Instagram remains the source for announcements.
- Design Memory grounds the site-wide type, spacing and motion rules and the main interactions: Codrops pan buttons and sticky story sections, Animata fanned photos and headline reveals, Fancy Components letter-swap links, and an independently implemented depth effect based on the library's Osmo CodePen visual reference. See `DESIGN-SYSTEM-MAP.md` for the full mapping and license distinctions. Incomplete WebGL references are not copied.
- Palette: ivory #f6f3ea, wine #6f272f, olive #59604a. Cormorant Garamond display and DM Sans body follow the library's editorial pairing. The two larger display sizes extend its 1.25 type ratio. The arched hero is a deliberate media mask.
- Responsive grid, 16px mobile / 24px tablet / 32px desktop gutters, large touch controls, mobile dialog menu and bottom call/directions bar. Focus-visible states, reduced-motion handling, directly linked wine/aperitivo/coffee story panels and accessible image dialogs. The first draft's tabs were replaced by the stronger design-system scroll composition.
- A freely licensed Beatrice Zinetti photograph of the Langhe adds an atmospheric parallax section. It is labeled as atmosphere, not the venue, its view or a claimed supplier. See `free-photo-manifest.json`.
- Photos served locally, no live Instagram embed, no analytics or lead form. Google Maps loads only after an explicit button action. This does not substitute for an owner-approved privacy notice at public launch.
- Local structured business information only; no aggregate-rating schema suggesting self-serving review eligibility. Private preview is noindex.

## Before public launch

Confirm photo rights (all selected Google images are attributed to visitor Marta Ramondetto); get owner-approved originals if needed. Confirm current hours, phone, legal details, coffee service, accessibility and terrace availability, menu and allergens. Confirm whether WhatsApp is actually monitored before adding it. Obtain public-launch approval and the intended domain. The present site does not change Google Business, post to Instagram, contact the venue, or book a table.

## Photo manifest

The originals were downloaded through the visible Google gallery to the browser asset cache. Named copies are in public/images. `cantina`: wine wall; `bottiglie`: bottle detail; `bancone`: counter; `interni`: tables/interior; `lavagna`: historic chalkboard; `tagliere`: food board; `esterno` and `dettagli`: additional archive photos. Names are convenience labels; inspect before choosing new placements. No photographs have been retouched or AI-enhanced.

## Multipage revision, 31 August 2026

The concise revision deliberately avoids publishing an aggregate review score. Google displayed 5.0 from seven reviews at research time, which is accurate but a very small sample; changing it to 4.8 would create a false fact. The site instead uses one exact, attributed short review excerpt and links to the live Google listing. Practical claims sourced only from a review, such as parking and wheelchair access, are visibly qualified and paired with a request to call.

The public-facing structure is now four short pages: home, the venue/photos, contact and legal/privacy. There is no menu page because no current, verified menu and price list was found. The legal page is intentionally longer than the marketing pages and identifies every item still requiring owner verification before public launch.
