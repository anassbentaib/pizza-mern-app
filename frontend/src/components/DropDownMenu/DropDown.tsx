import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosMore } from "react-icons/io";

const DropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="icon-hover focus:outline-none focus:border-none">
        <IoIosMore />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-3">
        <DropdownMenuItem className="cursor-pointer">
          Delete product
        </DropdownMenuItem>
        <DropdownMenuItem>Updatte product</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
