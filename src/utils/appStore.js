import { configureStore } from "@reduxjs/toolkit";
import  appToggleReducer from "./appToggleSlice";
import searchSliceReducer from "./searchSlice";
import chatSliceReducer from "./chatSlice";
const appStore=configureStore({
    reducer:{
       toggle:appToggleReducer, 
       search:searchSliceReducer,
       chat:chatSliceReducer
       //name:reducer 
    }

})
export default appStore;