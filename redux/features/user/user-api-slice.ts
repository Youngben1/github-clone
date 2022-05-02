import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const  user = createApi({
    reducerPath: "userData",
    baseQuery: fetchBaseQuery({
         baseUrl: "https://api.github.com" }),
         endpoints: (builder) => ({
             getUserByUsername: builder.query({
                 query: (username) =>`/user/${username}`,
             })
         })
})

export const { useGetUserByUsernameQuery } = user