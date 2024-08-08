import {createSlice} from '@reduxjs/toolkit'

const sideNav = createSlice({
    name:'sideNav',
    initialState:{
        slider:false,
        stack:false
    },
    reducers:{
        onSideNav:function(state, actions){
            const getTheSliderState = actions.payload;
             state.slider = getTheSliderState;
             return;
             
        },
        offSideNav:function(state, actions){
            const getTheSliderState = actions.payload;
            state.slider = getTheSliderState;
            return ;
        }

    }
})

export const {onSideNav, offSideNav} = sideNav.actions
export default sideNav.reducer