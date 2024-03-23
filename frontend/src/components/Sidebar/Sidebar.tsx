import { useEffect, useState } from "react";
import { navItems } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { logo, user_logo } from "../../assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

interface SidebarProps {
  setIsSidebarOpen: any;
  isSidebarOpen: any;
}
const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }: SidebarProps) => {
  const { pathname } = useLocation();

  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <div className="relative h-full">
      <div className="my-6  app_justify">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className=" h-7 object-cover cursor-pointer"
        />
        <div
          className="icon-hover md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaChevronLeft className="w-3 h-3   " />
        </div>
      </div>
      <div className="mt-3 mb-3">
        {navItems.map(({ text, icon }) => {
          if (!icon) {
            return (
              <h1 key={text} className="text-13 py-4 mx-7 text-yellow">
                {text}
              </h1>
            );
          }
          const lcText = text.toLowerCase();
          return (
            <ul key={text}>
              <a
                onClick={() => {
                  navigate(`?tab=${lcText}`);
                  setActive(lcText);
                }}
                className={`app_flex space-x-3 ml-2 items-center cursor-pointer text-13 
                 ${active === lcText ? "text-blackColor" : "text-primaryColor"}
                 ${active === lcText ? "bg-yellow" : "transparent"}`}
              >
                <div
                  className={`m-3 ml-4 text-13  ${
                    active === lcText ? "text-blackColor" : "text-yellow"
                  }`}
                >
                  {icon}
                </div>
                <div>{text}</div>
                {active === lcText && (
                  <FaChevronRight className="absolute right-3" />
                )}
              </a>
            </ul>
          );
        })}
      </div>
      <div className=" border-t-2 py-2" />
      <div className=" app_flex mb-10">
        <div className="app_flex text-yellow ">
          <div>
            <img src={user_logo} alt="logo" className=" h-55  icon-hover" />
          </div>
          <div className="icon-hover">
            <IoSettingsOutline size={23} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
