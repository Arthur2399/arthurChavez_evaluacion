import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        users: [],
        errorMessage: null,
    },
    reducers: {
        onIsloadingUsers: (state) => {
            state.isLoading = true;
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
    onSendErrorMessageUsers,
} = userSlice.actions;