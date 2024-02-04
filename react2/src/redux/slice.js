import {createSlice} from '@reduxjs/toolkit'

const sideNav = createSlice({
    name:'sideNav',
    initialState:{
        slider:true,
        stack:false
    },
    reducers:{
        onSideNav:function(state, actions){
            state.slider = actions.payload
            return 
        },
        offSideNav:function(state, actions){
            state.slider = actions.payload
            return 
        }

    }
})

export const {onSideNav, offSideNav} = sideNav.actions
export default sideNav.reducer