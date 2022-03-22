import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export type AuthState = {
  loggedIn: boolean;
};

const initialState: AuthState = {
    loggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: (state) => {
            state.loggedIn = true;
        },
        authLogout: (state) => {
            state.loggedIn = false;
        },
    },
});

export const {
    authLogin,
    authLogout,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.loggedIn;

export default authSlice.reducer;
