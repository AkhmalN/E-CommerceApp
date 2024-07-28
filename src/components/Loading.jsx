import React from "react";
import logo_brand from "../assets/background/Enigma-removebg-preview.png";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <img src={logo_brand} style={{ width: 200, height: 40 }} />
      <div className="text-4xl font-bold text-purple-500 mx-3 my-2">
        Loading
        <span className="dots after:content-none inline-block w-[1em] text-center"></span>
      </div>
    </div>
  );
};

export default Loading;
