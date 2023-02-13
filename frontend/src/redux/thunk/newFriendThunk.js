import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchFriendAPI } from "../../config";

export const searchFriendThunk = createAsyncThunk(
    'friend/SearchFriend',
    async ({ userID, keyword = "" }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${searchFriendAPI}?user=${userID}&keyword=${keyword}`, apiHeaderConfig)
            console.log('searchi frnd', data.searchResult);
            return data.searchResult
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)