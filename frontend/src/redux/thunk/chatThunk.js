import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiHeaderConfig, getChatAPI, sendMsgAPI } from "../../config";


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


export const sendMsgThunk = createAsyncThunk(
    'user/sendMsg',
    async ({ message, chatID, name }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(sendMsgAPI,
                { message, chatID, name }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            return data
        }
        catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)