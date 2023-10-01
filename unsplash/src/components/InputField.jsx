import React from "react";
import { IoMdSearch } from "react-icons/io";

const InputField = (props) => {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`${props.styles} h-14 rounded-lg border-2 border-gray font-medium text-base text-gray px-6 `}
      />
    </>
  );
};

export const SearchInput = (props) => {
  return (
    <div className="relative">
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`${props.styles} w-72 h-14 rounded-xl border-2 border-gray font-medium text-base text-gray pl-14 outline-none hover:outline-none`}
      />

      <IoMdSearch
        className={`${props.iconStyle} absolute left-5 top-4 z-10 text-gray`}
        size={24}
      />
    </div>
  );
};

export default InputField;
