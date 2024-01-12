import { createSlice } from "@reduxjs/toolkit";

interface commentsState {
  loading: boolean;
  error: boolean;
  comments: any;
  comment: any;
}

const initialState: commentsState = {
  loading: false,
  error: false,
  comments: [],
  comment: {},
};

const commentSlice = createSlice({
  name: "comment",

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

    getComments: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.comments = payload?.data;
    },

    getCommentDetail: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.comment = payload?.data;
    },
  },
});

export const { fetchStart, fetchFail, getComments, getCommentDetail } =
commentSlice.actions;

export default commentSlice.reducer;
