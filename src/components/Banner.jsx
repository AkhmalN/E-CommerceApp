import React from "react";
import logoBanner from "../assets/background/social-media-communication-concept-removebg-preview.png";
import Button from "./Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Banner = () => {
  return (
    <div className="bg-indigo-700 w-full h-400 xl:h-[300px]">
      <div className="flex flex-col md:flex-col xl:flex-row justify-evenly items-center px-5">
        <div className="">
          <h1 className="w-2/3 text-white text-xl xl:text-5xl font-extrabold">
            DRESSES <span className="text-amber-500">TO</span>{" "}
          </h1>
          <h1 className="w-2/3 text-white text-xl xl:text-5xl font-extrabold">
            <span className="text-amber-500">BE</span> NOTICE.
          </h1>
          <div className="border-l-4 border-gray-700 my-5">
            <h2 className="w-2/3 text-gray-700 font-poppins text-md font-bold  text-left mt-3 mx-2">
              Fashion is part of the daily air and it changes all the time, with
              all the events
            </h2>
          </div>
          <Button
            variant={"black"}
            className={"font-poppins text-sm font-thin"}
          >
            Start shopping
            <ShoppingCartOutlinedIcon className="ml-2" />
          </Button>
        </div>
        <div className="">
          <img src={logoBanner} style={{ width: 600, height: 300 }} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
