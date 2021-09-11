import React from "react";

const Fullimageview = ({ status, slides, slideIndex }) => {
  return (
    <>
      {slides.map((item, index) => (
        <div
          className="mySlides"
          style={status[index] ? { display: "block" } : { display: "none" }}
          key={index}
        >
          {index === slides.length - 1 ? null : (
            <img src={item.image} alt={item.name} />
          )}
          {/* contact note */}
          {slideIndex === slides.length && (
            <div className="contactnote">
              <p>
                The paintings are now available through my personal account on{" "}
                <a href="https://bluethumb.com.au/stella-kypriotis">
                  bluethumb{" "}
                </a>{" "}
                online gallery.
              </p>
              <br></br>
              <p>
                Just click on the images below for more information. There are
                no additional charges for deliveries in Australia.
              </p>
              <br></br>
              <p>
                Contact me if you would like more information. If interested in
                commissioning me a painting through my contact form.
              </p>
            </div>
          )}
          {/* <img src={item.image} alt={item.name} /> */}
        </div>
      ))}

      <div id="caption">
        <p className="imagesize">{slides[slideIndex - 1].size}</p>
        <p>{slides[slideIndex - 1].name} </p>{" "}
      </div>
      {/* <div id="caption">
        <p>{slides[slideIndex - 1].name} </p>
      </div> */}
      {/* <Caption slides={slides} slideIndex={slideIndex} /> */}
    </>
  );
};

export default Fullimageview;
