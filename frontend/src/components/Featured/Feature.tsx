import { Box, Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { featuredData } from "../../constants";

const Feature = () => {
  return (
    <div>
      <div className="mt-8 text-white w-full flex items-center justify-center mx-auto relative min-h-[20vh] font-serif">
        <div className="max-w-full md:max-w-[80%] w-full">
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
            {featuredData.map((data) => (
              <div key={data.title}>
                <Card bg="transparent">
                  <CardBody color="#fff" boxShadow="none">
                    <Link to="/about">
                      <img
                        src={data.img}
                        alt={data.title}
                        className="h-20 md:h-[120px] mx-auto cursor-pointer max-w-full sm:max-w-[70%] md:max-w-[90%] lg:max-w-full"
                      />
                    </Link>
                    <h1 className="mt-5 text-center">{data.title}</h1>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
