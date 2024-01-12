import { createSlice } from "@reduxjs/toolkit";

interface CategoryValues {
  loading: boolean;
  error: boolean;
  categories: any;
}

const initialState: CategoryValues = {
  loading: false,
  error: false,
  categories: [],
};

const categorySlice = createSlice({
  name: "category",

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

    getCategories: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.categories = payload?.data;
    },
  },
});

export const { fetchStart, fetchFail, getCategories } = categorySlice.actions;

export default categorySlice.reducer;
