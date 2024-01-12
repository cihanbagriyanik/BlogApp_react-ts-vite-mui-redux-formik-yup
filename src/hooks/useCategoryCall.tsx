import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  getCategories,
} from "../features/categorySlice";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

// interface initialValue {
//     categoryId: string;
//     title: string;
//     image: string;
//     category: string;
//     content: string;
//     isPublish: boolean;
//   }

const useCategoryCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const categoryList = async (url: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}/`);
      console.log(data);
      dispatch(getCategories({ data: data.data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createCategory = async (url: string, body: NewCategoryValues) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      getCategories(url);
      toastSuccessNotify("New Category created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "New Category could not create"
      );
    }
  };

  const updateCategory = async (url: string, id: string, body: NewCategoryValues) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${id}`, body);
      getCategories(url);
      toastSuccessNotify("Category updated");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Category could not update"
      );
    }
  };

  const removeCategory = async (url: string, id: string) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      getCategories(url);
      toastSuccessNotify("Category removed");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(
        // error?.response?.data?.message ||
        "Category could not remove"
      );
    }
  };

//   const blogDetail = async (url: string) => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axiosWithToken(`${url}`);
//       console.log(data);
//       dispatch(getBlogDetail({ data: data.data }));
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };

  return { categoryList, createCategory, updateCategory, removeCategory };
};

export default useCategoryCall;
