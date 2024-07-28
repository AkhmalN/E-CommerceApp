import React from "react";
import Button from "./Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarRatings from "react-star-ratings";
import { calculateDiscount } from "../utils/calculateDiscount";

const Card = ({ data }) => {
  return (
    <a
      href={`/product/${data.id}`}
      className="flex flex-col bg-white relative w-[20rem] lg:w-[15rem] xl:w-[15rem] h-auto border shadow-xl rounded-xl px-2 py-3 mx-1 my-2 hover:cursor-pointer transition duration-100 ease-in-out hover:scale-105 hover:-translate-y-1 hover:bg-white hover:z-20"
    >
      <div className="px-6 flex flex-row justify-center items-center">
        {data.images ? (
          <img
            src={data.images[0]}
            alt="single-slide"
            style={{ height: "200px" }}
          />
        ) : (
          <img
            src="https://dummyjson.com/image/150"
            alt="single-slide"
            style={{ height: "200px" }}
          />
        )}
      </div>
      <div className="px-2">
        <h1 className="font-extrabold md:text-md lg:text-lg xl:text-xl ">
          {data.title}
        </h1>
      </div>
      <div className="px-2 flex-grow">
        <p className=" text-gray-500">{data.description.slice(0, 99)}..</p>
        <div className=" my-2 flex">
          <span className="text-xl xl:text-3xl font-bold text-amber-500 mx-1">
            ${calculateDiscount(data.price, data.discountPercentage)}
          </span>
          <del className="xl:text-xl text-gray-500">{data.price}</del>
        </div>
        <div className="flex flex-row items-center">
          <StarRatings
            rating={data.rating}
            starRatedColor="#EAB308"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
            starSpacing="2px"
          />
          <span className="mt-1 mx-2">({data.reviews.length}) reviews</span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Button
          className={"mt-5 mx-2"}
          href={"/cart"}
          variant={"gray"}
          width={"w-32"}
          height={"h-10"}
        >
          <ShoppingCartOutlinedIcon />
          Cart
        </Button>
        <Button
          className={"mt-5 mx-2"}
          href={"/buy"}
          variant={"primary"}
          width={"w-32"}
          height={"h-10"}
        >
          <ShoppingBagOutlinedIcon />
          Buy
        </Button>
      </div>
    </a>
  );
};

export default Card;
