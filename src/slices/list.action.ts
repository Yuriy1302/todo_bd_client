import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllLists = createAsyncThunk(
    'list/getAllLists',
    async (token: string, { rejectWithValue } ) => {
        try {
            const response = await fetch(
                'http://localhost:5000/lists/',
                {
                    method: 'GET',
                    headers: {
                        // 'Content-Type': 'application/json; charset=utf-8'
                        Authorization: `Bearer ${ token }`
                    }
                }
            );
            // console.log('response lists >>> ', response);

            /* if (!response.ok) {
                return rejectWithValue(await response.json());
            } */
            
            const data = await response.json();
            console.log('data in get list action >>> ', data.lists);

            // { id, userEmail, message, token }
            return data;

        } catch (err: any) {
            console.error('Error in the get lists action >>> ', err);
            return rejectWithValue(err);
        }
    }
);

export const getListDataById = createAsyncThunk(
    'list/getListDataById',
    async ({token, listId}: {token: string, listId: string}, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `http://localhost:5000/lists/${listId}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${ token }`
                    }
                }
            );

            const data = await response.json();

            console.log('data by list id ==>> ', data);

            return data;
        } catch (err: any) {
            console.error('Error in the get list by id action >>> ', err);
            return rejectWithValue(err);
        }
    }
)





