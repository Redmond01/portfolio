import {createSlice} from '@reduxjs/toolkit'

const sideNav = createSlice({
    name:'sideNav',
    initialState:{
        slider:false
    },
    reducers:{
        onSideNav:function(state){
            return !state
        }
    }
})

export const {onSideNav} = sideNav.actions
export default sideNav.reducer