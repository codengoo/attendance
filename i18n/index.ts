import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import * as locales from "./locales";

export enum ELocales {
    Vi = "vi",
    En = "en"
}

const resources = Object.entries(locales).reduce(
    (acc, [key, value]) => ({
        ...acc,
        [key]: value,
    }),
    {},
);

i18n
    .use(initReactI18next)
    .init
    ({
        compatibilityJSON: "v3",
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })