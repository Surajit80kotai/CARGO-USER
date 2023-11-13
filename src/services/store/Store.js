import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";

export const Store = configureStore({
    reducer: {
        authSlice: AuthSlice
    }
});