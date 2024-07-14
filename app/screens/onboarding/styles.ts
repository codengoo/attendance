import { IColorSet } from "@/constants/Colors";
import { FontFamily, FontSize } from "@/constants/Fonts";
import { Spacing } from "@/constants/Space";
import { StyleSheet } from "react-native";

export const style = (colors: IColorSet) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },

    section: {
        flex: 1
    },

    illustration: {
        backgroundColor: colors.secondary,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    description: {
        padding: Spacing.xl,
        paddingTop: Spacing.xl5
    },

    textTitle: {
        fontSize: FontSize.xl4,
        color: colors.text,
        textAlign: "center",
        fontFamily: FontFamily.semiBold
    },

    textDescription: {
        fontSize: FontSize.base,
        color: colors.textDescription,
        textAlign: "center",
        fontFamily: FontFamily.medium
    }
})