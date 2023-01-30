import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from 'axios';
import { apiHeaderConfig, logInAPI } from "../../config";


export const logInThunk = createAsyncThunk(
    "user/logIn",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(logInAPI, { email, password }, apiHeaderConfig)
            console.log('hi Harxh!!!', data);
            return data.user
        }
        catch (err) {
            rejectWithValue(err.response.data.message)
        }
    }
)

