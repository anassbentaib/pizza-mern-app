import useSignupModal from "../../hooks/useSearchModal";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <Container>
      <div
        className="flex items-center justify-between  py-6 border-b-2 border-gray-100 border-opacity-50"
        style={{ color: "var(--primary-color)" }}
      >
        <Heading
          title="+994 12-595-7447"
          subTitle="from all operators"
          span="*7447 "
        />
        <div>
          <Logo />
        </div>
        <div>
          <Search />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
