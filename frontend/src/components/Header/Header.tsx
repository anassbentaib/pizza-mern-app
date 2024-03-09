import {
  authRoutes,
  capitalizeFirstLetter,
  languagesRoutes,
  menuRoutes,
} from "../../constants";
import Container from "../Container/Container";

const Header = () => {
  return (
    <div className=" min-h-[40px] pt-1 bg-black">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <ul className="flex-1 flex justify-center align-center pointer">
              {menuRoutes?.map((item) => (
                <li
                  className="mx-[1rem] flex items-center app__flex p-text flex-col "
                  key={`link-${item}`}
                >
                  <div />
                  <a href={`/${item?.href?.split(" ").join("-")}`}>
                    {capitalizeFirstLetter(item?.title)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex-1 flex justify-center align-center pointer">
              {languagesRoutes?.map((item) => (
                <li
                  className="mx-[1rem] flex items-center app__flex brown-text  flex-col"
                  key={`link-${item} `}
                >
                  <a href={`/${item?.title?.split(" ").join("-")}`}>
                    {item?.title?.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-1 flex">
            {authRoutes.map((route) => (
              <a
                href=""
                className=" group p-2  justify-start  cursor-pointer  app__flex p-text"
              >
                <div className="flex items-center flex-1 px-1 ">
                  <route.icon className="h-3 w-3 mr-2 brown-text" />
                  {capitalizeFirstLetter(route?.title)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
