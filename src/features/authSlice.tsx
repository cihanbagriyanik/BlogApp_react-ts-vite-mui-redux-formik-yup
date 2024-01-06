import { createSlice } from "@reduxjs/toolkit";

// interface authState {
//   loading: boolean;
//   error: boolean;
//   currentUser: string;
//   isAdmin: boolean;
//   token: string;
// }

const initialState: authState = {
  loading: false,
  error: false,
  isAdmin:false,
  currentUser: "",
  token:""
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = false;
    },

    fetchFail(state) {
      state.loading = false;
      state.error = true;
    },

    registerSuccess(state, { payload }) {
      state.loading = false;
      state.currentUser = payload?.data?.username;
      state.token = payload?.token;
    },

    loginSuccess(state, { payload }) {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.isAdmin = payload?.user?.isAdmin;
      state.token = payload?.token;
    },

    logOutSuccess(state) {
      state.loading = false;
      state.currentUser = "";
      state.isAdmin = false;
      state.token = "";
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
  loginSuccess,
  logOutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
