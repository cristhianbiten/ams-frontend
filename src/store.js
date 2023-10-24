import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import noteReducer from "./slices/noteSlice";
import historyReducer from "./slices/historySlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        note: noteReducer,
        history: historyReducer,
    },
});