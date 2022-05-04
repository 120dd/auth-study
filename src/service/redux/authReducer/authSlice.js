import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import API from "../../API";

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
        console.log(data);
        return data;
    }
)

const initialState = {
    isLogined: false ,
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
            state.user = { ...initialState.user };
        }
    } ,
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

export const { getLogout } = authSlice.actions;

export default authSlice.reducer;