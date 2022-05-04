import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import API from "../../service/API";

export const getLogin = createAsyncThunk(
    'auth/getLogin' ,
    async ( userInfo ) => {
        const axiosData = {
            "id": userInfo.id ,
            "password": userInfo.pw ,
        };

        const { data } = await API.post(
            '/login' ,
            axiosData ,
        );
        return data;
    }
)

export const getUserInfo = createAsyncThunk(
    'auth/getUserInfo' ,
    async ( access_token ) => {
        API.defaults.headers = {
            'authorization': access_token
        }
        const { data } = await API.get('/getUserInfo');
        console.log(data);
        return data;
    }
)

const initialState = {
    isLogined: false ,
    access_token: "" ,
    user: {
        signup_date: "" ,
        id: "" ,
        birth: "" ,
        username: "" ,
    }
}

export const authSlice = createSlice({
    name: 'auth' ,
    initialState ,
    reducers: {
        getLogout: ( state ) => {
            state.isLogined = false;
            state.access_token = "";
            state.user = { ...initialState.user };
        }
    } ,
    extraReducers: ( builder ) => {
        builder.addCase(getLogin.fulfilled , ( state , action ) => {
            state.access_token = action.payload.access_token;
            state.isLogined = true;
        });
        builder.addCase(getLogin.rejected , ( state ) => {
            alert("로그인에 실패했습니다");
            state.isLogined = false;
            state.access_token = "";
        })
        builder.addCase(getUserInfo.fulfilled , ( state , action ) => {
            state.user = action.payload.data;
        })
    }
})

export const { getLogout } = authSlice.actions;

export default authSlice.reducer;