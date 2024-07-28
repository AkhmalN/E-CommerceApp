import React from "react";

const CardNavigation = ({ item }) => {
  return (
    <a
      href={`/category/${item.name}`}
      className={`flex flex-col items-center justify-center m-2 border-2 rounded-xl w-20 h-24 px-[3rem] py-2 hover:cursor-pointer transition shadow duration-100 ease-in-out hover:scale-110 hover:-translate-y-1 bg-indigo-700`}
    >
      <span className="hover:cursor-pointer">
        <item.icon
          className={`hover:cursor-pointer text-slate-200 `}
          style={{ fontSize: 30 }}
        />
      </span>
      <span
        className={`font-poppins text-sm  my-2 hover:cursor-pointer text-center text-slate-200`}
      >
        {item.name}
      </span>
    </a>
  );
};

export default CardNavigation;
