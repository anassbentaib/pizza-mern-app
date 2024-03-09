import { useDispatch, useSelector } from "react-redux";
import { closeSigninModal, openSigninModal } from "../redux/model/signinSlice";

const useSigninModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.signinModal.isOpen);

  const onOpen = () => {
    dispatch(openSigninModal());
  };

  const onClose = () => {
    dispatch(closeSigninModal());
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useSigninModal;
