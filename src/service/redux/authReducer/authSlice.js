import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { signIn } from "./authService";

export const getLogin = createAsyncThunk(
    'auth/getLogin' ,
    async ( userInfo , thunkAPI ) => {
        await signIn(userInfo)
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => {
                throw err
            })
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
            console.log("리젝트");
            state.isLogined = false;
        })
    }
})

export default authSlice.reducer