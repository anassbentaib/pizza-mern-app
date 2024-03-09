import { useDispatch, useSelector } from "react-redux";
import { closeSignupModal, openSignupModal } from "../redux/model/signupSlice";

const useSignupModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.signupModal.isOpen);
  console.log("🚀 ~ useSignupModal ~ isOpen:", isOpen);

  const onOpen = () => {
    dispatch(openSignupModal());
  };

  const onClose = () => {
    dispatch(closeSignupModal());
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useSignupModal;
