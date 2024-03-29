import Heading from "@/components/Heading/Heading";
import { useSelector } from "react-redux";
import Container from "../components/Container/Container";
import GeographyChart from "./geographyChart";

const Geography = () => {
  const { geography } = useSelector((state: any) => state.geography);

  return (
    <Container>
      <Heading
        title={`GEOGRAPHY (${geography?.length || 0} country)`}
        subTitle="Find where your users are located."
      />
      <div className="mt-4 h-[75vh] border border-secondary-200 rounded-sm">
        {geography?.length ? (
          <GeographyChart geography={geography} />
        ) : (
          <div className="app_justify text-whiteColor h-full">
            <div className="app_justify">No Countries found.</div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Geography;
