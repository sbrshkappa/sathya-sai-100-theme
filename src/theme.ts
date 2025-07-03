// Sathya Sai 100 Theme
// Based on the logo color analysis and design system

export const theme = {
  // Primary Brand Colors (from logo)
  primary: {
    50: '#fff7ed',   // Very light orange
    100: '#ffedd5',  // Light orange
    200: '#fed7aa',  // Soft orange
    300: '#fdba74',  // Medium orange
    400: '#fb923c',  // Orange
    500: '#f97316',  // Primary orange (#f06020 adjusted)
    600: '#ea580c',  // Dark orange
    700: '#c2410c',  // Deep orange
    800: '#9a3412',  // Very dark orange
    900: '#7c2d12',  // Darkest orange
  },

  // Secondary Colors (pink/magenta from logo)
  secondary: {
    50: '#fdf2f8',   // Very light pink
    100: '#fce7f3',  // Light pink
    200: '#fbcfe8',  // Soft pink
    300: '#f9a8d4',  // Medium pink
    400: '#f472b6',  // Pink
    500: '#ec4899',  // Primary pink (#f030f0 adjusted)
    600: '#db2777',  // Dark pink
    700: '#be185d',  // Deep pink
    800: '#9d174d',  // Very dark pink
    900: '#831843',  // Darkest pink
  },

  // Accent Colors (yellow from logo)
  accent: {
    50: '#fefce8',   // Very light yellow
    100: '#fef3c7',  // Light yellow
    200: '#fde68a',  // Soft yellow
    300: '#fcd34d',  // Medium yellow
    400: '#fbbf24',  // Yellow
    500: '#f59e0b',  // Primary yellow (#f0f050 adjusted)
    600: '#d97706',  // Dark yellow
    700: '#b45309',  // Deep yellow
    800: '#92400e',  // Very dark yellow
    900: '#78350f',  // Darkest yellow
  },

  // Blue Family (from logo)
  blue: {
    50: '#eff6ff',   // Very light blue
    100: '#dbeafe',  // Light blue
    200: '#bfdbfe',  // Soft blue
    300: '#93c5fd',  // Medium blue
    400: '#60a5fa',  // Blue
    500: '#3b82f6',  // Primary blue (#0000f0 adjusted)
    600: '#2563eb',  // Dark blue
    700: '#1d4ed8',  // Deep blue
    800: '#1e40af',  // Very dark blue
    900: '#1e3a8a',  // Darkest blue
  },

  // Purple/Indigo Family (from logo)
  purple: {
    50: '#faf5ff',   // Very light purple
    100: '#f3e8ff',  // Light purple
    200: '#e9d5ff',  // Soft purple
    300: '#d8b4fe',  // Medium purple
    400: '#c084fc',  // Purple
    500: '#a855f7',  // Primary purple (#6020c0 adjusted)
    600: '#9333ea',  // Dark purple
    700: '#7c3aed',  // Deep purple
    800: '#6b21a8',  // Very dark purple
    900: '#581c87',  // Darkest purple
  },

  // Green Family (from logo)
  green: {
    50: '#f0fdf4',   // Very light green
    100: '#dcfce7',  // Light green
    200: '#bbf7d0',  // Soft green
    300: '#86efac',  // Medium green
    400: '#4ade80',  // Green
    500: '#22c55e',  // Primary green (#00f000 adjusted)
    600: '#16a34a',  // Dark green
    700: '#15803d',  // Deep green
    800: '#166534',  // Very dark green
    900: '#14532d',  // Darkest green
  },

  // Neutral Colors
  neutral: {
    50: '#fafafa',   // Very light gray
    100: '#f5f5f5',  // Light gray
    200: '#e5e5e5',  // Soft gray
    300: '#d4d4d4',  // Medium gray
    400: '#a3a3a3',  // Gray
    500: '#737373',  // Primary gray
    600: '#525252',  // Dark gray
    700: '#404040',  // Deep gray
    800: '#262626',  // Very dark gray
    900: '#171717',  // Darkest gray
  },

  // Semantic Colors
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
  },

  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
  },

  error: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
  },

  info: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
  },
};

// Color combinations for different UI elements
export const colorCombinations = {
  // Primary gradient (orange to pink)
  primaryGradient: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
  
  // Secondary gradient (yellow to orange)
  secondaryGradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
  
  // Accent gradient (blue to purple)
  accentGradient: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
  
  // Success gradient (green)
  successGradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
  
  // Background gradients
  backgroundGradient: 'linear-gradient(135deg, #fefce8 0%, #fdf2f8 50%, #eff6ff 100%)',
  
  // Card gradients
  cardGradient: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
};

// Component-specific color schemes
export const componentColors = {
  // Buttons
  button: {
    primary: {
      bg: theme.primary[500],
      hover: theme.primary[600],
      text: 'white',
    },
    secondary: {
      bg: theme.secondary[500],
      hover: theme.secondary[600],
      text: 'white',
    },
    accent: {
      bg: theme.accent[500],
      hover: theme.accent[600],
      text: 'white',
    },
    outline: {
      bg: 'transparent',
      border: theme.primary[500],
      text: theme.primary[500],
      hover: theme.primary[50],
    },
  },

  // Cards
  card: {
    bg: 'white',
    border: theme.neutral[200],
    shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },

  // Inputs
  input: {
    bg: 'white',
    border: theme.neutral[300],
    focus: theme.primary[500],
    placeholder: theme.neutral[400],
  },

  // Progress indicators
  progress: {
    track: theme.neutral[200],
    fill: theme.primary[500],
    success: theme.success[500],
    warning: theme.warning[500],
    error: theme.error[500],
  },
};

// Typography colors
export const textColors = {
  primary: theme.neutral[900],
  secondary: theme.neutral[600],
  tertiary: theme.neutral[400],
  inverse: 'white',
  link: theme.primary[600],
  success: theme.success[600],
  warning: theme.warning[600],
  error: theme.error[600],
};

// Spacing scale
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
};

// Border radius
export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export default theme; 