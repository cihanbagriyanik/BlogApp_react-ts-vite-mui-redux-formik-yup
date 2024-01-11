import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const useAxios = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  if (!token) {
    // Eğer token yoksa, isteği gönderme veya uygun bir hataya işaretleme
    console.error("Token not available. Unable to make requests.");
    return {
      axiosWithToken: axios.create({ baseURL: import.meta.env.VITE_BASE_URL }),
    };
  }

  const axiosWithToken = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken };
};

export default useAxios;
