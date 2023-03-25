import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFriendAPI, blockAccAPI, friendRequestAPI, searchFriendAPI } from "../../config";
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
            return data.user
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)

export const friendRequestThunk = createAsyncThunk(
    'user/',
    async ({ friendID, accept }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${friendRequestAPI}/${friendID}?accept=${accept}`)
            console.log('hi Harxh!!!', data);
            return data.user
        }
        catch (err) {
            console.log('object :>> ', err.response.data.message);
            return rejectWithValue(err.response.data.message)
        }
    }
)

export const BlockAccThunk = createAsyncThunk(
    'user/BlockAcc',
    async ({ FriendID, opration }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${blockAccAPI}?id=${FriendID}op=${opration}`)
            console.log('hi Harxh!!!', data);
            return data
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)