import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SliderSmall() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className="m-auto xl:w-[100%] lg:w-[130%] md:w-[90%] sm:w-[80%] ssm:w-[70%]  vsm:w-[68%] vvsm:w-[68%]">
        <div className="mt-12">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="h-56 text-cyan-600 rounded-xl  ">
                <div className="h-56 rounded-xl border border-sky-600 flex flex-col justify-between items-center w-[100%] ">
                  <img src={d.img} className="w-[100%] h-3/4 rounded-t-xl" />
                  <div className="flex justify-center items-center p-4">
                    <p className="xl:text-base lg:text-sm font-semibold">
                      {d.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
const data = [
  {
    name: `Lower Interest Rates`,
    img: img1,
  },
  {
    name: `Interest Free Payments`,
    img: img2,
  },
  {
    name: `Discount on Materials`,
    img: img3,
  },
  {
    name: `Lower Interest Rates`,
    img: img1,
  },
  {
    name: `Interest Free Payments`,
    img: img2,
  },
  {
    name: `Discount on Materials`,
    img: img3,
  },
];
export default SliderSmall;
