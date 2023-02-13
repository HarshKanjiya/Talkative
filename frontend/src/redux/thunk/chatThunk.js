import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChatAPI } from "../../config";


export const getChat = createAsyncThunk(
    'chat/getChat',
    async ({ userID, friendID }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(getChatAPI, { memberIDs: [userID, friendID] }, apiHeaderConfig)
            console.log('hi Harxh!!!', data);
            return data
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)