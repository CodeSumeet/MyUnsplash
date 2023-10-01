import React from "react";
import { SearchInput } from "./InputField";
import GreenButton from "./GreenButton";
import useApp from "../hooks/useApp";

const Header = () => {
  const { inputValue, setInputValue } = useApp();
  const { openAddPhoto, setOpenAddPhoto } = useApp();

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 relative">
          <a href="http://">
            <img
              src="images/my_unsplash_logo.svg"
              alt="unsplash"
            />
          </a>

          <SearchInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search by name"
            styles="max-sm:hidden"
            iconStyle="max-sm:hidden"
          />
        </div>

        <GreenButton
          text="Add Photo"
          onClick={() => setOpenAddPhoto(true)}
        />
      </div>

      <SearchInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search by name"
        styles="w-full mt-4 sm:hidden"
        iconStyle="mt-4 sm:hidden"
      />
    </>
  );
};

export default Header;
