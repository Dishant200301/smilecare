# SubCategory Detail Components - Documentation

## Overview
All sections from `SubCategoryDetail.tsx` have been extracted into separate, reusable components located in `src/components/subcategory/`.

## Components Created

### 1. **SubCategoryHero.tsx**
**Purpose:** Hero section with gradient text, CTA button, and background effects
**Props:**
- `title: string` - The subcategory title to display

**Features:**
- Animated gradient text
- Background glow effects
- Animated CTA button with hover effect
- Framer Motion animations

---

### 2. **BadWebExperience.tsx**
**Purpose:** Displays common website issues with X icons
**Props:**
- `heroImages?: string[]` - Array of hero images (optional)

**Features:**
- List of 10 bad web experience points
- Red X icons for each point
- Image grid with 4 images
- Hover effects on images

---

### 3. **GoodWebExperience.tsx**
**Purpose:** Shows website benefits with check icons
**Props:**
- `image: string` - Website preview image
- `features?: string[]` - Array of features (optional, has defaults)

**Features:**
- Browser mockup with website preview
- Green check icons for each feature
- Decorative gradient background
- Default features if none provided

---

### 4. **ResponsiveShowcase.tsx**
**Purpose:** Displays website on laptop and mobile mockups with annotations
**Props:**
- `image: string` - Website image to display

**Features:**
- Laptop mockup with realistic frame
- Mobile mockup with notch
- Left-side annotations (desktop only)
- Hover effects on devices
- "Looks Perfect Every Time" heading

---

### 5. **MobileUIShowcase.tsx**
**Purpose:** Displays three mobile phone mockups with divider
**Props:**
- `image: string` - Website image to display

**Features:**
- Three mobile phone mockups
- Vertical divider line (desktop)
- Hover lift effects
- Responsive layout

---

### 6. **InvestmentComparison.tsx**
**Purpose:** Text-only comparison table between Single Page and Multi-Page websites
**Props:** None (data is hardcoded)

**Features:**
- 10 comparison rows
- 3-column layout (Topic, Single Page, Multi-Page)
- Responsive mobile cards
- No icons (text-only as per requirements)
- Black & white theme

---

### 7. **DifferentService.tsx**
**Purpose:** Shows service features for different targeted customers
**Props:**
- `image: string` - Website preview image
- `serviceFeatures?: ServiceFeature[]` - Array of features (optional, has defaults)

**Types:**
```typescript
interface ServiceFeature {
    icon: string;
    title: string;
}
```

**Features:**
- Browser mockup with website
- 3 feature cards with icons
- Default features if none provided
- White cards on black background

---

### 8. **AnalyticsSection.tsx**
**Purpose:** Shows Google Analytics dashboard mockup with stats
**Props:** None (data is hardcoded)

**Features:**
- Google Analytics header
- Bar chart visualization
- 4 stat cards (Users, Sessions, Bounce Rate, Pages/Session)
- Donut chart
- "Who + How Many + Where From" heading

---

### 9. **BehaviorTracking.tsx**
**Purpose:** Shows user behavior analytics dashboard
**Props:** None (data is hardcoded)

**Features:**
- User Behavior Dashboard mockup
- Heatmap visualization
- 3 stat cards (Clicks, Scroll %, Time)
- "What They Do + Why They Leave" heading
- Browser window frame

---

### 10. **PlanComparison.tsx**
**Purpose:** Text-only comparison between Starter and Growth plans (NO ICONS)
**Props:** None (data is hardcoded)

**Features:**
- 9 comparison rows
- **Text-only format** (no check/cross/warning icons)
- 3-column layout (Use Case, Starter Plan, Growth Plan)
- Responsive mobile cards
- Same theme, colors, fonts as InvestmentComparison
- Black & white theme with rounded container

---

## Usage Example

```tsx
import {
    SubCategoryHero,
    BadWebExperience,
    GoodWebExperience,
    ResponsiveShowcase,
    MobileUIShowcase,
    InvestmentComparison,
    DifferentService,
    AnalyticsSection,
    BehaviorTracking,
    PlanComparison
} from "@/components/subcategory";

// In your page component
<SubCategoryHero title="Yoga Studio" />
<BadWebExperience heroImages={images} />
<GoodWebExperience image={websiteImage} features={customFeatures} />
<ResponsiveShowcase image={websiteImage} />
<MobileUIShowcase image={websiteImage} />
<InvestmentComparison />
<DifferentService image={websiteImage} serviceFeatures={features} />
<AnalyticsSection />
<BehaviorTracking />
<PlanComparison />
```

## Design System Compliance

All components follow the website's design system:

### Colors
- Background: Pure black (`#000000`)
- Text: White and gray variations
- Brand color: `#8caac8` (light blue-gray)
- Borders: White with low opacity (`white/10`, `white/20`)

### Typography
- Primary font: `Hind Madurai` (sans-serif)
- Secondary/Italic font: `Instrument Serif` (serif)
- Font sizes: Consistent with design system

### Layout
- Responsive design (mobile-first)
- Consistent spacing and padding
- Clean, modern, professional styling

### Animations
- Framer Motion for smooth animations
- Hover effects on interactive elements
- Scroll-triggered animations with `whileInView`

## Benefits of Component Extraction

1. **Modularity:** Each section is now a standalone component
2. **Reusability:** Components can be used across different pages
3. **Maintainability:** Easier to update and debug individual sections
4. **Readability:** Main page file reduced from 1015 lines to ~115 lines
5. **Testing:** Each component can be tested independently
6. **Performance:** Easier to optimize individual components
7. **Consistency:** Ensures design system compliance across all pages

## File Structure

```
src/
├── components/
│   └── subcategory/
│       ├── index.ts
│       ├── SubCategoryHero.tsx
│       ├── BadWebExperience.tsx
│       ├── GoodWebExperience.tsx
│       ├── ResponsiveShowcase.tsx
│       ├── MobileUIShowcase.tsx
│       ├── InvestmentComparison.tsx
│       ├── DifferentService.tsx
│       ├── AnalyticsSection.tsx
│       ├── BehaviorTracking.tsx
│       └── PlanComparison.tsx
└── pages/
    └── SubCategoryDetail.tsx (refactored)
```

## Notes

- All components use TypeScript for type safety
- All components are fully responsive
- All components follow the black & white theme
- No external dependencies beyond what's already in the project
- All animations use Framer Motion
- All components use Tailwind CSS for styling
