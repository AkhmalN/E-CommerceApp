import React from "react";

const Header = ({ children }) => {
  return (
    <header className="w-full bg-indigo-700 flex flex-row shadow-md justify-between px-10 py-4 items-center">
      {children}
    </header>
  );
};

const Logo = ({ children }) => {
  return <div className=" w-auto px-4 py-1 rounded-md">{children}</div>;
};

const NavItems = ({ children }) => {
  return (
    <div className=" w-auto">
      <ul className="flex flex-row justify-evenly">{children}</ul>
    </div>
  );
};

Header.Logo = Logo;
Header.NavItems = NavItems;

export default Header;
