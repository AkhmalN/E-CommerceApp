import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Category from "./pages/Category";

const App = () => {
  return (
    <BrowserRouter>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/product/:id" Component={Detail} />
        <Route path="/category/:name" Component={Category} />
      </Routes>
    </BrowserRouter>
  );
};

const ConditionalNavbar = () => {
  const hideNavbar = window.location.pathname === "/login";
  return !hideNavbar ? <Navbar /> : null;
};

export default App;
