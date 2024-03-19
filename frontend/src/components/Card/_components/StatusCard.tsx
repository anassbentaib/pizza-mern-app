import { Box, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/react";
import { status } from "../../../assets";

const StatusCard = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full border border-gray-300">
        <div className="p-5 flex-col">
          <div className="flex items-center font-semibold ">
            <span>Status:</span>
            <span className="mx-1 p-1 bg-red-500 text-white  rounded-full text-[12px]">
              0%
            </span>
            <span>Start</span>
          </div>
          <div className="py-5 ">
            <img
              src={status}
              className="w-full h-full object-cover bg-center"
            />
            <div>
              <p className="text-[13px] my-3">
                For «<span className="font-bold">Bronze</span>» status you need
                to order{" "}
                <span className="text-[#eb5c5e] font-bold ">500 AZN </span>more
              </p>
              <RangeSlider
                aria-label={["min", "max"]}
                defaultValue={[0, 100]}
                mb="20px"
              >
                <RangeSliderTrack bg="red.100">
                  <RangeSliderFilledTrack bg="tomato" />
                </RangeSliderTrack>

                <RangeSliderThumb boxSize={6} index={0}>
                  <Box color="#000" fontSize="13px">
                    0
                  </Box>
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={6} index={1}>
                  <Box color="#000" fontSize="13px">
                    5%
                  </Box>
                </RangeSliderThumb>
              </RangeSlider>
              <div className="w-full h-full border border-gray-300 p-2 text-[12px] ">
                Next status will enreach your discount for 5% more Your discount
                <br />
                will be <span className="text-[#eb5c5e] font-bold">5%</span>!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
