import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "..";
import { ELocale, ETheme, IAppConfig } from "@/types";

const AppConfigInitState: IAppConfig = {
    theme: ETheme.Light,
    locale: ELocale.En
}

const appSlice = createSlice({
    name: "app",
    initialState: AppConfigInitState,
    reducers: {},
})

export const { } = appSlice.actions;
export const selectTheme = (state: RootState) => state.app.theme;

export default appSlice.reducer;