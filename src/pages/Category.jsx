import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { productSelector } from "../redux/selectors/products";
import { getProductByCategories } from "../redux/actions/products";
import Card from "../components/Card";

const Category = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { getProducts, loadingProducts, errorProducts } = productSelector;

  const products = useSelector(getProducts);
  const loading = useSelector(loadingProducts);
  const error = useSelector(errorProducts);

  useEffect(() => {
    dispatch(getProductByCategories(name));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div>
      <div className="px-[2rem] my-10">
        <div className="flex flex-col my-4 border shadow-md rounded-xl bg-white">
          <p className="text-slate-600 font-poppins text-center text-3xl py-3 border-b-4 border-indigo-600 mb-5">
            {name}
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            {products.products &&
              products.products.map((x, y) => {
                return <Card key={y} data={x} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
