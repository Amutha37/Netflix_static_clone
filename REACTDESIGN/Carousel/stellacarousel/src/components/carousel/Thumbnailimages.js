import React from "react";
// import NatureImages from "../Images/Images";
function Thumbnailimages(props) {
  const { slides, currentSlide, status, slideIndex } = props;

  var liClasses = {
    cursor: "cursor",
    activeClass: status[slideIndex] ? "active" : "demo",
  };
  // currentSlide,
  console.log(props);
  return (
    //  <!-- Thumbnail images -->

    <div className="row">
      {slides.NatureImages.map((item) => (
        <div key={item.name} className="column">
          <img
            className={liClasses}
            src={item.image}
            alt={item.name}
            // slideIndex={index}
            // style={{ width: "100%" }}
            id={item.id}
            onClick={currentSlide}
          />
        </div>
      ))}
    </div>
  );
}

export default Thumbnailimages;
