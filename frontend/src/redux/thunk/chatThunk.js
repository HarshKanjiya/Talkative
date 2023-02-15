import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getChatAPI } from "../../config";


export const getChatThunk = createAsyncThunk(
    'chat/getChat',
    async ({ friendID, name }, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await axios.get(`${getChatAPI}?friend=${friendID}`)
            // console.log('hi Harxh!!!', data);
            return { name: name, chat: data.chat }
        }
        catch (err) {
            console.log('err :>> ', err);
            return rejectWithValue(err.response.data.message)
        }
    }
)

