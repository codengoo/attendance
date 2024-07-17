import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "..";

interface ISession {
    login: boolean
}

const SessionInitState: ISession = {
    login: false
}

const sessionSlice = createSlice({
    name: "session",
    initialState: SessionInitState,
    reducers: {}
})

export const { } = sessionSlice.actions;

export default sessionSlice.reducer;