# Sathya Sai 100 Theme

A comprehensive theme package for Sathya Sai 100 applications with color palettes, gradients, and component styles.

## Features

- 🎨 Complete color palette with 10 shades per color
- 🌈 Pre-built gradients for various UI elements
- 🧩 Component-specific color schemes
- 📏 Consistent spacing and typography scales
- 🎯 TypeScript support with full type definitions
- 🛠️ Utility functions for theme manipulation
- 📦 Easy to install and use

## Installation

```bash
npm install @sathya-sai-100/theme
```

Or if you're using yarn:

```bash
yarn add @sathya-sai-100/theme
```

## Usage

### Basic Usage

```typescript
import { theme, getColor, getSpacing } from '@sathya-sai-100/theme';

// Use colors directly
const primaryColor = theme.primary[500]; // '#f97316'

// Use utility functions
const accentColor = getColor('accent', '600'); // '#d97706'
const spacing = getSpacing('4'); // '16px'
```

### CSS Variables

Generate CSS custom properties for use in your stylesheets:

```typescript
import { generateCSSVariables } from '@sathya-sai-100/theme';

const cssVariables = generateCSSVariables();
// Inject this into your CSS
```

### Component Styles

Generate CSS for common components:

```typescript
import { generateComponentCSS } from '@sathya-sai-100/theme';

const componentCSS = generateComponentCSS();
// Use this CSS in your application
```

### React/Next.js Integration

```typescript
import { theme, colorCombinations } from '@sathya-sai-100/theme';

const MyComponent = () => {
  return (
    <div style={{ 
      background: colorCombinations.primaryGradient,
      color: theme.neutral[900]
    }}>
      Hello World
    </div>
  );
};
```

## Color Palette

### Primary Colors (Orange)
- 50: `#fff7ed` - Very light orange
- 100: `#ffedd5` - Light orange
- 200: `#fed7aa` - Soft orange
- 300: `#fdba74` - Medium orange
- 400: `#fb923c` - Orange
- 500: `#f97316` - Primary orange
- 600: `#ea580c` - Dark orange
- 700: `#c2410c` - Deep orange
- 800: `#9a3412` - Very dark orange
- 900: `#7c2d12` - Darkest orange

### Secondary Colors (Pink)
- 50: `#fdf2f8` - Very light pink
- 100: `#fce7f3` - Light pink
- 200: `#fbcfe8` - Soft pink
- 300: `#f9a8d4` - Medium pink
- 400: `#f472b6` - Pink
- 500: `#ec4899` - Primary pink
- 600: `#db2777` - Dark pink
- 700: `#be185d` - Deep pink
- 800: `#9d174d` - Very dark pink
- 900: `#831843` - Darkest pink

### Accent Colors (Yellow)
- 50: `#fefce8` - Very light yellow
- 100: `#fef3c7` - Light yellow
- 200: `#fde68a` - Soft yellow
- 300: `#fcd34d` - Medium yellow
- 400: `#fbbf24` - Yellow
- 500: `#f59e0b` - Primary yellow
- 600: `#d97706` - Dark yellow
- 700: `#b45309` - Deep yellow
- 800: `#92400e` - Very dark yellow
- 900: `#78350f` - Darkest yellow

## Gradients

```typescript
import { colorCombinations } from '@sathya-sai-100/theme';

// Available gradients
colorCombinations.primaryGradient    // Orange to pink
colorCombinations.secondaryGradient  // Yellow to orange
colorCombinations.accentGradient     // Blue to purple
colorCombinations.successGradient    // Green gradient
colorCombinations.backgroundGradient // Multi-color background
colorCombinations.cardGradient       // Card background
```

## Spacing Scale

```typescript
import { spacing } from '@sathya-sai-100/theme';

// Available spacing values
spacing[0]   // '0px'
spacing[1]   // '4px'
spacing[2]   // '8px'
spacing[3]   // '12px'
spacing[4]   // '16px'
spacing[5]   // '20px'
spacing[6]   // '24px'
spacing[8]   // '32px'
spacing[10]  // '40px'
spacing[12]  // '48px'
spacing[16]  // '64px'
spacing[20]  // '80px'
spacing[24]  // '96px'
spacing[32]  // '128px'
```

## Border Radius

```typescript
import { borderRadius } from '@sathya-sai-100/theme';

// Available border radius values
borderRadius.none   // '0px'
borderRadius.sm     // '4px'
borderRadius.md     // '8px'
borderRadius.lg     // '12px'
borderRadius.xl     // '16px'
borderRadius['2xl'] // '24px'
borderRadius.full   // '9999px'
```

## Shadows

```typescript
import { shadows } from '@sathya-sai-100/theme';

// Available shadow values
shadows.sm  // Small shadow
shadows.md  // Medium shadow
shadows.lg  // Large shadow
shadows.xl  // Extra large shadow
```

## API Reference

### Theme Object
- `theme.primary` - Primary color scale
- `theme.secondary` - Secondary color scale
- `theme.accent` - Accent color scale
- `theme.blue` - Blue color scale
- `theme.purple` - Purple color scale
- `theme.green` - Green color scale
- `theme.neutral` - Neutral color scale
- `theme.success` - Success colors
- `theme.warning` - Warning colors
- `theme.error` - Error colors
- `theme.info` - Info colors

### Utility Functions
- `getColor(colorKey, shade)` - Get a specific color
- `getSpacing(spacingKey)` - Get a spacing value
- `getBorderRadius(radiusKey)` - Get a border radius value
- `getShadow(shadowKey)` - Get a shadow value
- `generateCSSVariables()` - Generate CSS custom properties
- `generateComponentCSS()` - Generate component styles
- `themeToCSSInJS()` - Convert theme to CSS-in-JS format
- `createThemeVariant(baseTheme, overrides)` - Create theme variants
- `isValidColor(color)` - Validate color values
- `generateColorPalette(baseColor)` - Generate color palette from base color

## Development

### Building the Package

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Publishing

```bash
npm publish
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support and questions, please open an issue on GitHub. 