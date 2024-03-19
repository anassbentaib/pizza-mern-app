import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import {  Logo3 } from "../../assets";
import { display } from "../../constants";


const FooterIcons = () => {
  return (
    <div>
      <Box color="#ffff" mt="2rem" display={display}>
        <Flex align="center" justify="center">
          <Box>
            <Flex align="center" justify="center" mb="30px">
              <FiInstagram
                style={{
                  marginRight: "15px",
                  fontSize: "2rem",
                  color: "#eb5c5e",
                }}
              />
              <FiTwitter
                style={{
                  color: "#FBBA00",
                  marginRight: "15px",
                  fontSize: "2rem",
                  background: "",
                }}
              />
              <FiFacebook
                style={{
                  color: "#318CE7",
                  marginRight: "15px",
                  fontSize: "2rem",
                  background: "",
                }}
              />
            </Flex>
            <Flex align="center" justify="center">
              <Text
                w="50%"
                textAlign="center"
                fontSize="clamp(1rem , 1.2vw , 1.2rem)"
                mb="30px"
              >
                © 2014-2023, DADIM — Food delivery service Terms & conditions
              </Text>
            </Flex>
            <Box>
              <Flex
                fontSize="clamp(1rem , 1.2vw , 1.2rem)"
                textAlign="center"
                justify="center"
              >
                <Image src={Logo3} alt="logo" h="30px" />
                <Text fontWeight="bold">anass bentaib' &nbsp;</Text>
                <Box>
                  <Text>— site development</Text>
                  <Text color="#eb5c5e">More about project</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default FooterIcons;
