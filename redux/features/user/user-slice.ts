import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        token: null,
    },
    reducers: {
        saveToken(state, action) {
            state.token = action.payload
        }
    }
})

export const { saveToken } = userSlice.actions

export default userSlice.reducer