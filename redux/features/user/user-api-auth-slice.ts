import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GITHUB_ID, GITHUB_SECRET } from "../../../config"
import { useDispatch } from "react-redux"
import { saveToken } from "./user-slice"

interface TokenResponse {
    access_token: string
    scope: string
    token_type: string
}

interface AuthCode {
    code: string
}

export const user = createApi({
    reducerPath: "userData",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://github.com",
        prepareHeaders(headers) {
            headers.set("ContentType" , "application.json")
            return headers
        }
    }),
    endpoints: (builder) =>({
        getToken: builder.mutation<TokenResponse, AuthCode>({
            query: (code) =>{
                return {
                    url: `/login/oauth/access_token`,
                    method: "POST",
                    body: {
                        client_id: GITHUB_ID,
                        client_secret: GITHUB_SECRET,
                        ...code,
                    }
                }
            }
        })
    })
})

export const { useGetTokenMutation } = user