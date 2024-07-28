import * as React from "react";
import { Modal, Typography, Box } from "@mui/material";
import productPng from "../assets/background/product.png";

const style = {
  position: "absolute",
  top: "10%",
  right: "5%",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  borderRadius: 5,
  py: 2,
  px: 2,
};

export default function Cart({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="p"
            component="h2"
            className="text-gray-500"
          >
            New Added
          </Typography>
          <div className="my-3 w-full inline-flex flex-row justify-center items-center">
            <div className="border rounded-lg flex flex-row w-1/4">
              <img
                src={productPng}
                alt="product img"
                style={{ width: 60, height: 60 }}
              />
            </div>
            <div className="w-2/4 mx-1">
              <p className="text-md">Eyeshadow Palette with Mirror</p>
            </div>
            <div className="w-1/4">
              <p className="text-lg text-amber-500 font-bold">$18.89</p>
            </div>
          </div>
          <div className="my-3 w-full inline-flex flex-row justify-center items-center">
            <div className="border rounded-lg flex flex-row w-1/4">
              <img
                src={productPng}
                alt="product img"
                style={{ width: 60, height: 60 }}
              />
            </div>
            <div className="w-2/4 mx-1">
              <p className="text-md">Eyeshadow Palette with Mirror</p>
            </div>
            <div className="w-1/4">
              <p className="text-lg text-amber-500 font-bold">$18.89</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
