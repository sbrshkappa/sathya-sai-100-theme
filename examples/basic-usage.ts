// Basic usage example for the Sathya Sai 100 Theme
import { 
  theme, 
  colorCombinations, 
  componentColors, 
  textColors, 
  spacing, 
  borderRadius, 
  shadows,
  getColor,
  getSpacing,
  generateCSSVariables,
  generateComponentCSS
} from '@sathya-sai-100/theme';

// Example 1: Using colors directly
console.log('Primary color:', theme.primary[500]); // '#f97316'
console.log('Secondary color:', theme.secondary[500]); // '#ec4899'
console.log('Accent color:', theme.accent[500]); // '#f59e0b'

// Example 2: Using utility functions
console.log('Primary color 600:', getColor('primary', '600')); // '#ea580c'
console.log('Spacing 4:', getSpacing('4')); // '16px'

// Example 3: Using gradients
console.log('Primary gradient:', colorCombinations.primaryGradient);
// 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)'

// Example 4: Component colors
console.log('Primary button background:', componentColors.button.primary.bg); // '#f97316'
console.log('Card background:', componentColors.card.bg); // 'white'

// Example 5: Text colors
console.log('Primary text color:', textColors.primary); // '#171717'
console.log('Link color:', textColors.link); // '#ea580c'

// Example 6: Spacing and layout
console.log('Small spacing:', spacing[2]); // '8px'
console.log('Large spacing:', spacing[16]); // '64px'

// Example 7: Border radius
console.log('Medium border radius:', borderRadius.md); // '8px'
console.log('Full border radius:', borderRadius.full); // '9999px'

// Example 8: Shadows
console.log('Medium shadow:', shadows.md);
// '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'

// Example 9: Generate CSS variables
const cssVariables = generateCSSVariables();
console.log('CSS Variables:', cssVariables);

// Example 10: Generate component CSS
const componentCSS = generateComponentCSS();
console.log('Component CSS:', componentCSS);

// Example 11: React component usage
const ReactComponentExample = () => {
  return {
    container: {
      background: colorCombinations.backgroundGradient,
      padding: spacing[6],
      borderRadius: borderRadius.lg,
      boxShadow: shadows.md,
    },
    title: {
      color: textColors.primary,
      fontSize: '24px',
      fontWeight: 'bold',
    },
    button: {
      background: componentColors.button.primary.bg,
      color: componentColors.button.primary.text,
      padding: `${spacing[3]} ${spacing[6]}`,
      borderRadius: borderRadius.md,
      border: 'none',
      cursor: 'pointer',
    },
  };
};

// Example 12: CSS-in-JS usage
const styledComponentExample = {
  wrapper: {
    background: theme.neutral[50],
    padding: spacing[4],
    border: `1px solid ${theme.neutral[200]}`,
    borderRadius: borderRadius.md,
  },
  heading: {
    color: theme.primary[600],
    marginBottom: spacing[4],
  },
  content: {
    color: textColors.secondary,
    lineHeight: 1.6,
  },
};

export {
  ReactComponentExample,
  styledComponentExample,
}; 