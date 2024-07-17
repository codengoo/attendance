import { IAppConfig } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const { EXPO_PUBLIC_API_URL } = process.env;

export const appApi = createApi({
    reducerPath: "appAPI",
    baseQuery: fetchBaseQuery({ baseUrl: EXPO_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getAppConfig: builder.query<IAppConfig, void>({
            query: () => ({
                url: "/"
            })
        })
    })
})

export const { useGetAppConfigQuery } = appApi