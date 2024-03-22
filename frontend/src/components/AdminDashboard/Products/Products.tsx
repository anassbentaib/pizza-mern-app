import Heading from "@/components/Heading/Heading";
import Container from "../Container/Container";
import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const router = useNavigate();
  return (
    <Container>
      <div className="">
        <div className="app_flex justify-between text-primaryColor ">
          <Heading
            title={`Products (8)`}
            subTitle="Manage products for your store"
          />
          <Button
            onClick={() => router("/profile/admin_dashboard?tab=create-post")}
          >
            <BiPlus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>
    </Container>
    // <DataTable searchKey="label" />
  );
};

export default Products;
