export enum ETheme {
    Light = "light",
    Dark = "dark",
    Auto = "auto"
}

export enum ELocale {
    Vi = "vi",
    En = "en"
}

export interface IAppConfig {
    theme: ETheme,
    locale: ELocale
}