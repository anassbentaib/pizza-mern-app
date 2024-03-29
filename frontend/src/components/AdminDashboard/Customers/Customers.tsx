import Heading from "@/components/Heading/Heading";
import Container from "../components/Container/Container";
import { useSelector } from "react-redux";
import { DataTable } from "@/components/ui/dataTable";
import { columns } from "./Column";

const Customers = () => {
  const { customers } = useSelector((state: any) => state?.customers);
  return (
    <Container>
      <div className="">
        <div className="app_flex text-primaryColor ">
          <Heading
            title={`CUSTOMERS (${customers?.totalUsers || 0})`}
            subTitle="Manage customers for your store"
          />
        </div>
      </div>
      {customers?.totalUsers?.length !== 0 ? (
        <div
          key="customers-table"
          className="w-full h-full text-primaryColor py-10 mt-10"
        >
          <DataTable
            searchKey="email"
            columns={columns}
            data={customers?.users}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center text-whiteColor">
          No Customers found
        </div>
      )}
    </Container>
  );
};

export default Customers;
