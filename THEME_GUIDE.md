# TryzenIQ Theme System Guide

## Overview
This project uses a centralized theme system with CSS variables and Tailwind tokens to ensure consistent styling across all components.

## 🎨 Color Tokens

### Core Colors
```tsx
// Always use these instead of hardcoded colors
bg-background      // Black background (#000000)
bg-white          // White (#FFFFFF)
text-foreground   // Light text on dark backgrounds
```

### Brand Colors
```tsx
bg-brand          // Primary brand color (#8caac8)
text-brand        // Brand color for text
hover:bg-brand-secondary  // Hover state
```

### Card Styling
```tsx
// White cards (default for content cards)
bg-card           // White background
text-card-foreground  // Black text on white cards
border-card-border    // Light gray border

// Dark cards (when needed)
bg-card-dark      // Dark background
text-on-dark      // White text on dark cards
```

### Text Colors
```tsx
text-primary      // Black text (on white backgrounds)
text-secondary    // Gray-600 equivalent
text-muted        // Gray-400 equivalent
text-on-dark      // White text (on dark backgrounds)
text-on-dark-muted // Gray text (on dark backgrounds)
```

### Interactive Elements
```tsx
text-link         // Link color
hover:text-link-hover  // Link hover state
bg-button-primary      // Button background
hover:bg-button-primary-hover  // Button hover
```

### Borders
```tsx
border-light      // Light borders (on white cards)
border-dark       // Dark borders (on black backgrounds)
border-divider    // Divider lines
```

## 📝 Typography

### Font Families
```tsx
font-HindMadurai     // Primary headings
font-playfair        // Secondary headings, elegant text
font-InstrumentSerif // Accent text, italics
font-inter           // Body text, UI elements
```

### Usage Examples
```tsx
// Page title
<h1 className="font-playfair text-4xl md:text-6xl">
  Our <span className="font-InstrumentSerif italic">Services</span>
</h1>

// Card title
<h3 className="font-HindMadurai text-xl font-bold">Title</h3>

// Body text
<p className="font-inter text-secondary">Description text</p>
```

## 🎯 Component Patterns

### White Card (Standard)
```tsx
<div className="bg-card rounded-3xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 hover:-translate-y-1">
  <img src="..." className="w-full h-48 object-cover" />
  <div className="p-6">
    <h3 className="font-HindMadurai text-xl font-bold text-primary">
      Card Title
    </h3>
    <p className="text-secondary">Description text</p>
  </div>
</div>
```

### Dark Card (Special Cases)
```tsx
<div className="bg-card-dark rounded-3xl border border-dark">
  <div className="p-6">
    <h3 className="font-HindMadurai text-xl font-bold text-on-dark">
      Card Title
    </h3>
    <p className="text-on-dark-muted">Description text</p>
  </div>
</div>
```

### Button Styles
```tsx
// Primary button
<button className="bg-button-primary hover:bg-button-primary-hover 
                   text-white font-semibold px-6 py-3 rounded-full
                   transition-all duration-300">
  Click Me
</button>

// Outline button
<button className="border-2 border-brand text-brand hover:bg-brand 
                   hover:text-white px-6 py-3 rounded-full
                   transition-all duration-300">
  Learn More
</button>
```

### Links
```tsx
<a href="..." className="text-link hover:text-link-hover 
                         transition-colors duration-300">
  Read more
</a>
```

## 🚫 What NOT to Do

### ❌ Avoid Hardcoded Colors
```tsx
// DON'T DO THIS
<div className="bg-white text-black">
<div className="bg-[#8caac8]">
<div style={{ color: '#666666' }}>

// DO THIS INSTEAD
<div className="bg-card text-primary">
<div className="bg-brand">
<div className="text-secondary">
```

### ❌ Avoid Inline Styles
```tsx
// DON'T DO THIS
<div style={{ backgroundColor: 'white', color: 'black' }}>

// DO THIS INSTEAD
<div className="bg-card text-primary">
```

### ❌ Avoid Mixed Font Usage
```tsx
// DON'T DO THIS
<h1 style={{ fontFamily: 'Arial' }}>Title</h1>

// DO THIS INSTEAD
<h1 className="font-HindMadurai">Title</h1>
```

## 📐 Spacing & Sizing

### Border Radius
```tsx
rounded-sm    // 0.5rem
rounded-md    // 1rem
rounded-lg    // 1.5rem
rounded-xl    // 2rem
rounded-3xl   // 1.5rem (cards)
rounded-full  // 9999px (buttons, badges)
```

### Shadows
```tsx
shadow-sm     // Subtle
shadow-md     // Default
shadow-lg     // Cards
shadow-xl     // Hover state
shadow-2xl    // Prominent hover
```

### Transitions
```tsx
transition-all duration-300  // Standard
transition-all duration-500  // Slow
transition-colors duration-300  // Color only
```

## 🔄 Migration Guide

When updating existing components:

1. **Replace hardcoded colors:**
   - `bg-white` → `bg-card`
   - `text-black` → `text-primary`
   - `text-gray-600` → `text-secondary`
   - `text-gray-400` → `text-muted`
   - `bg-[#8caac8]` → `bg-brand`

2. **Replace font classes:**
   - Ensure headings use `font-HindMadurai` or `font-playfair`
   - Body text uses `font-inter`
   - Accent text uses `font-InstrumentSerif italic`

3. **Remove inline styles:**
   - Convert all `style={{}}` to Tailwind classes
   - Use theme tokens instead of hex/rgb values

## 📋 Quick Reference

### Most Common Classes
```tsx
// White card on black background
bg-card text-primary border-light

// Dark card on black background  
bg-card-dark text-on-dark border-dark

// Text hierarchy
text-primary      // Main text
text-secondary    // Supporting text
text-muted        // De-emphasized text

// Interactive states
hover:bg-brand hover:text-white
hover:shadow-2xl hover:-translate-y-1

// Typography
font-HindMadurai font-bold
font-playfair font-extralight
font-InstrumentSerif italic
```

## 🎨 CSS Variables Reference

Access variables directly in CSS:
```css
.custom-element {
  background: hsl(var(--color-card-bg));
  color: hsl(var(--color-text-primary));
  border: 1px solid hsl(var(--color-border-light));
  font-family: var(--font-primary);
  transition: var(--transition-base);
}
```

## 📝 Notes

- All color values use HSL format for better manipulation
- Legacy tokens are maintained for backward compatibility
- Theme can be extended by adding new CSS variables in `index.css`
- Always test on both light cards and dark backgrounds
