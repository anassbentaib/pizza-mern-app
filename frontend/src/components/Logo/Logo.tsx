import { Link } from "@chakra-ui/react";
import { logo } from "../../assets";

interface LogoProps {
  isFlex?: boolean;
}
const Logo = ({ isFlex }: LogoProps) => {
  return (
    <div>
      {isFlex ? (
        <div className="flex items-center py-5">
          <div className="flex items-center justify-center">
            <Link href="/">
              <img
                src={logo}
                className="w-[110px] object-cover cursor-pointer mr-3"
              />
            </Link>
          </div>
          <div className="mt-1 flex items-center justify-center text-center mx-auto">
            <span
              style={{ color: "var(--yellow-color)" }}
              className="font-semibold subHeading-font"
            >
              11:00 - 01:00
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center">
            <Link href="/">
              <img
                src={logo}
                className="w-[190px] object-cover cursor-pointer"
              />
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
      )}
    </div>
  );
};

export default Logo;
