import React from "react";
import Container from "../Container/Container";
import { capitalizeFirstLetter, foodRoutes } from "../../constants";

const Menu = () => {
  return (
    <Container>
      <div
        className="relative w-full mt-4"
        style={{ fontFamily: "var(--seconday-base)" }}
      >
        <ul className="flex justify-between align-center pointer">
          {foodRoutes?.map((item) => (
            <li
              className="flex items-center subHeading-font md-text flex-col font-semibold  "
              key={item.title}
            >
              <div />
              <a
                href={`/${item?.href?.split(" ").join("-")}`}
                className="hover:border-b-2 hover:border-yellow-500"
              >
                {capitalizeFirstLetter(item?.title)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Menu;
