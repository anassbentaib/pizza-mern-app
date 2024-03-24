import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useSignupModal from "../../hooks/useSignupModal";
import { useCallback, useState } from "react";
import Input from "../Inputs/Input";
import Modal from "./Modal";
import axios from "axios";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import useSigninModal from "../../hooks/useSigninModal";
import CountrySelect from "../Inputs/CountrySelect";

const SignupModal = () => {
  const signupModal = useSignupModal();
  const signinModal = useSigninModal();

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var password = /^.{8,50}$/;
  var name = /^.{6,20}$/;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      country: "",
    },
  });
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const country = watch("country");

  const onToggle = useCallback(() => {
    signupModal.onClose();
    signinModal.onOpen();
  }, [signupModal]);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setErrorMessage(null);
    const country = data?.country?.value;
    const newData = await { ...data, country };
    try {
      await axios.post("/api/auth/signup", newData);

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
        <CountrySelect
          value={country}
          onChange={(value: any) => setCustomValue("country", value)}
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
