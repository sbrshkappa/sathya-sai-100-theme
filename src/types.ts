// Type definitions for the Sathya Sai 100 Theme

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface SemanticColors {
  50: string;
  500: string;
  600: string;
}

export interface Theme {
  primary: ColorScale;
  secondary: ColorScale;
  accent: ColorScale;
  blue: ColorScale;
  purple: ColorScale;
  green: ColorScale;
  neutral: ColorScale;
  success: SemanticColors;
  warning: SemanticColors;
  error: SemanticColors;
  info: SemanticColors;
}

export interface ColorCombinations {
  primaryGradient: string;
  secondaryGradient: string;
  accentGradient: string;
  successGradient: string;
  backgroundGradient: string;
  cardGradient: string;
}

export interface ButtonColors {
  bg: string;
  hover: string;
  text: string;
}

export interface OutlineButtonColors extends ButtonColors {
  border: string;
}

export interface ComponentColors {
  button: {
    primary: ButtonColors;
    secondary: ButtonColors;
    accent: ButtonColors;
    outline: OutlineButtonColors;
  };
  card: {
    bg: string;
    border: string;
    shadow: string;
  };
  input: {
    bg: string;
    border: string;
    focus: string;
    placeholder: string;
  };
  progress: {
    track: string;
    fill: string;
    success: string;
    warning: string;
    error: string;
  };
}

export interface TextColors {
  primary: string;
  secondary: string;
  tertiary: string;
  inverse: string;
  link: string;
  success: string;
  warning: string;
  error: string;
}

export interface Spacing {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
}

export interface BorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface Shadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

// Utility types for theme usage
export type ColorKey = keyof Theme;
export type ColorShade = keyof ColorScale;
export type SpacingKey = keyof Spacing;
export type BorderRadiusKey = keyof BorderRadius;
export type ShadowKey = keyof Shadows; 