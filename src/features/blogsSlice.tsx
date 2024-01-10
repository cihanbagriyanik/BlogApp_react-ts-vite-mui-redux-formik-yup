import { createSlice } from "@reduxjs/toolkit";

interface blogsState {
  loading: boolean;
  error: boolean;
  blogs: any;
  // id: number;
}

const initialState: blogsState = {
  loading: false,
  error: false,
  blogs: [],
  // id: 0
};

const blogsSlice = createSlice({
  name: "blogs",

  initialState,

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    getBlogs: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.blogs = payload?.data;
    },
  },
});

export const { fetchStart, fetchFail, getBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
