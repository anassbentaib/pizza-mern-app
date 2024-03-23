import React from "react";

interface InputProps {
  id: string;
  placeholder?: string;
  value?: string;
}

const SearchInput: React.FC<InputProps> = ({ id, placeholder, value }) => {
  return (
    <div className="w-full relative">
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
        bg-whiteColor
        border
        font-500
        outline-none
        transition
        text-black
        disabled:opacity-70
        disabled-blackColor-not-allowed
         border-black
         focus:border-blackColor focus:border`}
      />
    </div>
  );
};

export default SearchInput;
