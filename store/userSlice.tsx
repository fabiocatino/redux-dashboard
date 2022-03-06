import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<any>) {
      return [...(action.payload || [])];
    },
    addUser(state, action: PayloadAction<any>) {
      state.push(action.payload);
      return state;
    },
    editUser(state, action: PayloadAction<any>) {
      return state.map((user: any) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    },
    deleteUser(state, action: PayloadAction<number>) {
      return state.filter((user: any) => user.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
