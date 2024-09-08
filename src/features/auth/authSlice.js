import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: !!localStorage.getItem("authToken"),
    token: localStorage.getItem("authToken") || null,
    role: JSON.parse(localStorage.getItem("authToken"))?.role || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            const user = action.payload.user;
            const token = action.payload.token;
            const role = JSON.parse(token).role;
            localStorage.setItem("authToken", token)
            localStorage.setItem("user", user)
            return {
                ...state,
                isAuthenticated: true,
                token,
                role,
                user: JSON.parse(user),
            }
        },

        logout: (state) => {
            localStorage.removeItem("authToken")
            localStorage.removeItem("user")
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                role: null,
                user: null,
            }
        },

        setUser: (state, action) => {
            const user = action.payload
            localStorage.setItem("user", user);
            return {
                ...state,
                user,
            }
        }
    },
})

export const { login, logout, setUser } = authSlice.actions
export default authSlice.reducer;