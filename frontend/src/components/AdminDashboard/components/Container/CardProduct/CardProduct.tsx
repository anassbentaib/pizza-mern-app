import CardItem from "./Card";
import { Rating } from "@mui/material";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import DropDown from "@/components/DropDownMenu/DropDown";

interface CardProductProps {
  data: any;
}
const CardProduct = ({ data }: CardProductProps) => {
  const header = (
    <div className="w-full h-full relative flex flex-col">
      <div className="app_flex justify-between">
        <span className="text-secondary-700 text-13 ">{data?.type}</span>
        <DropDown />
      </div>
      <span className="text-lg pt-2 font-normal">{data?.title}</span>
      <span className="text-13 pt-1 font-medium text-secondary-400">
        ${data?.price}
      </span>
    </div>
  );
  const content = (
    <div className="w-full h-full relative flex flex-col">
      <div className="py-2">
        <Rating value={data?.rating} readOnly />
      </div>
      <span className="text-12 pt-1 font-medium ">{data?.description}</span>
    </div>
  );
  const footer = (
    <Collapsible>
      <CollapsibleTrigger className="text-12 py-3 pb-3 button-hover">
        SEE MORE
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-2">
        <span className="text-13 text-neutral-300">id: {data?._id}</span>
        <span className="text-13 text-neutral-300">
          Supply Left: {data?.supply}
        </span>

        <span className="text-13 text-neutral-300">
          Yearly Sales This Year:
        </span>
        <span className="text-13 text-neutral-300">
          Yearly Units Sold This Year:
        </span>
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <div>
      <CardItem header={header} footer={footer} content={content} />
    </div>
  );
};

export default CardProduct;
