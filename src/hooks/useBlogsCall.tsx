import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  getBlogs,
  getBlogDetail,
} from "../features/blogsSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";

const useBlogsCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { axiosWithToken } = useAxios();

  const blogsList = async (url: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      // console.log(data);
      dispatch(getBlogs({ data: data.data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createBlog = async (url: string, body: NewBlogFormValues) => {
    dispatch(fetchStart());
    try {
      console.log("Before post:", body);
      await axiosWithToken.post(`${url}/`, body);
      console.log("After post: Blog created successfully");
      navigate("/");
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

  const updateBlog = async (
    url: string,
    id: string | undefined,
    body: NewBlogFormValues
  ) => {
    console.log(body);
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${id}`, body);
      // blogsList(url);
      blogDetail(`${url}/${id}`);
      toastSuccessNotify("Blog updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Blog could not update"
      );
    }
  };

  const removeBlog = async (url: string, id: string | undefined) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      blogsList(url);
      navigate("/myblog");
      toastSuccessNotify("Blog removed");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Blog could not remove"
      );
    }
  };

  const blogDetail = async (url: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      // console.log(data);
      dispatch(getBlogDetail({ data: data.data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postLike = async (url: string, id: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`${url}`);
      console.log(`Post Like: ${data}`);
      // toastSuccessNotify("Operation succes");
      // getBlogs("blogs");
      blogDetail("blogs/" + id);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return {
    blogsList,
    createBlog,
    updateBlog,
    removeBlog,
    blogDetail,
    postLike
  };
};

export default useBlogsCall;
