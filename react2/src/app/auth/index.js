import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLogin:false,
        isLogOut:true
    },
    reducers:{
        login:function(state){
            return !state
        },
        logOut:function(state){
            return !state
        }
    }
})

export const {login, logOut} = authSlice.actions

export default authSlice.reducer