import { EThemeBase } from "@/hooks/useTheme";

type HexColor = `#${string}`;
export interface IColorSet {
  primary: HexColor,
  secondary: HexColor,
  text: HexColor,
  textDescription: HexColor
}

type RColor = Record<EThemeBase, IColorSet>

export const Colors: RColor = {
  dark: {
    primary: "#FFF9F1",
    secondary: "#F5B669",
    text: "#2E2D2D",
    textDescription: "#747474"
  },

  light: {
    primary: "#FFF9F1",
    secondary: "#F5B669",
    text: "#2E2D2D",
    textDescription: "#747474"
  }
};
