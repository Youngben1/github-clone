import { configureStore } from "@reduxjs/toolkit"
import { user } from "../redux/features/user/user-api-slice"
import userReducer from "../redux/features/user/user-slice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        [user.reducerPath] : user.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(user.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch