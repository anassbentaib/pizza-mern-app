import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { backgroundImage } from "../../assets";
import Menu from "../Menu/Menu";

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
            <Header />
            <Navbar />
            <Menu />
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
