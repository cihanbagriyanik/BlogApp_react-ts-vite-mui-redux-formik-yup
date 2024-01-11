import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  getBlogs,
  getBlogDetail,
} from "../features/blogsSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

/* -------------------------------------------------------------------------- */
import { useNavigate } from "react-router-dom";
/* -------------------------------------------------------------------------- */

interface initialValue {
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
}

const useBlogsCall = () => {
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  const navigate = useNavigate();
  /* -------------------------------------------------------------------------- */

  const { axiosWithToken } = useAxios();

  const blogsList = async (url: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}/`);
      console.log(data);
      dispatch(getBlogs({ data: data.data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createBlog = async (url: string, body: initialValue) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      blogsList(url);
      toastSuccessNotify("New Blog created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "New Blog could not create"
      );
    }
  };

  const updateBlog = async (url: string, id: string, body: initialValue) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${id}`, body);
      blogsList(url);
      toastSuccessNotify("Blog updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Blog could not update"
      );
    }
  };

  const removeBlog = async (url: string, id: string) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      blogsList(url);
      toastSuccessNotify("Blog removed");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Blog could not remove"
      );
    }
  };

  /* -------------------------------------------------------------------------- */
  const blogDetail = async (url: string, id: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}/${id}`);
      console.log(data);
      dispatch(getBlogDetail({ data: data.data, url: `${url}/${id}` }));
      /* -------------------------------------------------------------------------- */
      navigate(`/blogdetail/${id}`);
      /* -------------------------------------------------------------------------- */
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  /* -------------------------------------------------------------------------- */
  return { blogsList, createBlog, updateBlog, removeBlog, blogDetail };
};

export default useBlogsCall;
