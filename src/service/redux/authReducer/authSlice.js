import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const getLogin = createAsyncThunk(
    'auth/getLogin' ,
    async ( userInfo ) => {
        const axiosData = JSON.stringify({
            "id": userInfo.id ,
            "password": userInfo.pw ,
        });

        const config = {
            method: 'post' ,
            url: 'http://localhost:3001/login' ,
            headers: {
                'Content-Type': 'application/json'
            } ,
            data: axiosData
        };
        const { data } = await axios(config);
        console.log(data);
        return data;
    }
)

const initialState = {
    isLogined: false ,
    user: {
        id: "" ,
        birth: "" ,
        username: "" ,
    }
}

export const authSlice = createSlice({
    name: 'auth' ,
    initialState ,
    reducers: {} ,
    extraReducers: ( builder ) => {
        builder.addCase(getLogin.fulfilled , ( state , action ) => {
            state.user = action.payload;
            state.isLogined = true;
            
        });
        builder.addCase(getLogin.rejected , ( state ) => {
            alert("로그인에 실패했습니다");
            state.isLogined = false;
        })
    }
})

export default authSlice.reducer