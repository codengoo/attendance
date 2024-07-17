import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./slices/app.slice";
import sessionReducer from "./slices/session.slice";
const store = configureStore({
  reducer: {
    app: appReducer,
    session: sessionReducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store;
export * from "./slices"