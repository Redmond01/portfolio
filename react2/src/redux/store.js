import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from './slice'

const mobile={
    mobile:mobileSlice
}


const store=configureStore({
    reducer:mobile
})

export default store

