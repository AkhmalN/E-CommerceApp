import React from "react";
import Slider from "react-slick";
import product from "../assets/background/product.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#6B7280",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#6B7280",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
      onClick={onClick}
    />
  );
}

function SliderCard({ images }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      {images.length > 1 ? (
        <Slider {...settings}>
          {images.map((x, y) => (
            <div key={y}>
              <img src={x} alt={`slide-${y}`} style={{ height: "200px" }} />
            </div>
          ))}
        </Slider>
      ) : (
        <div>
          <img src={images[0]} alt="single-slide" style={{ height: "200px" }} />
        </div>
      )}
    </div>
  );
}

export default SliderCard;
