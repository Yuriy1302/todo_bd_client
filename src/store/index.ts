import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/user.slice';
import listReducer from '../slices/list.slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        list: listReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



