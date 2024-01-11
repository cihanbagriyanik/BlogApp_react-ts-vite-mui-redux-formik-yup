import { createSlice } from "@reduxjs/toolkit";
/* -------------------------------------------------------------------------- */
import { useNavigate } from "react-router-dom";
/* -------------------------------------------------------------------------- */

interface blogsState {
  loading: boolean;
  error: boolean;
  blogs: any;
  blog: any;
}

const initialState: blogsState = {
  loading: false,
  error: false,
  blogs: [],
  blog: {},
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

    /* -------------------------------------------------------------------------- */
    getBlogDetail: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.blogs = payload?.data;

      /* -------------------------------------------------------------------------- */
      const navigate = useNavigate();
      navigate(`/blogdetail/${state.blogs._id}`);
      /* -------------------------------------------------------------------------- */
    },
    /* -------------------------------------------------------------------------- */
  },
});

export const { fetchStart, fetchFail, getBlogs, getBlogDetail } =
  blogsSlice.actions;

export default blogsSlice.reducer;
