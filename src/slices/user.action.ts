import { createAsyncThunk } from '@reduxjs/toolkit';

export const registration = createAsyncThunk(
    'user/registration',
    async ({ email, password }: {email: string; password: string;}, { rejectWithValue } ) => {
        try {
            const response = await fetch(
                'http://localhost:5000/users/registration',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({ email, password })
                }
            );
            // console.log('response >>> ', response);

            /* if (!response.ok) {
                return rejectWithValue(await response.json());
            } */
            
            const data = await response.json();
            // console.log('result in user action >>> ', result);

            if (data.token) {
                localStorage.setItem("userData", JSON.stringify(data));
            }

            // { id, userEmail, message, token }
            return data;

        } catch (err: any) {
            console.error('Error in the user action >>> ', err);
            return rejectWithValue(err);
        }
    }
);

export const login = createAsyncThunk(
    'user/login',
    async ({ email, password }: { email: string; password: string; }, { rejectWithValue }) => {
        try {
            const response = await fetch(
                'http://localhost:5000/users/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({ email, password })
                }
            );

            const data = await response.json();
            console.log('data in user login action >>> ', data);

            if (data.token) {
                localStorage.setItem("userData", JSON.stringify(data));
            }

            return data;
        } catch (err: any) {
            return rejectWithValue(err);
        }
    }
);





