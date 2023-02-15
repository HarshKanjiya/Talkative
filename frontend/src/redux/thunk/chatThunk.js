import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getChatAPI } from "../../config";


export const getChatThunk = createAsyncThunk(
    'chat/getChat',
    async ({ friendID }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${getChatAPI}?friend=${friendID}`)
            console.log('hi Harxh!!!', data);
            return data
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)

