import { useDispatch, useSelector } from "react-redux";
import { closeCallModal, openCallModal } from "../redux/modals/CallSlice";

const useCallModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.callModal.isOpen);

  const onOpen = () => {
    dispatch(openCallModal());
  };

  const onClose = () => {
    dispatch(closeCallModal());
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useCallModal;
