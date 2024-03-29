import { FaLock, FaPhone } from "react-icons/fa6";
import {
  capitalizeFirstLetter,
  languagesRoutes,
  menuRoutes,
} from "../../constants";
import useSignupModal from "../../hooks/useSignupModal";
import Container from "../Container/Container";
import { FaUserAlt } from "react-icons/fa";
import useSigninModal from "../../hooks/useSigninModal";
import useCallModal from "../../hooks/useCallModal";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "@/redux/user/userSlice";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      const res = await axios.post("/api/user/signout");
      await res.data;

      dispatch(signoutSuccess());
      // window.location.assign("/sign-in");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const signupModal = useSignupModal();
  const signinModal = useSigninModal();
  const callModal = useCallModal();
  const { currentUser } = useSelector((state: any) => state.user);

  const authRoutes = [
    {
      title: "Request a call",
      icon: FaPhone,
      modal: callModal,
    },
    {
      title: "Sign in ",
      icon: FaLock,
      active: signinModal.isOpen,
      modal: signinModal,
    },

    {
      title: "Create an account",
      active: signupModal.isOpen,
      icon: FaUserAlt,
      modal: signupModal,
    },
  ];

  const loginRoutes = [
    {
      title: currentUser?.email,
      icon: FaUserAlt,
      route: "profile",
    },

    {
      title: "Log out ",
      route: "",
      onClick: handleSignout,
    },
  ];

  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="hidden lg:flex items-center justify-center ">
          <ul className="flex-1 flex justify-center align-center pointer">
            {menuRoutes?.map((item) => (
              <li
                className="mx-[1rem] flex items-center app__flex p-text flex-col "
                key={item?.title}
              >
                <div />
                <a href={`/${item?.href?.split(" ").join("-")}`}>
                  {capitalizeFirstLetter(item?.title)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex-1 flex justify-center align-center pointer">
            {languagesRoutes?.map((item) => (
              <li
                className="mx-[1rem] flex items-center app__flex brown-text  flex-col"
                key={`link-${item?.title} `}
              >
                <a href={`/${item?.title?.split(" ").join("-")}`}>
                  {item?.title?.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {currentUser ? (
          <div className="space-x-1 flex">
            {loginRoutes.map((item) => (
              <div
                key={item.title}
                className={`group p-2 justify-start cursor-pointer app__flex p-text`}
              >
                <a href={`/${item.route}`}>
                  <div
                    className="flex items-center flex-1 px-1"
                    onClick={item.onClick}
                  >
                    {item.icon && (
                      <item.icon className="h-3 w-3 mr-2 brown-text" />
                    )}
                    {item.title}
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-x-1 flex">
            {authRoutes.map((item) => (
              <div
                key={item.title}
                className={`group p-2 justify-start cursor-pointer app__flex p-text ${
                  item?.modal?.isOpen ? "text-yellow-500" : "text-blue-500"
                }`}
                onClick={() => item?.modal?.onOpen()}
              >
                <div className="flex items-center flex-1 px-1">
                  {item.icon && (
                    <item.icon className="h-3 w-3 mr-2 brown-text" />
                  )}
                  {capitalizeFirstLetter(item.title)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
