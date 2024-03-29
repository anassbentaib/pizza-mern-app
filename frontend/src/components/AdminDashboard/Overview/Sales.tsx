import Heading from "@/components/Heading/Heading";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import OverViewChart from "../components/OverviewChart/overViewChart";

const Sales = () => {
  const { sales } = useSelector((state: any) => state.sales);
  console.log("🚀 ~ Sales ~ sales:", sales);
  const [view, setView] = useState("units");

  return (
    <div className="my-[1.5rem] mx-[2.5rem]">
      <Heading
        title="OVERVIEW"
        subTitle="Overview of general revenue and profit"
      />
      <div className="h-[75vh]">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel htmlFor="">View</InputLabel>
          <Select
            value={view}
            label="view"
            onChange={(e: any) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverViewChart view={view} isDashboard={false} sales={sales} />
      </div>
    </div>
  );
};

export default Sales;
