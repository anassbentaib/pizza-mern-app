import React from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const currentImage = images[currentImageIndex];

  return (
    <div id="home" className="mb-10 mt-5 pb-10 relative">
      <div className="nt-4 relative w-full">
        {images.map((image, index) => (
          <Link key={index} to={image.link}>
            <div
              key={index}
              className={`relative bg-cover bg-center h-[50vh] sm:h-[50vh] lg:h-[50vh] xl:h-[65vh] ${
                index === currentImageIndex ? "block" : "hidden"
              }`}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${currentImage.image})`,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
// const scrollToSection = (id: any) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };
