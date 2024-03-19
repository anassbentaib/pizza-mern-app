import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { backgroundImage } from "../../assets";
import Menu from "../Menu/Menu";
import HeaderMenu from "../Header/HeaderMenu";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="w-full h-full relative">
      <div
        className="min-h-screen relative max-w-full w-full  pb-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className="min-screen max-w-full w-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="relative z-10">
            <div className=" min-h-[40px] pt-1 bg-black hidden md:block">
              <Header />
            </div>
            <div className=" min-h-[40px] pt-1 flex md:hidden">
              <HeaderMenu />
            </div>
            <Navbar />
            <div className=" min-h-[40px] pt-1 hidden lg:block">
              <Menu />
            </div>
            <div className="">
              <Outlet />
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
