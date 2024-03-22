import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { PiWarningCircleBold } from "react-icons/pi";

interface InputProps {
  id: string;
  text?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  icon?: boolean;
  placeholder?: string;
  FormatPrice?: boolean;
  pattern: RegExp;
  value?: string;
  message: string;
}

const Input: React.FC<InputProps> = ({
  id,
  text,
  placeholder,
  value,
  icon,
  type,
  disabled,
  message,
  pattern,
  required,
  register,
  FormatPrice,

  errors,
}) => {
  return (
    <div className="w-full relative text-blackColor">
      {FormatPrice && (
        <BiDollar
          size={20}
          className="text-neutral-700 absolute top-3 left-1"
        />
      )}
      {errors[id] && icon && (
        <PiWarningCircleBold
          size={20}
          className="absolute top-7 right-2 text-errorColor mt-2"
        />
      )}
      <label
        htmlFor={text}
        className={`
              ${errors[id] && "text-errorColor placeholder:text-errorColor"}
    text-start  font-semibold text-14 text-gray-900
    ${errors[id] ? "text-errorColor" : "text-black"}
    `}
      >
        {text}
      </label>
      <input
        id={id}
        value={value}
        disabled={disabled}
        {...register(id, {
          required,
          pattern: {
            value: pattern,
            message: message,
          },
        })}
        placeholder={placeholder}
        type={type}
        className={`
          peer
          w-full
          text-sm
          p-3
          bg-white
          border
          placeholder-gray-500       
          ${errors[id] && "placeholder-errorColor"}
          ${FormatPrice && "pl-6 text-md font-semibold"}

          font-500
          outline-none
          transition
          disabled:opacity-70
          disabled-cursor-not-allowed

          ${errors[id] ? "border-errorColor" : "border-black"}
          ${
            errors[id]
              ? "focus:border-errorColor"
              : "focus:border-black focus:border"
          }
          ${errors[id] && "bg-errorColor "}
          ${errors[id] && "bg-opacity-60"}
          ${errors[id] && "text-black"}

  `}
      />
      {errors[id] && <span className="text-sm text-errorColor">{message}</span>}
    </div>
  );
};

export default Input;
