import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  getComments,
  getCommentDetail,
} from "../features/commentSlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import useBlogsCall from "./useBlogsCall";

interface NewCommentValues {
  blogId: string | undefined;
  comment: string;
}

const useCommentCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();
  const { blogDetail } = useBlogsCall();
  const commentsList = async (url: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}/`);
      console.log(data);
      dispatch(getComments({ data: data.data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createComment = async (url: string, body: NewCommentValues) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      blogDetail(`blogs/${body.blogId}`);
      toastSuccessNotify("New Comment created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "New Comment could not create"
      );
    }
  };

  const updateComment = async (
    url: string,
    id: string,
    body: NewCommentValues
  ) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${id}`, body);
      getComments(url);
      toastSuccessNotify("Comment updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Comment could not update"
      );
    }
  };

  const removeComment = async (url: string, id: string) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      getComments(url);
      toastSuccessNotify("Comment removed");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Comment could not remove"
      );
    }
  };

  const listSingleBlogComments = async (url: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      // console.log(data);
      dispatch(getCommentDetail({ data: data.data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    commentsList,
    createComment,
    updateComment,
    removeComment,
    listSingleBlogComments,
  };
};

export default useCommentCall;
