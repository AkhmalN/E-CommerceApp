import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { CATEGORIES } from "../constant/categories";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/products";
import { productSelector } from "../redux/selectors/products";
import Card from "../components/Card";
import Loading from "../components/Loading";
import CardNavigation from "../components/CardNavigation";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const [loading, setLoading] = useState(false); // State baru untuk loading
  const {
    getProducts: fetchProducts,
    loadingProducts,
    errorProducts,
  } = productSelector;

  const products = useSelector(fetchProducts);
  const reduxLoading = useSelector(loadingProducts); // Loading dari Redux state
  const error = useSelector(errorProducts);

  useEffect(() => {
    setLoading(true);
    dispatch(getProducts(194)).then(() => setLoading(false));
  }, [dispatch, currentPage]); // Tambahkan currentPage sebagai dependensi

  if (loading || reduxLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    products && products.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <Banner />
      </div>
      <div className="px-[2rem] my-10">
        <div className="flex flex-col justify-center items-center my-4 border shadow-md rounded-xl bg-white py-2">
          <p className="text-slate-600 font-poppins text-center text-2xl py-3 border-b-4 border-indigo-600 mb-5">
            Categories
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center">
            {CATEGORIES.map((item, id) => (
              <CardNavigation item={item} key={id} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-[2rem] my-10">
        <div className="flex flex-col justify-center items-center my-4 border shadow-md rounded-xl bg-white">
          <p className="text-slate-600 font-poppins text-center text-2xl py-3 border-b-4 border-indigo-600 mb-5">
            Most popular
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            {currentPosts.map((x, y) => (
              <Card key={y} data={x} />
            ))}
          </div>
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={(page) => {
              setLoading(true); // Set loading saat halaman berubah
              setcurrentPage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
