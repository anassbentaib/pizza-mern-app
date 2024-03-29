import Container from "../components/Container/Container";
import BreakDownChart from "../components/breakDownChart/breakDownChart";
import Heading from "@/components/Heading/Heading";

const BreakDown = () => {
  return (
    <Container>
      <div className="my-[1.5rem] mx-[2.5rem]">
        <Heading title="BREAKDOWN" subTitle="Breakdown of Sales by Category" />
        <div className="mt-[40px] h-[75vh]">
          <BreakDownChart />
        </div>
      </div>
    </Container>
  );
};

export default BreakDown;
