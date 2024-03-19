import { Box, Divider, Link } from "@chakra-ui/react";
import React from "react";
import { capitalizeFirstLetter, display, menuRoutes } from "../../constants";

const MenuMobile = () => {
  return (
    <div>
      <Box mt="3rem" color="#fff" textAlign="center" display={display}>
        <Box>
          {menuRoutes.map((route) => (
            <div>
              <Divider />
              <Link href={route.href} key={route.title}>
                <div className="my-3">{capitalizeFirstLetter(route.title)}</div>
              </Link>
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default MenuMobile;
