import { createSlice } from '@reduxjs/toolkit';

import { registration, login } from './user.action';


type TInitialState = {
    userId: number | null;
    token: string | null;
    isLoading: boolean;
    isFailur: boolean;
    httpError: any;
    // success: boolean;
};

const name = 'user';
const initialState: TInitialState = createInitialState();

const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        logout: (state) => {
            state.userId = null;
            state.token = null;
            state.isLoading = false;
            state.isFailur = false;
            
            localStorage.removeItem('userData');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.isLoading = true;
                state.isFailur = false;
            })
            .addCase(registration.fulfilled, (state, action) => {
                // { id, userEmail, message, token }
                state.userId = action.payload.userId;
                state.token = action.payload.token;
                state.isLoading = false;
                state.isFailur = false;
            })
            .addCase(registration.rejected, (state, action) => {
                state.isLoading = false;
                state.isFailur = true;
                state.httpError = action.error;
                // Можно передать сообщение ошибки
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isFailur = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                // { id, userEmail, message, token }
                state.userId = action.payload.userId;
                state.token = action.payload.token;
                state.isLoading = false;
                state.isFailur = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isFailur = true;
                state.httpError = action.error;
                // Можно передать сообщение ошибки
            })
    }
});

function createInitialState() {
    const userData = localStorage.getItem('userData');

    const { token, userId } = userData ? JSON.parse(userData) : { token: null, userId: null };
    
    return {
        userId,
        token,
        isLoading: false,
        isFailur: false,
        httpError: null
    };
}

export const { logout } = userSlice.actions;

export default userSlice.reducer;



