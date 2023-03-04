import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (mystate, action) => {
      mystate.value = action.payload;
    },
    logout: (mystate) => {
      mystate.value = null;
    }
  }
});


export const { login, logout } = userSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectUser = (state) => state.user.value;


export default userSlice.reducer;
