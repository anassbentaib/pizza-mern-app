import { Link } from "@chakra-ui/react";
import { logo } from "../../assets";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Link href="/">
          <img src={logo} className="w-[190px] object-cover cursor-pointer" />
        </Link>
      </div>
      <div className="mt-1 flex items-center justify-center text-center mx-auto">
        <span className="mr-2 ">Working hours</span>
        <span
          style={{ color: "var(--yellow-color)" }}
          className="font-semibold"
        >
          11:00 - 01:00
        </span>
      </div>
    </div>
  );
};

export default Logo;
