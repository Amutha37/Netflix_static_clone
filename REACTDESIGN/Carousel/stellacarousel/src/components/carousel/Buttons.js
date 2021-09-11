import React from "react";

// Next and previous buttons
function Buttons({ plusSlides }) {
  return (
    <div>
      <button className="prev" value="-1" onClick={plusSlides}>
        {/* &#10094; */}
        ◀︎
      </button>
      <button className="next" value="1" onClick={plusSlides}>
        ►{/* #10095; */}
      </button>
    </div>
  );
}

export default Buttons;
