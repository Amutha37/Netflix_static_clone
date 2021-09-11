import React from "react";

const Caption = ({ slides, slideIndex }) => {
  return (
    <>
      {/* <!-- Image text --> */}
      <div className="caption-container">
        <p id="caption">{slides[slideIndex - 1].name} </p>
      </div>
    </>
  );
};

export default Caption;
