import React from "react";
// import NatureImages from "../Images/Images";
import Buttons from "./Buttons";
function Thumbnailimages(props) {
  const { slides, currentSlide, status, plusSlides } = props;

  // console.log(props);

  return (
    //  <!-- Thumbnail images -->

    <div className="row">
      {slides.map((item, i) => (
        <div key={i} className="column">
          <img
            className={`cursor ${status[i] ? "active" : "demo"}`}
            src={item.image}
            alt={item.name}
            // style={{ width: "100%" }}
            id={item.id}
            onClick={currentSlide}
          />
          {/* note symbol for the last image */}
          <div className="notesymbol">
            <i class="fas fa-align-justify"></i>
          </div>
        </div>
      ))}
      <div className="nexprearrow">
        <Buttons plusSlides={plusSlides} />
      </div>
    </div>
  );
}

export default Thumbnailimages;
