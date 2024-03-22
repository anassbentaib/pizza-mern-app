import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SelectProps {
  data: any;
  id: string;
  title?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  pattern: RegExp;
  value?: string;
  message: string;
}
const Select = ({
  id,
  data,
  title,
  errors,
  message,
  pattern,
  required,
  register,
}: SelectProps) => {
  return (
    <div>
      <div className="w-full">
        <select
          id={id}
          {...register(id, {
            required,
            pattern: {
              value: pattern,
              message: message,
            },
          })}
          className={`
          text-gray-900 border border-blackColor text-sm w-full p-3 focus:outline-none
             ${errors[id] ? "focus:border-errorColor" : "focus:border-black focus:border"}
            ${errors[id] ? "border-errorColor" : "border-black"}`}
        >
          <option value="" disabled>
            {title}
          </option>
          {data.map((type: any) => (
            <option value={type.title} key={type.title}>
              {type.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
