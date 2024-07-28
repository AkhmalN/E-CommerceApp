import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/actions/products";
import { useEffect } from "react";
import { productSelector } from "./redux/selectors/products.js";

import "./App.css";
import AlertComponent from "./components/Alert.jsx";

function Test() {
  const dispatch = useDispatch();

  const {
    getProducts: selectProducts,
    loadingProducts: selectLoading,
    errorProducts: selectError,
  } = productSelector;

  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  console.log(products);

  return (
    <>
      <h1>Vite + React</h1>
      <AlertComponent />
      <div className="card">
        {products &&
          products.map((x, y) => {
            return <li key={y}>{x.title}</li>;
          })}
      </div>
    </>
  );
}

export default Test;
