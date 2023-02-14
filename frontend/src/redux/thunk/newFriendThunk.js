import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFriendAPI, searchFriendAPI } from "../../config";
import axios from "axios"

export const searchFriendThunk = createAsyncThunk(
    'friend/SearchFriend',
    async ({ keyword = "" }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${searchFriendAPI}?keyword=${keyword}`)
            return data.searchResult
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)

export const addFriendThunk = createAsyncThunk(
    'friend/addFriend',
    async ({ friendID }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${addFriendAPI}/${friendID}`)
            console.log('hi Harxh!!!', data);
            return data
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)