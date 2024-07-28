import React from "react";

const Button = ({ className, children, href, variant, width, height }) => {
  let buttonBg = "";
  let textColor = "";
  let hoverBg = "";
  switch (variant) {
    case "primary":
      buttonBg = "bg-indigo-700";
      break;
    case "secondary":
      buttonBg = "bg-white";
      textColor = "text-black";
      hoverBg = "hover:bg-slate-100";
      break;
    case "white":
      buttonBg = "bg-white";
      break;
    case "red":
      buttonBg = "bg-red-500";
      break;
    case "blue":
      buttonBg = "bg-blue-500";
      break;
    case "green":
      buttonBg = "bg-green-500";
      break;
    case "gray":
      buttonBg = "bg-gray-500";
      break;
    case "black":
      buttonBg = "bg-black";
      break;
    default:
      buttonBg = "bg-transparent";
      break;
  }
  const buttonClasses = `${buttonBg} ${className} ${width || "w-44"}  ${
    height || "h-11"
  }  ${
    hoverBg || ""
  } rounded-md relative inline-flex items-center justify-center cursor-pointer transition-colors no-underline`;
  const spanClasses = `${
    textColor || "text-white"
  } flex flex-row items-center relative z-10 font-extrabold no-underline`;
  const renderButton = () => (
    <button className={buttonClasses}>
      <span className={spanClasses}>{children}</span>
    </button>
  );
  const renderButtonLink = () => (
    <a href={href} className={buttonClasses}>
      <span className={spanClasses}>{children}</span>
    </a>
  );
  return href ? renderButtonLink() : renderButton();
};

export default Button;
