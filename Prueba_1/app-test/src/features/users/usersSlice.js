import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  postUser: [],
  allTasks: [],
  error: null
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
    errorPeticion: (state, action) => {
      state.error = action.payload;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getPost: (state, action) => {
      state.postUser = action.payload;
    },
    getAll: (state, action) => {
      state.allTasks = action.payload;
    }
  },
});

export const { getUsers, changeLoading, getPost, getAll, errorPeticion } = usersSlice.actions;

export default usersSlice.reducer;
