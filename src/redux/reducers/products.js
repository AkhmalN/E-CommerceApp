import * as types from "../actions/types";

const initialState = {
  products: [],
  product: {},
  loading: null,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      };
    case types.GET_PRODUCTS_FAILED:
      return { ...state, loading: false, error: true };

    //DETAIL PRODUCT
    case types.GET_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: false,
      };
    case types.GET_PRODUCT_FAILED:
      return { ...state, loading: false, error: true };

    // GET PRODUCTS BY CATEGORIES

    case types.GET_PRODUCT_BY_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case types.GET_PRODUCT_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      };
    case types.GET_PRODUCT_BY_CATEGORIES_FAILED:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default productReducer;
