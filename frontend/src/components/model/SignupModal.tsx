import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useSignupModal from "../../hooks/useSignupModal";
import { useCallback, useState } from "react";
import Input from "../Inputs/Input";
import Modal from "./Modal";
import axios from "axios";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import useSigninModal from "../../hooks/useSigninModal";

const SignupModal = () => {
  const signupModal = useSignupModal();
  const signinModal = useSigninModal();

  const [errorMessage, setErrorMessage] = useState(null);
  console.log("🚀 ~ SignupModal ~ errorMessage:", errorMessage);
  const [loading, setLoading] = useState(false);
  var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var password = /^.{8,50}$/;
  var name = /^.{6,20}$/;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onToggle = useCallback(() => {
    signupModal.onClose();
    signinModal.onOpen();
  }, [signupModal]);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      await axios.post("/api/auth/signup", data);

      signupModal.onClose();
      reset();
      signinModal.onOpen();
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        pattern={name}
        id="name"
        message="The name must be between 6 and 20 characters"
        text="Your name"
        disabled={loading}
        placeholder="Johnoe "
        register={register}
        errors={errors}
        required
        icon
      />
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
        id="password"
        text="Password"
        type="password"
        disabled={loading}
        register={register}
        placeholder="********"
        errors={errors}
        required
        pattern={password}
        icon
        message="Minimum eight characters"
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />

      <div
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>
          Don't have an account?{" "}
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            login
          </span>
        </p>
      </div>
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
      isOpen={signupModal.isOpen}
      title="Create your account
      "
      actionLabel="Continue"
      onClose={signupModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default SignupModal;
