---
name: "Active Link Automation & Electrical"
description: "A near-black night viewfinder for a Nilai workshop, lit by electric cyan."
colors:
  void: "#04060c"
  band: "#070b14"
  ink: "#e7f6ff"
  muted: "#c9e7f5"
  on-cyan: "#041018"
  cyan: "#00d4ff"
  cyan-hot: "#7aecff"
  line: "rgba(0, 212, 255, 0.32)"
  violet: "#8b6cff"
  brand: "#0058a8"
  red: "#a21827"
  white: "#fff"
  field: "#071018"
  placeholder: "#b7d7e8"
  alert: "#ffd0d6"
  alert-border: "#ffb4bc"
  alert-wash: "rgba(162, 24, 39, 0.35)"
  scrim: "rgba(4, 6, 12, 0.94)"
  ghost: "rgba(4, 8, 16, 0.45)"
  plate-hi: "rgba(10, 24, 42, 0.92)"
  plate-lo: "rgba(5, 10, 18, 0.94)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(2.2rem, 5.6vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(1.45rem, 2.2vw, 1.85rem)"
    fontWeight: 800
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  full: "50%"
spacing:
  xs: "0.35rem"
  tight: "0.45rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.6rem"
  xxl: "2rem"
  section: "4.75rem"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.on-cyan}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cyan-hot}"
    textColor: "{colors.on-cyan}"
    rounded: "{rounded.sm}"
    height: "48px"
  button-line:
    backgroundColor: "{colors.ghost}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1rem"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ghost}"
    textColor: "{colors.cyan}"
    rounded: "{rounded.sm}"
    height: "48px"
  menu-toggle:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.on-cyan}"
    padding: "0.4rem 0.75rem"
    height: "44px"
  hud-key:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.55rem 0.45rem"
    height: "48px"
  hud-key-pressed:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.on-cyan}"
    height: "48px"
  sys-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.65rem 0.75rem"
    height: "48px"
  sys-toggle-pressed:
    backgroundColor: "rgba(0, 212, 255, 0.1)"
    textColor: "{colors.ink}"
    padding: "0.65rem 0.75rem"
    height: "48px"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.75rem"
    height: "48px"
  plate:
    backgroundColor: "linear-gradient(180deg, rgba(10, 24, 42, 0.92), rgba(5, 10, 18, 0.94))"
    textColor: "{colors.ink}"
    padding: "{spacing.lg}"
  nav-link:
    textColor: "{colors.ink}"
    padding: "0.35rem 0.5rem"
    height: "44px"
  closed-badge:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    padding: "0.05rem 0.45rem"
---

# Design System: Active Link Automation & Electrical

## Overview

**Creative North Star: "The Night-Shift Viewfinder"**

The Night-Shift Viewfinder is a near-black instrument for a Nilai workshop. The ground is void, the working light is electric cyan, and violet exists only as bloom. Density is one reading column on a 65ch measure, opening to a two-column viewfinder on a wide screen. Plus Jakarta Sans carries every line, from quiet body copy to the heavy uppercase display.

Depth is glass, cyan edge light, and a soft lift. Corner brackets frame the first screen and repeat on the builder plate. The 56px grid and the scan lines stay inside that viewfinder. The camera and the system diagram are CSS and SVG. The map iframe is the only embedded picture, filtered back into the night palette.

The page keeps a dark color scheme and rejects a light cream section, a graphite-and-amber theme, and a smart-home pastel palette. Brand blue stays in the logo mark. Brand red is the Sunday closed badge, and the form also uses that red as the alert wash.

**Key Characteristics:**

- Void ground, cyan working light, violet bloom in two places
- Plus Jakarta Sans, 400 body through 800 display
- Square HUD keys and circular instrument marks
- Glass on the builder, the reviews, and the quote form
- Grid and scan lines confined to the hero viewfinder
- Lens sweep, tilt, and diagram settle, all stopped for reduced motion

## Colors

The palette is a night instrument: a blue-black ground, one electric working light, and two brand hues kept in narrow jobs.

### Primary

