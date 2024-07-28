import axios from "axios";
import * as types from "./types";

export const getProducts = (limit) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_PRODUCT_BASE_URL}/products?limit=${limit}`
    );
    const data = response.data.products;
    dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_PRODUCTS_FAILED });
    throw new Error(error);
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_PRODUCT_BASE_URL}/products/${id}`
    );
    const data = response.data;
    dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_PRODUCT_FAILED });
    throw new Error(error);
  }
};

export const getProductByCategories = (name) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_BY_CATEGORIES_REQUEST });
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_PRODUCT_BASE_URL}/products/category/${name}`
    );
    console.log(response.data);
    const data = response.data;
    dispatch({ type: types.GET_PRODUCT_BY_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_PRODUCT_BY_CATEGORIES_FAILED });
    throw new Error(error);
  }
};
