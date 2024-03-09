import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { backgroundImage } from "../../assets";
import Menu from "../Menu/Menu";

const Layout = () => {
  return (
    <div className="w-full h-full relative">
      <div
        className="min-] relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "400vh",
        }}
      >
        {/* <div className="absolute">
          <img src={m1} alt="Background Image" className="w-full h-full" />
        </div>
        <div className="absolute l">
          <img src={tomat} alt="Background Image" className="w-full h-full" />
        </div> */}
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
  );
};

export default Layout;
