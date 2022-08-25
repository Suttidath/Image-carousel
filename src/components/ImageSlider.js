import React, { useState } from "react";
import ImageData from "./ImageData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageData.length;

  const backslide = () => {
    current === 0 ? setCurrent(length - 1) : setCurrent(current - 1);
  };

  const nextslide = () => {
    current === length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  // index 0,1,2

  return (
    <section className="slider">
      <AiOutlineArrowLeft className="back" onClick={backslide} />
      <AiOutlineArrowRight className="next" onClick={nextslide} />
      {ImageData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img src={data.Image} alt={data.Title} className="image" />
                <p>{data.Title}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
