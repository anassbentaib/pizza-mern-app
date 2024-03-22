import { IoMenuSharp, IoMoonOutline, IoSettingsOutline } from "react-icons/io5";
import SearchInput from "../../SearchInput/SearchInput";
import { user_logo } from "../../../assets";

interface SidebarProps {
  setIsSidebarOpen: any;
  isSidebarOpen: any;
}
const AdminNavbar = ({ setIsSidebarOpen, isSidebarOpen }: SidebarProps) => {
  return (
    <header className="app_flex justify-between px-5 min-h-20 bg-600 shadow-xl">
      <div className="app_flex">
        <IoMenuSharp
          className="mr-2  text-primaryColor  icon-hover"
          size={40}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="w-full min-w-100 md:min-w-300">
          <SearchInput id="search" placeholder="Search..." icon />
        </div>
      </div>
      <div className="app_flex text-primaryColor">
        <div className="icon-hover">
          <IoMoonOutline size={23} />
        </div>
        <div className="icon-hover hidden md:flex">
          <IoSettingsOutline size={23} />
        </div>
        <div className="hidden md:flex">
          <img src={user_logo} alt="logo" className=" h-55  icon-hover" />
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
