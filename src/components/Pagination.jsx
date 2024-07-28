import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pages.push(index);
  }
  return (
    <div className="w-1/2 px-2 py-3 my-5 flex justify-center">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className="border border-indigo-600 mx-1 rounded-md w-10 h-11"
            onClick={() => setCurrentPage(page)}
          >
            <span className="font-poppins">{page}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
