import Heading from "../../Heading/Heading";
import { GiPlantRoots } from "react-icons/gi";
interface CardHeaderProps {
  title: string;
}
const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <div className="min-h-[10vh] relative leading-10">
      <Heading title={title} center />
      <div>
        <div className="flex items-center py-2 ">
          <div className="w-full border-b-2 border-gray-500 p-0 m-0" />
          <div className="">
            <GiPlantRoots size={33} className="text-gray-500 mb-2" />
          </div>
          <div className="w-full border-b-2 border-gray-500 p-0 m-0" />
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
{
  /* <GiPlantRoots /> */
}
