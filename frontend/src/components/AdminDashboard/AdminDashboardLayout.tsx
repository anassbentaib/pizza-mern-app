import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AdminNavbar from "./components/AdminNavbar/adminNavbar";
import { useEffect, useState } from "react";
import Dashboard from "../AdminDashboard/Dashboard/Dashboard";
import Products from "../AdminDashboard/Products/Products";
import CreateProduct from "./CreateProduct/CreateProduct";
import { useDispatch } from "react-redux";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "@/redux/products/productsSlice";
import axios from "axios";
import Customers from "./Customers/Customers";
import {
  getCustomersFailure,
  getCustomersStart,
  getCustomersSuccess,
} from "@/redux/customers/CustomersSlice";
import Geography from "./Geography/geography";
import {
  getGeographyFailure,
  getGeographyStart,
  getGeographySuccess,
} from "@/redux/geography/geography";
import {
  getSalesFailure,
  getSalesStart,
  getSalesSuccess,
} from "@/redux/sales/SalesSlice";
import Sales from "./Overview/Sales";
import Daily from "./daily/daily";
import Monthly from "./monthly/monthly";
import BreakDown from "./breakDown/breakDown";

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      dispatch(getProductStart());
      const products = await axios.get("/api/products/get-products");
      const data = await products.data;
      dispatch(getProductSuccess(data));
    } catch (error: any) {
      dispatch(getProductFailure(error.message));
    }
  };

  const fetchSales = async () => {
    try {
      dispatch(getSalesStart());
      const products = await axios.get("/api/sales/get-sales");
      const data = await products.data;
      dispatch(getSalesSuccess(data));
    } catch (error: any) {
      dispatch(getSalesFailure(error.message));
    }
  };
  const fetchCustomers = async () => {
    try {
      dispatch(getCustomersStart());
      const customers = await axios.get("/api/customers/get-customers");
      const data = await customers.data;
      dispatch(getCustomersSuccess(data));
    } catch (error: any) {
      dispatch(getCustomersFailure(error.message));
    }
  };
  const fetchGeographies = async () => {
    try {
      dispatch(getGeographyStart());
      const customers = await axios.get("/api/geography");
      const data = await customers.data;
      dispatch(getGeographySuccess(data));
    } catch (error: any) {
      dispatch(getGeographyFailure(error.message));
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCustomers();
    fetchGeographies();
    fetchSales();
  }, [dispatch]);
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
        className={`pb-10 bg-700 min-h-screen ${
          isSidebarOpen ? "md:pl-72" : "md:pl-0 "
        }`}
      >
        <AdminNavbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        {tab === "dashboard" && <Dashboard />}
        {tab === "products" && <Products />}
        {tab === "customers" && <Customers />}
        {tab === "geography" && <Geography />}
        {tab === "overview" && <Sales />}
        {tab === "daily" && <Daily />}
        {tab === "monthly" && <Monthly />}
        {tab === "breakdown" && <BreakDown />}
        {tab === "create-product" && <CreateProduct />}
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
