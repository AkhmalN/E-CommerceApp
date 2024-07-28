import * as React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "./Button";
import Header from "./Header";
import CartModal from "./Modal";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const liCLasses = `flex flex-row px-2 justify-between items-center hover:cursor-pointer  `;
  return (
    <Header>
      <Header.Logo>
        <a href="/" className="flex flex-row items-center">
          <h1 className="text-3xl font-poppins font-extrabold text-amber-500">
            EN
          </h1>
          <h1 className="text-3xl font-poppins font-extrabold text-white">
            IGMA
          </h1>
          <h1 className="text-3xl font-poppins font-extrabold text-amber-500">
            SS
          </h1>
        </a>
      </Header.Logo>

      <Header.NavItems>
        <li className={liCLasses}>
          <NotificationsNoneOutlinedIcon
            sx={{ fontSize: 40 }}
            className="text-white hover:bg-black px-2 py-1 rounded-md transition-transform transform-gpu mx-1"
          />
        </li>
        <li className={liCLasses} onMouseEnter={handleOpen}>
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: 40 }}
            className="text-white px-2 py-1 rounded-md transition-transform transform-gpu mx-1"
          />
        </li>
        <CartModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
        {/* <li className={liCLasses}>
            <Person2OutlinedIcon
              sx={{ fontSize: 27 }}
              className="text-slate-600 hover:text-purple-700"
            />
          </li> */}
        <li className={liCLasses}>
          <Button variant={"black"} width={"w-20"}>
            Sign in
          </Button>
        </li>
        <li className={liCLasses}>
          <Button width={"w-20"} variant={"secondary"}>
            Sign up
          </Button>
        </li>
      </Header.NavItems>
    </Header>
  );
};

export default Navbar;
