import Heading from "@/components/Heading/Heading";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import { DataTable } from "@/components/ui/dataTable";
import { columns } from "./Column";

const Customers = () => {
  const { customers, loading } = useSelector((state: any) => state?.customers);
  return (
    <Container>
      <div className="">
        <div className="app_flex text-primaryColor ">
          <Heading
            title={`Customers (${customers?.totalUsers || 0})`}
            subTitle="Manage customers for your store"
          />
        </div>
      </div>
      <div className="w-full h-full text-primaryColor py-10 mt-10">
        <DataTable
          searchKey="email"
          columns={columns}
          data={customers?.users}
        />
      </div>
    </Container>
  );
};

export default Customers;
