import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../redux/actions/products";
import { productSelector } from "../redux/selectors/products";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { calculateDiscount } from "../utils/calculateDiscount";
import Button from "../components/Button";
import { ImageGalery } from "../components/ImagePreview";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    getProduct: fetchProducts,
    loadingProducts: getLoading,
    errorProducts: getError,
  } = productSelector;

  const product = useSelector(fetchProducts);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const firstImage =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : "https://dummyjson.com/image/150";
  const [viewImage, setViewImage] = useState(firstImage);

  useEffect(() => {
    if (firstImage) {
      setViewImage(firstImage);
    }
  }, [firstImage]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 flex flex-col">
      <div className="relative flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mx-1">
          <ImageGalery
            viewImage={viewImage}
            id={id}
            product={product}
            setViewImage={setViewImage}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 py-2 mx-1">
          <div className="py-2 my-2">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              {product.title}
            </p>
          </div>
          <div className="flex flex-row items-center my-3">
            <StarRatings
              rating={product.rating}
              starRatedColor="#EAB308"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="2px"
            />
            {product.rating && (
              <span className="mt-1 mx-2 text-amber-500 font-bold">
                {product.rating.toFixed(1)}
              </span>
            )}

            <div className="flex flex-row items-center mx-1">
              <LocalMallOutlinedIcon className="text-gray-500 font-semibold mx-1" />
              <span className="text-gray-500 font-semibold">
                {product.minimumOrderQuantity} orders
              </span>
            </div>
            <div className="flex flex-row items-center mx-1">
              <AddShoppingCartOutlinedIcon className="text-green-500 font-semibold" />
              <span className="text-green-500 font-semibold mx-1">
                {product.availabilityStatus}
              </span>
            </div>
          </div>
          <div className="my-5 flex flex-col sm:flex-row items-center">
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-amber-500 mx-1">
              ${calculateDiscount(product.price, product.discountPercentage)}
            </span>
            <del className="text-xl text-gray-500">{product.price}</del>
          </div>
          <div className="my-5">
            <p>{product.description}</p>
          </div>
          <div className="flex flex-row">
            <div className="w-full sm:w-1/2">
              <p className="font-bold text-gray-500 my-2">Stock:</p>
              <p className="font-bold text-gray-500 my-2">Brand:</p>
              <p className="font-bold text-gray-500 my-2">Sku:</p>
              <p className="font-bold text-gray-500 my-2">
                Warranty Information:
              </p>
              <p className="font-bold text-gray-500 my-2">
                Shipping Information:
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="my-2">{product.stock || "-"}</p>
              <p className="my-2">{product.brand || "-"}</p>
              <p className="my-2">{product.sku || "-"}</p>
              <p className="my-2">{product.warrantyInformation || "-"}</p>
              <p className="my-2">{product.shippingInformation || "-"}</p>
            </div>
          </div>
          <div className="mt-5">
            {product.tags &&
              product.tags.map((tag, x) => {
                return (
                  <span key={x} className="mx-2 text-gray-600">
                    #{tag}
                  </span>
                );
              })}
          </div>
          <div className="border-2 mt-5"></div>
          <div className="flex flex-row items-center mt-10">
            <Button variant={"primary"} className={"mx-1 my-2"}>
              Buy Now
            </Button>
            <Button variant={"gray"} className={"mx-1 my-2"}>
              <AddShoppingCartOutlinedIcon className="mx-1" />
              Cart
            </Button>
            <Button variant={"red"} className={"mx-1 my-2"}>
              <FavoriteBorderOutlinedIcon className="mx-1" />
              Save
            </Button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Detail;
