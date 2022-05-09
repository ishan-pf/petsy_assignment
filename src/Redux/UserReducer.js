import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser:null,
        isFetching : false,
        error : false
    },
    reducers:{

      onLogin:(state) => {

        state.isFetching= true;
      },
      LoginSuccess:(state, action) => {

        state.isFetching= false;
        state.currentUser = action.payload;
      },
      LoginError:(state)=> {
        state.isFetching = false;
        state.error= true;
      },
      Logout : (state) => {
        state.currentUser = null;
      }

    },


})

export const {onLogin, LoginSuccess, LoginError,Logout} = userSlice.actions
export default userSlice.reducer;