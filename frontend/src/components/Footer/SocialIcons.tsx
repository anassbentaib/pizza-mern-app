import { Flex, Text } from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div>
      <Flex mt="20px" mb="50px">
        <Link to="/">
          <FiInstagram
            style={{
              cursor: "pointer",
              marginRight: "15px",
              fontSize: "2rem",
              color: "#eb5c5e",
            }}
          />
        </Link>
        <Link to="/">
          <FiTwitter
            style={{
              cursor: "pointer",
              color: "#FBBA00",
              marginRight: "15px",
              fontSize: "2rem",
              background: "",
            }}
          />
        </Link>

        <Link to="/">
          <FiFacebook
            style={{
              cursor: "pointer",
              color: "#318CE7",
              marginRight: "15px",
              fontSize: "2rem",
              background: "",
            }}
          />
        </Link>
      </Flex>
      <Text fontSize="clamp(0.8rem , 1vw , 1rem)">
        © 2014-2023, DADIM — Food delivery service Terms & conditions
      </Text>
    </div>
  );
};

export default SocialIcons;
