// import { useState } from "react";

// const data = [
//   "https://img.freepik.com/premium-photo/pi-greek-letter-constant-irrational-number-white-color-pi-red-numbers-stack-3d-illustration_771335-1965.jpg?size=626&ext=jpg",
//   "https://img.freepik.com/free-photo/senior-person-having-fun-night-club_23-2151051597.jpg?size=626&ext=jpg",
//   "https://img.freepik.com/premium-photo/international-woman-day-concept-with-symbol-hands_78895-3505.jpg?size=626&ext=jpg",
//   "https://img.freepik.com/free-photo/easter-celebration-with-dreamy-bunny_23-2151246597.jpg?size=626&ext=jpg",
// ];

// const Images = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const onNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === data.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   const onBack = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   };
//   return (
//     <>
//       <h1 className="text-center py-10">Hello world</h1>
//       <div className="flex items-center justify-center">
//         <button onClick={onBack}>prev</button>
//         <img
//           src={data[currentIndex]}
//           className="h-[45vh] max-h-[45vh] min-h-[45vh]"
//         />

//         <button onClick={onNext}>next</button>
//       </div>
//     </>
//   );
// };

// export default Images;

const data = [
  "https://img.freepik.com/premium-photo/pi-greek-letter-constant-irrational-number-white-color-pi-red-numbers-stack-3d-illustration_771335-1965.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-photo/senior-person-having-fun-night-club_23-2151051597.jpg?size=626&ext=jpg",
  "https://img.freepik.com/premium-photo/international-woman-day-concept-with-symbol-hands_78895-3505.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-photo/easter-celebration-with-dreamy-bunny_23-2151246597.jpg?size=626&ext=jpg",
];

import React, { useState } from "react";

const Images = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const onNext = () => {
    setCurrentImage((index) => (index === data.length - 1 ? 0 : index + 1));
  };
  const onPrev = () => {
    setCurrentImage((index) => (index === 0 ? data.length - 1 : index - 1));
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <button onClick={onPrev}>prev</button>
      <img src={data[currentImage]} className="h-[45vh] px-10 " />
      <button onClick={onNext}>Nexy</button>
    </div>
  );
};

export default Images;
