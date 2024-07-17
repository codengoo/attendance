import { Colors } from "@/constants/Colors"
import { useEffect, useState } from "react"
import { Appearance } from "react-native";
import { useAppSelector } from "./useAppSelector";
import { selectTheme } from "@/store";

export enum EThemeBase {
  Dark = "dark",
  Light = "light"
}

export enum EThemeExtend {
  Auto = "auto",
}

export type ETheme = EThemeBase | EThemeExtend

export function useTheme(customTheme: ETheme = EThemeBase.Light) {
  const deviceTheme = Appearance.getColorScheme();
  const remoteTheme = useAppSelector(selectTheme);
  console.log(remoteTheme);
  
  const [theme, setTheme] = useState<ETheme>(customTheme);
  const [baseTheme, setBaseTheme] = useState<EThemeBase>(EThemeBase.Light);

  useEffect(() => {
    if (theme === EThemeExtend.Auto) {
      switch (deviceTheme) {
        case "dark":
          setBaseTheme(EThemeBase.Dark);
          break;
        case "light":
          setBaseTheme(EThemeBase.Light);
          break;
        default:
          console.warn("Unsupported device theme", deviceTheme);
          setBaseTheme(EThemeBase.Light);
          break;
      }
    }
  }, [theme])

  return {
    baseTheme,
    theme,
    setTheme,
    themeColors: Colors[EThemeBase.Light]
  }
};