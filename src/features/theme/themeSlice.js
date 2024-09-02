import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem("theme") || "light";

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            localStorage.setItem("theme", action.payload)
            return action.payload
        },
    },
});

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer;