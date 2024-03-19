import { useDispatch, useSelector } from "react-redux";
import {
  closeProfileModal,
  openProfileModal,
} from "../redux/modals/profileSlice";

const useProfileModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.profileModal.isOpen);

  const onOpen = () => {
    dispatch(openProfileModal());
  };

  const onClose = () => {
    dispatch(closeProfileModal());
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useProfileModal;
