import { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";

import { imagesSlice } from "../../constants";
import Button from "../Button/Button";

function FeatureSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesSlice.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = imagesSlice[currentImageIndex];

  return (
    <div
      key={currentImageIndex}
      className={`relative bg-cover bg-center h-[50vh] sm:h-[50vh] lg:h-[50vh] xl:h-[65vh] flex items-center justify-center text-white text-center ${
        currentImageIndex === currentImageIndex ? "block" : "hidden"
      }`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${currentImage.image})`,
      }}
    >
      <div className="w-full max-w-full md:max-w-[500px] px-5">
        <p className="text-lg md:text-xl lg:text-4xl font-bold mt-5 mb-5">
          {currentImage.title}
        </p>
        {/* <Divider borderBottom="3px solid #ffff" /> */}
        <p className="text-md md:text-lg lg:text-lg mt-5 mb-5">
          {currentImage.span}
        </p>

        <p className="text-md md:text-lg lg:text-lg  mt-5 mb-5">
          {currentImage.description}
        </p>
        <Button label="See more" onClick={() => {}} outline />
      </div>
    </div>
  );
}

export default FeatureSlider;
