import Heading from "@/components/Heading/Heading";
import Container from "../Container/Container";
import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardProduct from "../CardProduct/CardProduct";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  const router = useNavigate();
  const { products, loading } = useSelector((state: any) => state.products);

  return (
    <Container>
      <div className="app_flex justify-between text-primaryColor ">
        <Heading
          title={`Products (${products?.length || 0})`}
          subTitle="Manage products for your store"
        />
        <Button
          onClick={() => router("/profile/admin_dashboard?tab=create-product")}
        >
          <BiPlus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <div className="w-full h-full text-primaryColor py-10 mt-10">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  2xl:grid-cols-4 gap-7">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index}>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px]  rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : products?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  2xl:grid-cols-4 gap-7">
            {products.map((data: any) => (
              <div key={data._id}>
                <CardProduct data={data} />
              </div>
            ))}
          </div>
        ) : (
          <div className="app_justify">
            No products found, try to create one
          </div>
        )}
      </div>
    </Container>
  );
};

export default Products;

{
  /* <DataTable searchKey="title" columns={columns} data={products} /> */
}