- **Electric Cyan** (#00d4ff): The working light. Links, the caret, filled primary buttons, pressed HUD keys, the mobile Call cell, selection, the scrollbar thumb, diagram strokes, pips, and the periods in the display headline. Filled cyan always carries on-cyan text.
- **Hot Cyan** (#7aecff): Hover fill of the primary button.
- **Cyan Line** (rgba(0, 212, 255, 0.32)): The named structural line, used on the stuck header and the stats rail. Other hairlines use this same pigment at neighboring opacities: about 0.22 on section rules, 0.28 on the viewfinder frame and column dividers, 0.42 on plates, 0.45 on fields and the dock edge, and 0.72 on the resting line button.

### Secondary

- **Violet Bloom** (#8b6cff): Bloom only. It is painted at 42% opacity behind the camera, and at 22% opacity as a radial wash across the top of the system-builder plate. A cyan bloom at 28% opacity sits with it on the camera. Violet does not color type, buttons, or other sections.

### Tertiary

- **Brand Blue** (#0058a8): The logo hue. It fills the header mark tile and the favicon iris. It is not a control color or a section color.
- **Workshop Red** (#a21827): The filled Sunday closed badge.
- **Alert Pink** (#ffd0d6): Error copy on the form alert and under invalid fields.
- **Alert Line** (#ffb4bc): Border of an invalid field and of the form alert.
- **Alert Wash** (rgba(162, 24, 39, 0.35)): Background of the form alert. Same red hue as the closed badge, held to that wash.

### Neutral

- **Void** (#04060c): Page background, scrollbar track, and the theme color. Text on it is instrument ink.
- **Night Band** (#070b14): The only alternate ground. It backs the stats rail and any section given the band treatment, with a cyan hairline on the block edges.
- **Instrument Ink** (#e7f6ff): Primary text, and the focus ring.
- **Muted Cyan** (#c9e7f5): Support copy, captions, secondary lines, and the footer links at rest.
- **On Cyan** (#041018): Text, icons, and the selection color on any filled cyan control. Also the skip link.
- **Badge White** (#fff): Text on the Sunday closed badge.
- **Field** (#071018): Text-input and textarea fill.
- **Field Hint** (#b7d7e8): Placeholder text.
- **Void Scrim** (rgba(4, 6, 12, 0.94)): Stuck header and the mobile dock.
- **Ghost Fill** (rgba(4, 8, 16, 0.45)): Resting fill of the lined button.
- **Plate High** (rgba(10, 24, 42, 0.92)) and **Plate Low** (rgba(5, 10, 18, 0.94)): The two stops of the glass gradient.

### Named Rules

**The Working Light Rule.** Electric cyan is the only interactive accent. Every filled cyan control uses on-cyan text. Selection uses the same pair.

**The Bloom Rule.** Violet is bloom behind the camera and a wash on the system-builder plate. It is not a second accent for type or controls.

**The Mark Rule.** Brand blue belongs to the logo mark. Brand red fills the Sunday closed badge with white text, and the same red at 35% opacity is the form-alert wash. Red is not a button, a link, or a section.

## Typography

**Display Font:** Plus Jakarta Sans (with sans-serif)
**Body Font:** Plus Jakarta Sans (with sans-serif)
**Label/Mono Font:** Plus Jakarta Sans. There is no mono and no italic.

**Character:** One brief-pinned tech sans. Display is heavy, tight, and uppercase. Body is a calm 17px line. Labels that read as instrument data are small, bold, and tracked. The used weights are 400, 600, 700, and 800.

### Hierarchy

- **Display** (800, clamp(2.2rem, 5.6vw, 5.25rem), line-height 0.9, letter-spacing -0.035em): The hero headline. Uppercase, one phrase per line. The periods are cyan.
- **Headline** (800, clamp(2rem, 4vw, 3.25rem), line-height 1.05, letter-spacing -0.03em): Section titles.
- **Title** (800, clamp(1.45rem, 2.2vw, 1.85rem), letter-spacing -0.02em): Service rows and the symptom readout. Audience titles run larger, clamp(1.7rem, 3vw, 2.6rem), at the same weight. FAQ titles sit at 1.15rem. The hero lede is a separate step: 600, clamp(1.35rem, 2.2vw, 1.8rem), line-height 1.25, letter-spacing -0.02em.
- **Body** (400, 1.0625rem, line-height 1.6): Running text. Support, blurbs, and row copy cap at 65ch. The process list caps at 70ch. Stats and the rating numeral use 800, line-height 1, letter-spacing -0.04em, and tabular figures.
- **Label** (700, 0.82rem, letter-spacing 0.06em, uppercase): The viewfinder coordinate line. Contact group labels, quote attributions, and on/off flags sit in the same uppercase tracked band, from 0.75rem to 0.95rem, at 700 or 800.

### Named Rules

**The One Face Rule.** Plus Jakarta Sans is the only family. Display and controls are 800. Body is 400. Navigation and form labels are 700. The hero lede is 600. No second family, no italic.

**The Measure Rule.** Support copy stays inside 65ch. Display is uppercase and tight. Instrument labels are uppercase and tracked out.

## Layout

The page is a single column in a container of min(1120px, calc(100% - 2rem)), so the side inset is 1rem. Sections pad 4.75rem on the block axis. The header is a sticky bar, 68px minimum, transparent until the page has moved 12px, then a void scrim. Section targets leave 5.25rem of scroll margin, and 5.5rem at the bottom while the dock is on screen.

The hero viewfinder is edge to edge and, from 960px up, fills the screen under the header. Copy and the camera share the first row; Call, Build a quote, and WhatsApp form one full-width strip; coordinates sit in the lower row. Below 960px those stack in that same order: copy, controls, camera, coordinates.

The grid is 56px, drawn in cyan at 8% opacity, masked to an ellipse over the camera side of the hero. Scan lines sit on the camera itself. Neither pattern repeats down the page.

From 700px the site switch is four columns. From 800px the stats are three columns, service and audience rows split title and text, partner names sit in a row, and the FAQ and footer become columns. From 860px the builder pairs the diagram with the toggles. From 960px the contact block pairs the form with the hours. From 1100px the header links show inline, the menu button hides, and the bottom dock hides. Below that, the dock is fixed, body padding clears it, and the menu opens as a full-height list.

**The Viewfinder Rule.** The 56px grid and the camera scan lines belong to the hero viewfinder. The rest of the page is the 1120px column and the breakpoints above, on void or on the night band.

## Elevation & Depth

Depth is tonal and glassy, with a short shadow vocabulary. Flat void and the night band do most of the work. Glass plates, a void scrim, cyan hairlines, and soft lift mark the parts you can operate. The camera is a CSS box at a resting tilt of 14deg on X and -32deg on Y, in a 900px perspective. Pointer follow adds a few degrees only for a fine pointer. The builder diagram tilts less: 7deg and -10deg.

### Shadow Vocabulary

- **Control lift** (`box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35), 0 0 22px rgba(0, 212, 255, 0.28)`): The filled primary button.
- **Plate** (`box-shadow: 0 22px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(190, 244, 255, 0.16)`): Builder, reviews, and the quote form. Each also blurs the backdrop by 14px.
- **Pressed toggle** (`box-shadow: inset 0 0 0 1px #00d4ff, 0 10px 18px rgba(0, 0, 0, 0.28)`): A system row that is on, over a 10% cyan fill.
- **Iris** (`box-shadow: 0 0 14px #00d4ff`): The camera iris. Pips and timeline dots use a smaller black lift, 0 8px 12px or 0 6px 10px at 35% black.

The stuck header blurs 16px over the void scrim. The dock blurs 14px. Those are chrome, not plates.

Motion is short. Tilt eases in 180ms. The lens sweep is a 3.4s linear loop. The diagram settles in 420ms. A pressed button shifts down 1px. Smooth scrolling is on. Under reduced motion, animation and transitions stop, the sweep is removed, the press shift is removed, and scrolling is instant. The resting camera angle stays, because it is not running.

### Named Rules

**The Plate Rule.** Glass is the system builder, the reviews, and the quote form. Other sections sit flat on void or on the night band. The stuck header and the dock are scrims.

**The Soft Lift Rule.** A shadow is a soft black lift, a cyan glow, or a 1px inset sheen. The system has no hard offset shadow.

## Shapes

Controls are nearly square. Buttons and text fields use a 2px radius. HUD keys, plates, the menu toggle, the dock, and the closed badge are square. Circles are instrument marks: the lens, the blooms, the pips, and the timeline dots.

The viewfinder frame is a 1px cyan border at 28% opacity around the first screen, with 16px by 2px corner brackets inset 10px. The builder plate repeats those brackets. The logo tile is the exception in the mark itself: a 32px square with a 7px corner radius in the header, and a 6px radius on the favicon.

Hairlines are 1px cyan, or a 2px vertical bus on the electrical list. The map frame is a square crop, 260px tall, with the iframe forced to grayscale, inverted, and dimmed.

### Named Rules

**The Square Key Rule.** Buttons and fields are 2px. HUD keys, plates, the menu toggle, and the dock are square. Circles belong to the lens, the blooms, the pips, and the timeline dots.

## Components

Controls feel like keys on a night panel: heavy type, a cyan edge, and a clear pressed fill. Keyboard focus is always a 2px ink outline, 3px outside the control.

### Buttons

- **Shape:** 2px radius, 48px minimum height, padding 0.7rem 1rem, weight 800, letter-spacing -0.01em. An icon, when present, sits in an 0.5rem gap.
- **Primary:** Electric cyan fill, cyan border, on-cyan text, control-lift shadow. Hover shifts the fill to hot cyan. Press shifts the button down 1px.
- **Line:** Ghost fill, ink text, cyan border at 72% opacity. Hover turns the text and the border solid cyan.
- **Menu:** The small-screen menu button is a square cyan key, 44px minimum, with on-cyan text. It hides from 1100px up.

### Chips

- **HUD keys:** Site types and CCTV symptoms. Square, 48px minimum, transparent, ink text, cyan hairline near 40% opacity. Pressed: cyan fill, on-cyan text, cyan border. Symptom keys are two columns, five from 960px up.
- **System flag:** A square uppercase chip on the system row. Resting, it is muted text with a cyan hairline. On, it is cyan fill and on-cyan text.
- **Closed badge:** Square, workshop red, white text, weight 800. It marks Sunday in the hours list.

### Cards / Containers

- **Corner style:** Square.
- **Background:** Plate high to plate low, top to bottom. The builder plate adds the violet wash at the top.
- **Shadow strategy:** The plate shadow, plus 14px backdrop blur.
- **Border:** 1px cyan at 42% opacity. The builder also carries the 16px by 2px corner brackets.
- **Internal padding:** 1rem, and 1.3rem from 700px up.
- **Where:** The system builder, the reviews (rating, stars, and the three quotes), and the quote form. The electrical list, the symptom readout, and the process timeline are bordered instrument rows, not plates.

### Inputs / Fields

- **Style:** Field fill, ink text, 2px radius, 48px minimum height, padding 0.7rem 0.75rem, cyan hairline at 45%. Placeholder is field hint. The caret is cyan. The textarea is at least 8rem and grows vertically.
- **Focus:** The global ink outline, 2px with a 3px offset.
- **Choice controls:** 44px row, weight 600, accent color electric cyan.
- **Error:** Invalid fields take the alert line. The alert block uses the alert wash, alert-pink text, and the alert line. A field error under an input is alert pink. The character count is muted, in tabular figures.

### Navigation

The header is the top bracket. The wordmark sits at the start: a 32px tile in brand blue, a cyan ring, an ink center, then "Active Link" at 800 and "Automation & Electrical" in muted at 0.78rem and 600. Links are ink, weight 700, 44px tall. Hover turns them cyan. From 1100px they sit in a row beside a primary call button. Below that, the menu button opens a void list of 48px rows.

The dock is fixed to the bottom under 1100px: three equal cells, void scrim, 14px blur, a cyan top edge. Call is a filled cyan cell with on-cyan text. Quote and WhatsApp are ink with a cyan hairline. Labels are 0.78rem and 800. Each cell is at least 48px.

The footer is a hairline-topped column of muted links that turn cyan on hover.

### Camera

A CSS box in the hero, not a photograph. Faces are dark blue gradients with cyan edges. The lens is a set of rings and a cyan iris. Violet and cyan blooms sit behind it. The sweep is the only looping motion, and it is removed for reduced motion. The caption states that the drawing is not a live feed.

### System builder

Home, Shop, Factory, and Farm are HUD keys. Each choice redraws an SVG line schematic in cyan and sets the on/off rows. A row that is on gets a 10% cyan fill, a cyan edge, and a filled flag. The diagram uses the same tilt language as the camera, with a short settle. The quote form reads this same state.

## Do's and Don'ts

### Do:

- **Do** keep the ground on void, with the night band as the only alternate section ground.
- **Do** put on-cyan text on every filled cyan control, including the primary button, the pressed HUD key, and the dock's Call cell.
- **Do** use Plus Jakarta Sans at the shipped weights: 400 for body, 600 for the hero lede, 700 for navigation and labels, 800 for display and controls.
- **Do** keep the 16px by 2px cyan corner brackets on the viewfinder and on the builder plate.
- **Do** draw the camera and the system diagram in CSS and SVG, and keep partner names as text.
- **Do** stop animation and transitions, and hide the lens sweep, when reduced motion is requested. The camera's resting tilt may stay.
- **Do** keep the focus ring: 2px solid instrument ink, 3px offset.

### Don't:

- **Don't** add a light cream section, a graphite-and-amber theme, or a pastel smart-home palette.
- **Don't** use brand blue outside the logo mark.
- **Don't** use brand red as a theme. The shipped uses are the filled Sunday badge and the form-alert wash.
- **Don't** place violet on type, buttons, or sections beyond the camera bloom and the builder plate.
- **Don't** extend the viewfinder grid or the scan lines past the hero.
- **Don't** make the glass plate the default section container.
- **Don't** replace the CSS camera, the line schematic, or the text partner names with photography or redrawn partner logos.
