import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { useSelector } from "react-redux"

let token = useSelector((state) => state.user.token)

export const  user = createApi({
    reducerPath: "userData",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com",
        prepareHeaders(headers) {
            headers.set("Authorization", `bearer ${token}`)
        } 
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () =>`/user`,
        })
    })
})

export const { useGetUserQuery } = user