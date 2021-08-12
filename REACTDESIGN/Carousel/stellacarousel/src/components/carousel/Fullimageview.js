import React from "react";
import Buttons from "./Buttons";
const Fullimageview = (props) => {
  const hideImage = {
    display: "none",
  };
  const showImage = {
    display: "block",
  };
  const { status, slides, slideIndex, plusSlides } = props;
  console.log(props, hideImage, showImage);

  return (
    <>
      {slides.NatureImages.map((item) => (
        <div
          key={item.name}
          className="mySlides"
          style={status[slideIndex] ? { showImage } : { hideImage }}
        >
          {/* <!-- Full-width images with number text --> */}
          <div className="numbertext">
            {slideIndex[slideIndex + 1]} /{slides.NatureImages.length}
            <p>fullimage</p>
          </div>
          console.log(className);
          <img src={item.image} alt={item.name} style={{ width: "100%" }} />
        </div>
      ))}
      <Buttons plusSlides={plusSlides} />
    </>
  );
};

export default Fullimageview;
