import {createSlice} from '@reduxjs/toolkit'

const sideNav = createSlice({
    name:'sideNav',
    initialState:{
        slider:false,
        stack:false
    },
    reducers:{
        onSideNav:function(state,actions){
            state.slider = actions.payload
            return 
        },
        offSideNav:function(state, actions){
            state.slider = actions.payload
            return 
        },
        onStack:function(state, actions){
            state.stack = actions.payload
            return 
        }
    }
})

export const {onSideNav, offSideNav, onStack} = sideNav.actions
export default sideNav.reducer