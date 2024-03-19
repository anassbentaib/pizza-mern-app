import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import Input from "../Inputs/Input";
import Modal from "./Modal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useProfileModal from "../../hooks/useProfileModal";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../../redux/user/userSlice";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { toast } from "sonner";

const ProfileModal = () => {
  const profileModal = useProfileModal();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.user);

  const [errorMessage, setErrorMessage] = useState<any | null>(null);
  console.log("🚀 ~ ProfileModal ~ errorMessage:", errorMessage);
  const [loading, setLoading] = useState(false);
  var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var password = /^.{8,50}$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      email: currentUser?.email || "",
      name: currentUser?.name || "",
      phone: currentUser?.phone || "",
      close: currentUser?.birthdate || "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setErrorMessage(null);
    const hasChanges =
      data.email !== currentUser?.email ||
      data.name !== currentUser?.name ||
      data.phone !== currentUser?.phone ||
      data.birthdate !== currentUser?.birthdate;

    if (!hasChanges) {
      setErrorMessage("No changes made");
      setLoading(false);
      return;
    }
    try {
      dispatch(updateStart());
      const response = await axios.put(
        `/api/user/update-user/${currentUser?._id}`,
        data
      );
      const result = await response.data;
      dispatch(updateSuccess(result));

      profileModal.onClose();
      toast.success("User updated successfully");
      reset();
    } catch (error: any) {
      dispatch(updateFailure(error?.response?.data?.message));
      setErrorMessage(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="email"
        text="E-mail"
        disabled={loading}
        register={register}
        errors={errors}
        placeholder="name@company.com"
        pattern={email}
        required
        icon
        message="Invalid email"
      />
      <Input
        id="name"
        text="Your name"
        type="text"
        disabled={loading}
        register={register}
        placeholder="jhon doe"
        errors={errors}
        required
        pattern={password}
        icon
        message="Minimum eight characters"
      />
      <Input
        id="phone"
        text="Phone number"
        type="number"
        disabled={loading}
        register={register}
        placeholder="ex: +212 "
        errors={errors}
        pattern={password}
        icon
        message="Minimum 12 characters"
      />
      {/* hhhdhdhh@ddd.vd */}
      <Input
        id="birthdate"
        text="Your birthdate"
        type="date"
        disabled={loading}
        register={register}
        errors={errors}
        pattern={password}
        message=""
      />{" "}
    </div>
  );

  const footerContet = (
    <div>
      {errorMessage && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle fontSize="sm" fontWeight="500">
            {errorMessage || "Internal error"}
          </AlertTitle>
        </Alert>
      )}
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={profileModal.isOpen}
      title="Personal information"
      actionLabel="Save"
      onClose={profileModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContet}
    />
  );
};

export default ProfileModal;
