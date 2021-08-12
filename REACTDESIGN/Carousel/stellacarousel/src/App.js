import React, { useState, useEffect } from "react";

import Thumbnailimages from "./components/carousel/Thumbnailimages";
import Fullimageview from "./components/carousel/Fullimageview";
import Caption from "./components/carousel/Caption";
import NatureImages from "./components/Images/Images";
import "./components/carousel/carousel.css";

function App() {
  //  const [slides, setSlides] = useState(NatureImages);
  const [oldIndex, setOldIndex] = useState(1);
  const [slideIndex, setSlideIndex] = useState(1);
  const [status, setStatus] = useState(
    new Array(NatureImages.NatureImages.length).fill(false)
  );

  useEffect(() => {
    statusUpdate();
  }, []);

  const statusUpdate = () => {
    const copy = [...status];
    console.log(slideIndex, oldIndex);
    if (oldIndex !== slideIndex) {
      copy[oldIndex] = !copy[oldIndex];
      setOldIndex(slideIndex);
    }

    copy[slideIndex] = true;
    setStatus(copy);
    console.log(status);
  };
  // const [captionText, setCaptionText] = useState(slides[1].name);

  // Next/previous controls
  function plusSlides(event) {
    let ind = Number(event.target.value);
    let indd = slideIndex;
    setSlideIndex((indd += ind));
    console.log("ind", ind, "indd", indd);
    let newind = (indd += ind);
    let imgarrlength = NatureImages.NatureImages.length;

    if (ind < 1) {
      console.log(imgarrlength);
      setSlideIndex(imgarrlength);
    }
    if (ind > NatureImages.NatureImages.length) {
      setSlideIndex(1);
    }
    console.log("newind", newind, "slideIndex", slideIndex);
    statusUpdate();
  }

  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}

  // Thumbnail image controls
  const currentSlide = (e) => {
    const num = e.target.id;
    console.log(num);
    setSlideIndex(num);
    statusUpdate();
  };

  return (
    //  <!-- Container for the image gallery -->
    <div className="container">
      <h1>Carousel</h1>
      <Fullimageview
        plusSlides={plusSlides}
        slideIndex={slideIndex - 1}
        slides={NatureImages}
        status={status}
      />
      <Caption />
      <Thumbnailimages
        slides={NatureImages}
        currentSlide={currentSlide}
        status={status}
        slideIndex={slideIndex - 1}
      />
    </div>
  );
}

export default App;
