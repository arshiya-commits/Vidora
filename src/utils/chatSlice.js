import { createSlice } from "@reduxjs/toolkit"
const chatSlice=createSlice(
    {
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:
    {
        appendChat:(state,action)=>{
            state.messages.splice(10,1)
          state.messages.unshift(action.payload)
        },
       
    }

}
 
)
export const {appendChat,removeChat}=chatSlice.actions
export default chatSlice.reducer;