import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useSignupModal from "../../hooks/useSearchModal";
import { useCallback, useState } from "react";
import Heading from "../Heading/Heading";
import Input from "../Inputs/Input";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button/Button";
import { AiFillGithub } from "react-icons/ai";
import Modal from "./Modal";

const SignupModal = () => {
  const signupModal = useSignupModal();
  console.log("🚀 ~ SignupModal ~ signupModal:", signupModal.isOpen);

  const [isByEmail, setIsByEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
  });
  const onToggle = useCallback(() => {
    signupModal.onClose();
    signupModal.onOpen();
  }, [signupModal]);
  const onSubmit = () => {};
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        text="Your name"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        text="E-mail"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        text="Password"
        type="password"
        disabled={loading}
        register={register}
        errors={errors}
        required
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
          Already have an account?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            Log in
          </span>
        </p>
      </div>
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
