import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AdminNavbar from "../AdminDashboard/AdminNavbar/adminNavbar";
import { useEffect, useState } from "react";
import Dashboard from "../AdminDashboard/Dashboard/Dashboard";
import Products from "../AdminDashboard/Products/Products";
import CreatePost from "../AdminDashboard/CreatePost/CreatePost";

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="h-full relative">
      <div
        className={`${
          isSidebarOpen ? "fixed" : "hidden"
        } h-full flex w-72 flex-col  insety-0 z-50  bg-500 text-primaryColor `}
      >
        <Sidebar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <main
        className={`pb-10 bg-600 min-h-screen ${
          isSidebarOpen ? "md:pl-72" : "md:pl-0 "
        }`}
      >
        <AdminNavbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        {tab === "dashboard" && <Dashboard />}
        {tab === "products" && <Products />}
        {tab === "create-post" && <CreatePost />}
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
