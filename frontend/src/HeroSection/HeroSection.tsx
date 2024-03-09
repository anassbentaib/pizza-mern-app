import React from "react";
import { Box, Flex, useMediaQuery, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { images } from "../constants";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(goToNextImage, 1000);
    return () => clearInterval(interval);
  }, []);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <Box id="home">
      <Box
        fontFamily="'PT Serif', serif"
        mt="1rem"
        position="relative"
        w="100%"
        minH="65vh"
      >
        {images.map((image, index) => (
          <Link key={index} to=''>
            <Box
              key={index}
              backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${currentImage.image})`}
              height="120vh"
              maxHeight="500px"
              color="#fff"
              backgroundPosition="center"
              backgroundSize="cover"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              border="1px solid #000"
              padding="0 1rem"
              display={index === currentImageIndex ? "block" : "none"}
              pos="absolute"
              w="100%"
              zIndex="1"
              bg={`url(${image.image})`}
              bgSize="cover"
              bgPos="center"
            ></Box>
          </Link>
        ))}

        <Flex
          position="absolute"
          mx="auto"
          top="13rem"
          left="50%"
          transform="translateX(-50%)"
          justifyContent="space-between"
          w="100%"
        >
          <FaChevronRight />
          <FaChevronRight />
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
