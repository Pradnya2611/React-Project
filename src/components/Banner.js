import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",

    "https://img.freepik.com/free-photo/front-view-young-pretty-female-holding-sale-writing-black-wall-woman-model-emotion-shopping-color-fashion_140725-108720.jpg?t=st=1721053963~exp=1721057563~hmac=01b9779b0c615e915c5879b0dadb8f37113e4467b6c3db972388f7f56d373664&w=1060",
    "https://img.freepik.com/premium-vector/fashion-banner-sale-with-text-effect_92715-89.jpg?w=1060",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImageTwo"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImageThree"
            loading="priority"
          />
        </div>

        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
