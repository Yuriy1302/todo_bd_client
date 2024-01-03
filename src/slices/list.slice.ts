import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAllLists, getListDataById } from './list.action';

export type TList = {
    listId: string | null;
    title: string | null;
    tasks?: any;
};

/* export type TTodo = {
    id: string | null;
    text: string | null;
    done: boolean;
}; */

/* export type TTodoState = {
    todos: TTodo[];
}; */

type TInitialState = {
    isLoading: boolean;
    isFailure: boolean;
    lists: TList[];
    currentList: TList | null;
};

const initialState: TInitialState = {
    isLoading: false,
    isFailure: false,
    lists: [],
    currentList: null
};

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllLists.pending, (state) => {
            state.isLoading = true;
            state.isFailure = false;
        })
        .addCase(getAllLists.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isFailure = false;
            state.lists = action.payload.lists;
        })
        .addCase(getAllLists.rejected, (state, action) => {
            state.isLoading = false;
            state.isFailure = true;
        })

        .addCase(getListDataById.pending, (state) => {
            state.isLoading = true;
            state.isFailure = false;
        })
        .addCase(getListDataById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isFailure = false;
            state.currentList = action.payload;
        })
        .addCase(getListDataById.rejected, (state, action) => {
            state.isLoading = false;
            state.isFailure = true;
        })
    }
});

export default listSlice.reducer;






