import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {signIn} from "./authService";

export const  getLogin = createAsyncThunk(
    'auth/getLogin',
    async (userInfo,thunkAPI) => {
        return  await signIn(userInfo)
            .then(res=>res.data)
            .catch(err=>{
            throw err
        })
    }
)

const initialState = {
    isLogined: false,
    user: {
        id:"",
        birth: "",
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLogin.fulfilled, (state, action)=> {
            state.user = action.payload;
            state.isLogined = true;
        });
        builder.addCase(getLogin.rejected,(state) => {
            console.log("리젝트;")
            state.isLogined = false;
        })
    }
})

export default authSlice.reducer