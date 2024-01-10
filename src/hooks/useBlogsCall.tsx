import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getBlogs } from "../features/blogsSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

interface initialValue {
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
}

const useBlogsCall = () => {
  const dispatch = useDispatch();

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

  const removeBlog = async (url: any, id: string) => {
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

  return { blogsList, createBlog, updateBlog, removeBlog };
};

export default useBlogsCall;
