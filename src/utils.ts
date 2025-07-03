// Utility functions for the Sathya Sai 100 Theme
import { theme, colorCombinations, componentColors, textColors, spacing, borderRadius, shadows } from './theme';
import type { ColorKey, ColorShade, SpacingKey, BorderRadiusKey, ShadowKey } from './types';

/**
 * Get a color from the theme by key and shade
 */
export function getColor(colorKey: ColorKey, shade: ColorShade = '500' as ColorShade): string {
  const colorScale = theme[colorKey];
  if (!colorScale) {
    throw new Error(`Color key "${colorKey}" not found in theme`);
  }
  
  if ('500' in colorScale) {
    const color = (colorScale as any)[shade];
    if (!color) {
      throw new Error(`Shade "${shade}" not found for color "${colorKey}"`);
    }
    return color;
  }
  
  throw new Error(`Invalid color scale for "${colorKey}"`);
}

/**
 * Get a spacing value from the theme
 */
export function getSpacing(spacingKey: SpacingKey): string {
  const value = spacing[spacingKey];
  if (!value) {
    throw new Error(`Spacing key "${spacingKey}" not found in theme`);
  }
  return value;
}

/**
 * Get a border radius value from the theme
 */
export function getBorderRadius(radiusKey: BorderRadiusKey): string {
  const value = borderRadius[radiusKey];
  if (!value) {
    throw new Error(`Border radius key "${radiusKey}" not found in theme`);
  }
  return value;
}

/**
 * Get a shadow value from the theme
 */
export function getShadow(shadowKey: ShadowKey): string {
  const value = shadows[shadowKey];
  if (!value) {
    throw new Error(`Shadow key "${shadowKey}" not found in theme`);
  }
  return value;
}

/**
 * Generate CSS custom properties for the entire theme
 */
export function generateCSSVariables(): string {
  const variables: string[] = [];
  
  // Color variables
  Object.entries(theme).forEach(([colorKey, colorScale]) => {
    if (typeof colorScale === 'object' && colorScale !== null) {
      Object.entries(colorScale).forEach(([shade, value]) => {
        variables.push(`--color-${colorKey}-${shade}: ${value};`);
      });
    }
  });
  
  // Spacing variables
  Object.entries(spacing).forEach(([key, value]) => {
    variables.push(`--spacing-${key}: ${value};`);
  });
  
  // Border radius variables
  Object.entries(borderRadius).forEach(([key, value]) => {
    variables.push(`--radius-${key}: ${value};`);
  });
  
  // Shadow variables
  Object.entries(shadows).forEach(([key, value]) => {
    variables.push(`--shadow-${key}: ${value};`);
  });
  
  return `:root {\n  ${variables.join('\n  ')}\n}`;
}

/**
 * Generate CSS for component styles
 */
export function generateComponentCSS(): string {
  const styles: string[] = [];
  
  // Button styles
  Object.entries(componentColors.button).forEach(([variant, colors]) => {
    const className = `.btn-${variant}`;
    const style = `
${className} {
  background-color: ${colors.bg};
  color: ${colors.text};
  border: ${variant === 'outline' ? `1px solid ${(colors as any).border}` : 'none'};
  transition: all 0.2s ease-in-out;
}

${className}:hover {
  background-color: ${colors.hover};
  ${variant === 'outline' ? `background-color: ${colors.hover};` : ''}
}`;
    styles.push(style);
  });
  
  // Card styles
  styles.push(`
.card {
  background-color: ${componentColors.card.bg};
  border: 1px solid ${componentColors.card.border};
  box-shadow: ${componentColors.card.shadow};
  border-radius: ${getBorderRadius('md')};
}`);

  // Input styles
  styles.push(`
.input {
  background-color: ${componentColors.input.bg};
  border: 1px solid ${componentColors.input.border};
  border-radius: ${getBorderRadius('md')};
  padding: ${getSpacing('3' as SpacingKey)} ${getSpacing('4' as SpacingKey)};
  transition: border-color 0.2s ease-in-out;
}

.input:focus {
  outline: none;
  border-color: ${componentColors.input.focus};
  box-shadow: 0 0 0 3px ${componentColors.input.focus}20;
}

.input::placeholder {
  color: ${componentColors.input.placeholder};
}`);

  return styles.join('\n\n');
}

/**
 * Convert theme object to CSS-in-JS format
 */
export function themeToCSSInJS() {
  return {
    colors: theme,
    gradients: colorCombinations,
    spacing,
    borderRadius,
    shadows,
    textColors,
    componentColors,
  };
}

/**
 * Create a theme variant (e.g., dark mode)
 */
export function createThemeVariant(baseTheme: typeof theme, overrides: Partial<typeof theme>) {
  return {
    ...baseTheme,
    ...overrides,
  };
}

/**
 * Validate color values
 */
export function isValidColor(color: string): boolean {
  const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$|^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/;
  return colorRegex.test(color);
}

/**
 * Generate a color palette from a base color
 */
export function generateColorPalette(baseColor: string): Record<string, string> {
  // This is a simplified implementation
  // In a real scenario, you'd want to use a color manipulation library
  return {
    50: baseColor + '0A', // 4% opacity
    100: baseColor + '1A', // 6% opacity
    200: baseColor + '33', // 20% opacity
    300: baseColor + '4D', // 30% opacity
    400: baseColor + '66', // 40% opacity
    500: baseColor,
    600: baseColor + 'CC', // 80% opacity
    700: baseColor + 'E6', // 90% opacity
    800: baseColor + 'F2', // 95% opacity
    900: baseColor + 'FA', // 98% opacity
  };
} 