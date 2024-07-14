import { PixelRatio } from "react-native"

export const FontScale = PixelRatio.getFontScale();

export const FontSize = {
    xs: 12 * FontScale,
    sm: 14 * FontScale,
    base: 16 * FontScale,
    lg: 18 * FontScale,
    xl: 20 * FontScale,
    xl2: 24 * FontScale,
    xl3: 30 * FontScale,
    xl4: 36 * FontScale,
    xl5: 48 * FontScale,
    xl6: 60 * FontScale,
    xl7: 72 * FontScale,
    xl8: 96 * FontScale,
    xl9: 128 * FontScale,
}

export const FontFamily = {
    thin: 'Poppins_100Thin',
    thinItalic: 'Poppins_100Thin_Italic',
    extraLight: 'Poppins_200ExtraLight',
    extraLightItalic: 'Poppins_200ExtraLight_Italic',
    light: 'Poppins_300Light',
    lightItalic: 'Poppins_300Light_Italic',
    regular: 'Poppins_400Regular',
    italic: 'Poppins_400Regular_Italic',
    medium: 'Poppins_500Medium',
    mediumItalic: 'Poppins_500Medium_Italic',
    semiBold: 'Poppins_600SemiBold',
    semiBoldItalic: 'Poppins_600SemiBold_Italic',
    bold: 'Poppins_700Bold',
    boldItalic: 'Poppins_700Bold_Italic',
    extraBold: 'Poppins_800ExtraBold',
    extraBoldItalic: 'Poppins_800ExtraBold_Italic',
    black: 'Poppins_900Black',
    blackItalic: 'Poppins_900Black_Italic',
}