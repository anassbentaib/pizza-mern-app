import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../Inputs/Input";
import Modal from "./Modal";
import axios from "axios";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import useCallModal from "../../hooks/useCallModal";

const CallModal = () => {
  const callModal = useCallModal();

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var phone = /^.{8,15}$/;
  var name = /^.{6,20}$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      phone: "",
      time: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      await axios.post("/api/auth/call", data);
      callModal.onClose();
      setErrorMessage(null);
      reset();
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        text="Your name"
        disabled={loading}
        register={register}
        errors={errors}
        placeholder="Jhon doe"
        pattern={name}
        required
        icon
        message="Invalid name"
      />
      <Input
        id="phone"
        text="Phone number"
        type="number"
        disabled={loading}
        register={register}
        placeholder="Your phone number"
        errors={errors}
        required
        pattern={phone}
        icon
        message="Minimum 8 numbers"
      />
      <Input
        id="time"
        text="Perfect time for call        "
        disabled={loading}
        register={register}
        errors={errors}
        placeholder="E.g. 08:00 till 18:30"
        pattern={email}
        required
        icon
        message="Invalid time"
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
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
      isOpen={callModal.isOpen}
      title="Request a call      "
      actionLabel="Send"
      onClose={callModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default CallModal;
