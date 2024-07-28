import React from "react";
import Button from "../components/Button";
import bg from "../assets/background/9307194.png";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="bg-white border border-slate-200 h-[40rem] w-[30rem] flex flex-col  items-center px-2 py-3 rounded-xl">
        <div className="my-10">
          <h1 className="text-slate-500 text-5xl  font-bold">Login</h1>
        </div>
        <div className="my-10 w-[20rem]">
          <div className="flex flex-col my-5 h-[5rem] justify-evenly ">
            <span className=" text-slate-500 font-bold">Username</span>
            <div className="flex flex-row items-center border-b-2 border-slate-400">
              <PersonIcon style={{ color: "#AF66E1" }} className="mr-2" />
              <input
                type="text"
                placeholder="Type your username"
                className="  text-md text-slate-500  h-[2.5rem] focus:outline-none py-6"
              />
            </div>
          </div>
          <div className="flex flex-col my-5 h-[5rem] justify-evenly">
            <span className=" text-slate-500 font-bold">Password</span>
            <div className="flex flex-row items-center border-b-2 border-slate-400">
              <LockIcon style={{ color: "#AF66E1" }} className="mr-2" />
              <input
                type="text"
                placeholder="Type your username"
                className="  text-md text-slate-500  h-[2.5rem] focus:outline-none py-6"
              />
            </div>
          </div>
        </div>
        <span className="text-right hover:cursor-pointer underline">
          Forgot password?
        </span>
        <div className="text-right hover:cursor-pointer underline">
          <Button
            className={"mt-5"}
            href={"/"}
            variant={"primary"}
            width={"w-52"}
            height={"h-11"}
          >
            Login
          </Button>
        </div>
        <span className="text-right hover:cursor-pointer mt-3">
          Don't have account?{" "}
          <a className="underline" style={{ color: "#AF66E1" }}>
            Sign Up
          </a>
        </span>
        <div className="flex flex-row justify-center">
          <Button
            className={"mt-5 mx-2"}
            href={"/"}
            variant={"red"}
            width={"w-14"}
            height={"h-10"}
          >
            <GoogleIcon />
          </Button>
          <Button
            className={"mt-5 mx-2"}
            href={"/"}
            variant={"blue"}
            width={"w-14"}
            height={"h-10"}
          >
            <FacebookIcon />
          </Button>
          <Button
            className={"mt-5 mx-2"}
            href={"/"}
            variant={"green"}
            width={"w-14"}
            height={"h-10"}
          >
            <EmailIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
