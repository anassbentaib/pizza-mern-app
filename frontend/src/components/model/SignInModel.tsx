import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import Input from "../Inputs/Input";
import Modal from "./Modal";
import axios from "axios";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import useSigninModal from "../../hooks/useSigninModal";
import useSignupModal from "../../hooks/useSignupModal";
import { useDispatch } from "react-redux";
import {
  signInFailure,
  signInSuccess,
  signinStart,
} from "../../redux/user/userSlice";

const SigninModal = () => {
  const signinModal = useSigninModal();
  const signupModal = useSignupModal();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
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
      email: "",
      password: "",
    },
  });
  const onToggle = useCallback(() => {
    signinModal.onClose();
    signupModal.onOpen();
  }, [signinModal]);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      dispatch(signinStart());
      const response = await axios.post("/api/auth/signin", data);
      const result = await response.data;
      dispatch(signInSuccess(result));

      signinModal.onClose();
      reset();
    } catch (error: any) {
      dispatch(signInFailure(error?.response?.data?.message));
      setErrorMessage(error?.response?.data?.message);
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
            Signup
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
      isOpen={signinModal.isOpen}
      title="Login to your account"
      actionLabel="Continue"
      onClose={signinModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default SigninModal;
