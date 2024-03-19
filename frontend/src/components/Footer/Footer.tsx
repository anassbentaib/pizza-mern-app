import { Box, Divider, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { Logo2, Logo3 } from "../../assets";
import { Link } from "react-router-dom";
import {  email, foodRoutes } from "../../constants";
import Button from "../Button/Button";
import Input from "../Inputs/Input";
import { FieldValues, useForm } from "react-hook-form";
import MenuMobile from "./MenuMobile";
import FooterIcons from "./FooterIcons";
import SocialIcons from "./SocialIcons";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      phone: "",
      time: "",
      name: "",
    },
  });

  return (
    <div>
      <MenuMobile />
      <FooterIcons />
      <Box
        mt="7rem"
        display={{
          base: "none",
          sm: "none",
          md: "none",

          lg: "block",
          xl: "block",
        }}
      >
        <>
          <Divider />
          <Box
            maxW="6xl"
            mx="auto"
            pos="relative"
            mt="2rem"
            color="#fff"
            w="100%"
            minH="20vh"
            fontFamily="'PT Serif', serif"
          >
            <Box
              as="section"
              maxW="6xl"
              mx="auto"
              mt="40px"
              minHeight="20vh"
              p="20px"
            >
              <Flex color="#fff" alignItems="center" justify="space-between">
                <Flex>
                  <Flex justifyContent="space-between" flex="2">
                    <Box>
                      <Link to="/">
                        <Image
                          src={Logo2}
                          alt="logo"
                          objectFit="cover"
                          h="30px"
                          mb="1rem"
                        />
                      </Link>
                      <Text mb="10px" fontSize="clamp(0.8rem , 1vw , 1rem)">
                        Working hours
                      </Text>
                      <Text
                        mb="10px"
                        color="#FBBA00"
                        fontWeight="bold"
                        fontSize="clamp(0.8rem , 1vw , 1rem)"
                      >
                        11:00 - 01:00
                      </Text>
                      <SocialIcons />
                    </Box>
                  </Flex>
                  <Spacer />
                  <Flex justify="space-between" flex="1">
                    <Box>
                      {foodRoutes.map((route) => (
                        <Link to={route.href} key={route.title}>
                          <Text
                            transition="0.3s ease-in-out"
                            mb="10px"
                            _hover={{
                              color: "#FBBA00",
                              transition: "0.3s ease-in-out",
                            }}
                          >
                            {route.title}
                          </Text>
                        </Link>
                      ))}
                    </Box>
                  </Flex>
                  <Spacer />

                  <Flex justifyContent="space-between" flex="5">
                    <FooterInfo />
                    <Flex justifyContent="space-between" flex="2">
                      <Box>
                        <form onSubmit={() => {}}>
                          <Input
                            id="email"
                            text="E-mail"
                            register={register}
                            errors={errors}
                            placeholder="name@company.com"
                            required
                            pattern={email}
                            icon
                            message="Invalid email"
                          />
                          <Button label="Subscribe" onClick={() => {}} />
                        </form>

                        <Box mt="6rem">
                          <Flex fontSize="clamp(0.8rem , 1vw , 1rem)">
                            <Image
                              src={Logo3}
                              alt="logo"
                              objectFit="cover"
                              h="30px"
                            />
                            <Text
                              fontSize="clamp(0.8rem , 0.9vw , 0.9rem)"
                              fontWeight="bold"
                            >
                              anass bentaib' &nbsp;
                            </Text>
                            <Box>
                              <Text fontSize="clamp(0.8rem ,  0.9vw , 0.9rem)">
                                — site development
                              </Text>
                              <Link
                                to="https://beanass.dev"
                                target="_blank"
                                fontSize="clamp(0.8rem , 1vw , 1rem)"
                                color="#eb5c5e"
                              >
                                More about project
                              </Link>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </>
      </Box>
    </div>
  );
};

export default Footer;

////// 350
