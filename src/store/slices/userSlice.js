import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        search:null,
        users: [],
        errorMessage: null,
    },
    reducers: {
        onIsloadingUsers: (state) => {
            state.isLoading = true;
        },
        onSearchUsers: (state, { payload }) => {
            state.isLoading = false;
            state.search = payload
        },
        onLoadUsers: (state, { payload = [] }) => {
            state.isLoading = false;
            state.users = payload
        },
        onSendErrorMessageUsers: (state, { payload }) => {
            state.isLoading = false;
            state.errorMessage = payload;
        },
    }
})

export const {
    onIsloadingUsers,
    onLoadUsers,
    onSearchUsers,
    onSendErrorMessageUsers,
} = userSlice.actions;