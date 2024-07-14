import { Image, Text, View } from "react-native";
import { style } from "./styles";
import { useTheme } from "@/hooks/useTheme";
import { getLocales } from "expo-localization"
import "@/i18n"
export default function Onboarding() {
    // const calendar = getLocales();
    // console.log(calendar);

    const { themeColors } = useTheme()
    const styles = style(themeColors);

    return (
        <View style={styles.container}>
            <View style={[styles.section, styles.illustration]}>
                <Image source={require('@/assets/images/onboarding_1.png')} />
            </View>

            <View style={[styles.section, styles.description]}>
                <Text style={styles.textTitle}>Attendance</Text>
                <Text style={styles.textDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </Text>
            </View>
        </View>
    )
}