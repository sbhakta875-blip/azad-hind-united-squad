# Design Brief

## Overview
Military/NCC organizational website for AZAD HIND UNITED SQUAD. Professional, patriotic, structured aesthetic emphasizing discipline, authority, and patriotic values.

## Tone & Differentiation
Authoritative, disciplined, patriotic. Bold serif display type conveys military heritage. Strict grid structure, minimal decoration, high contrast. No playfulness—every design choice reinforces professional military organization.

## Color Palette

| Token | OKLCH | Purpose |
| --- | --- | --- |
| **Primary** (Dark Green) | 0.25 0.08 210 | Military authority, main navigation, primary CTAs |
| **Secondary** (Khaki) | 0.65 0.13 95 | Patriotic warmth, accents, badges, borders |
| **Foreground** (Black/Dark) | 0.15 0 0 | Text, strong hierarchy |
| **Background** (Off-White) | 0.98 0 0 | Clean, professional base |
| **Card** (White) | 1.0 0 0 | Content containers with visible borders |
| **Muted** (Light Gray) | 0.92 0 0 | Secondary text, disabled states |
| **Border** (Neutral Gray) | 0.88 0 0 | Structural division |
| **Ring/Focus** (Dark Green) | 0.25 0.08 210 | Interactive focus states |

## Typography

| Category | Font | Usage |
| --- | --- | --- |
| **Display** | Fraunces (serif, bold) | Page titles, hero copy, section headers |
| **Body** | DM Sans (sans, regular) | Body text, labels, descriptions |
| **Mono** | Geist Mono (monospace) | Data, code, structured content |

## Elevation & Depth

| Element | Style |
| --- | --- |
| Navigation Header | bg-primary, shadow-card, white text, sticky |
| Hero Section | Full-width, bg-primary with khaki accent borders |
| Cards | bg-card, border-2 primary or khaki, shadow-elevated on hover |
| Popover/Modal | bg-popover, border-primary, shadow-elevated |
| Input | bg-input, border-border, focus:ring-4 ring-primary |

## Structural Zones

| Zone | Treatment | Notes |
| --- | --- | --- |
| **Header/Nav** | Dark green primary bg, white text, border-b secondary (khaki) | Sticky, contains logo + org name |
| **Hero** | Full-width bg-primary, bold serif h1, khaki accent line | CTA buttons below |
| **Content Sections** | bg-background, card-grid layout, visible borders | Alternating section backgrounds (bg-background / bg-muted/30) |
| **Cards** | bg-card with military-border (primary), elevated on hover | Leadership, training, camps, branches |
| **Gallery** | Grid layout, square cards, hover overlay effect | Lightbox trigger |
| **Footer** | bg-primary, white text, border-t secondary | Aligned left with contact/social links |

## Spacing & Rhythm
- Padding base: 1rem (1.5rem sections, 0.5rem internal)
- Gap: 1.5rem (card grids), 0.5rem (tight grouping)
- Margins: 2rem between sections, 1rem between cards
- Type scale: h1 2.5rem, h2 1.75rem, h3 1.25rem, body 1rem

## Component Patterns
- Buttons: military-button (green), military-button-secondary (khaki) with scale-95 active state
- Badges: military-badge (khaki bg, dark text)
- Cards: military-card (white, bordered, hover lift)
- Inputs: Border-focus ring on primary color, rounded-sm
- Navigation: Dark green primary with khaki dividers

## Motion
- Scroll behavior: smooth
- Fade-in: 0.4s ease-out (section entry)
- Slide-in-up: 0.5s ease-out (card stagger)
- Hover states: opacity-90, 200ms transition
- Focus states: ring-4 ring-primary/30

## Responsive Design
- Mobile-first Tailwind breakpoints (sm/md/lg/xl)
- Hero: Full stack mobile, 2-col grid on md+
- Cards: 1 col mobile, 2 col sm+, 3 col lg+
- Nav: Stack on mobile, horizontal on md+
- Text scales with vw for responsive type

## Constraints
- No rounded corners > 0.5rem (military angular aesthetic)
- No gradient backgrounds (solid fills only)
- No generic animations—each motion purposeful
- No transparency in primary UI (solid fills only)
- Minimum contrast ratio: AA (WCAG 2.1)
