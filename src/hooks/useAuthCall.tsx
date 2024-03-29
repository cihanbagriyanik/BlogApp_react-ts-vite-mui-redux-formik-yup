import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  registerSuccess,
  loginSuccess,
  logOutSuccess,
  getUser,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import { RootState } from "../app/store";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.auth);

  const register = async (userInfo: FormValues) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/`, userInfo);
      console.log("register", data);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register is successfully");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Register is not successfully"
      );
    }
  };

  const login = async (userInfo: { email: string; password: string }) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login/`, userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successfully");
      navigate("/");
      // console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Login is not successfully"
      );
    }
  };

  const logOut = async () => {
    dispatch(fetchStart());
    try {
      await axios.get(`${BASE_URL}auth/logout/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      dispatch(logOutSuccess());
      toastSuccessNotify("Logout is successfully");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Logout is not successfully"
      );
    }
  };

  const getSingleUser = async (id: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}users/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(getUser(data));
      // console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { register, login, logOut, getSingleUser };
};

export default useAuthCall;
