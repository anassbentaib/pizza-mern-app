import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FooterInfo = () => {
  return (
    <div>
      <Flex justifyContent="space-between" flex="2">
        <Box>
          <Flex mb="px" align="center" fontSize="clamp(1rem , 1.6vw , 1.7rem)">
            <Text color="#eb5c5e">+212 &nbsp;</Text>
            <Text fontWeight="bold"> 61 432 2459</Text>
          </Flex>
          <Text mb="8px" fontSize="clamp(0.8rem , 1vw , 1rem)">
            *212 from all operators
          </Text>
          <Text mb="10px" fontSize="clamp(0.8rem , 1vw , 1rem)">
            Daily 11:00 - 01:00
          </Text>

          <Text mb="0px" fontSize="clamp(0.8rem , 1vw , 1rem)">
            Baku, Narimanov district, Heydar Aliyev ave., 103 info@pizza.az
          </Text>
          <Text mb="10px" color="#eb5c5e" fontSize="clamp(0.8rem , 1vw , 1rem)">
            All branches
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default FooterInfo;
