import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { apiHeaderConfig, logInAPI, logoutAPI, registerAPI, routineAPI } from "../../config";


export const logInThunk = createAsyncThunk(
    "user/logIn",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(logInAPI, { email, password }, apiHeaderConfig, { withCredentials: true })
            console.log('data :>> ', data);
            return data.user
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)
export const registerThunk = createAsyncThunk(
    'user/register',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(registerAPI, { name, email, password }, apiHeaderConfig)
            console.log('data.user :>> ', data.user);
            return data.user
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)
export const logOutThunk = createAsyncThunk(
    'user/logOut',
    async ({ }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(logoutAPI, { withCredentials: true })
            console.log('hi Harxh!!!', data);
            return data
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)
export const routineThunk = createAsyncThunk(
    'user/routine',
    async ({ }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(routineAPI, { withCredentials: true })
            console.log('user :>> ', data.user);
            return data.user
        }
        catch (err) {
            console.log('err :>> ', err);
            return rejectWithValue(err.response.data.message)
        }
    }
)
