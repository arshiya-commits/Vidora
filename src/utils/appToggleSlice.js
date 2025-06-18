import { createSlice  } from "@reduxjs/toolkit";
const appToggleSlice=createSlice({
    name:"toggle",
    initialState:{
        istoggle:true,
    },
    reducers:{
        toggleMenu:(state) => {
        state.istoggle=!state.istoggle;
        },
        closeMenu:(state)=>{
            state.istoggle=false;
        }
    },
    
})
export const  {toggleMenu,closeMenu}=appToggleSlice.actions;
export default appToggleSlice.reducer;