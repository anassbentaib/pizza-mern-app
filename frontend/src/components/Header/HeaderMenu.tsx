import React from "react";
import Container from "../Container/Container";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo/Logo";
import { SlMenu } from "react-icons/sl";

const HeaderMenu = () => {
  return (
    <div className="w-full h-full  border-b-2 border-gray-100 border-opacity-50">
      <Container>
        <div className="w-full h-full flex items-center justify-between p-text">
          <div className="border-r-2 border-gray-100 border-opacity-50">
            <SlMenu size={45} className="mr-4 p-2 text-white text-opacity-80" />
          </div>
          <div className="flex justify-start">
            <Logo isFlex />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderMenu;
