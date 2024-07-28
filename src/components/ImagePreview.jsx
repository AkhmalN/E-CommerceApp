import React from "react";

const ImagePreview = ({ product, setViewImage }) => {
  return (
    <div className="flex flex-row items-center justify-center my-2">
      {product.images && product.images.length > 1 ? (
        <>
          {product.images.map((img, x) => (
            <div
              key={x}
              className="w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] flex justify-center items-center mx-1"
            >
              <img
                src={img}
                className="border rounded-md cursor-pointer shadow-lg w-full h-full object-cover"
                onClick={() => setViewImage(img)}
              />
            </div>
          ))}
        </>
      ) : (
        <img
          src={product.images}
          className="border rounded-md cursor-pointer shadow-lg w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px]"
          onClick={() => setViewImage(product.images)}
        />
      )}
    </div>
  );
};

const ImageGalery = ({ viewImage, id, product, setViewImage }) => {
  return (
    <>
      <div className="border flex flex-row shadow rounded-xl justify-center">
        <img
          src={viewImage}
          alt={`Detail product ${id}`}
          className="w-full h-auto"
          style={{
            width: 400,
            height: "auto",
          }}
        />
      </div>
      <ImagePreview product={product} setViewImage={setViewImage} />
    </>
  );
};

export { ImageGalery, ImagePreview };
