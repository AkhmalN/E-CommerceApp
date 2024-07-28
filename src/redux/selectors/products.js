// products : {
//     products : [],
//     product : {},
//     loading : false
// }

// state reducers

const getProducts = (state) => state.products.products;
const getProduct = (state) => state.products.product;
const loadingProducts = (state) => state.products.loading;
const errorProducts = (state) => state.products.error;

export const productSelector = {
  getProduct,
  getProducts,
  loadingProducts,
  errorProducts,
};
