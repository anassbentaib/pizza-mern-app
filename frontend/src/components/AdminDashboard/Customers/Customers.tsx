import Heading from "@/components/Heading/Heading";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "@/components/ui/dataTable";
import { columns } from "./Column";
import { useEffect, useState } from "react";
import {
  getCustomersFailure,
  getCustomersStart,
  getCustomersSuccess,
} from "@/redux/customers/CustomersSlice";
import axios from "axios";

const Customers = () => {
  const [costumers, setCostumers] = useState<any | null>([]);
  const dispatch = useDispatch();
  const fetchCustomers = async () => {
    try {
      // dispatch(getCustomersStart());
      const customers = await axios.get("/api/customers/get-customers");
      const data = await customers.data;
      setCostumers(data);
      // dispatch(getCustomersSuccess(data));
    } catch (error: any) {
      // dispatch(getCustomersFailure(error.message));
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [dispatch]);
  return (
    <Container>
      <div className="">
        <div className="app_flex text-primaryColor ">
          <Heading
            title={`Customers (${costumers?.totalUsers || 0})`}
            subTitle="Manage customers for your store"
          />
        </div>
      </div>
      <div className="w-full h-full text-primaryColor py-10 mt-10">
        <DataTable
          searchKey="email"
          columns={columns}
          data={costumers?.users}
        />
      </div>
    </Container>
  );
};

export default Customers;
