import React from "react";
import { FaSearch } from "react-icons/fa";

interface InputProps {
  id: string;
  icon?: boolean;
  placeholder?: string;
  value?: string;
}

const SearchInput: React.FC<InputProps> = ({
  id,
  placeholder,
  value,
  icon,
}) => {
  return (
    <div className="w-full relative text-600">
      {icon && <FaSearch size={17} className="absolute top-18 right-2 " />}

      <input
        id={id}
        value={value}
        placeholder={placeholder}
        type="text"
        className={`
        mt-2
        peer
        w-full
        text-sm
        p-2
        bg-primaryColor
        border
        font-500
        outline-none
        transition
        disabled:opacity-70
        disabled-blackColor-not-allowed
         border-black
         focus:border-blackColor focus:border`}
      />
    </div>
  );
};

export default SearchInput;
