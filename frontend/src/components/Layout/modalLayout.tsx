import SignupModal from "../model/SignupModal";
import CallModal from "../model/CallsModal";
import SigninModal from "../model/SignInModel";
import ProfileModal from "../model/ProfileModal";
import { Toaster } from "sonner";

const ModalLayout = () => {
  return (
    <div>
      <SignupModal />
      <CallModal />
      <SigninModal />
      <ProfileModal />
      <Toaster />
    </div>
  );
};

export default ModalLayout;
