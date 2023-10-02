import { Modal } from "@mui/material";
import React, { useState } from "react";
import useApp from "../hooks/useApp";
import InputField from "./InputField";
import GreenButton from "./GreenButton";
import supabase from "../config/supabaseClient";
import { toast } from "react-toastify";
import useWindowSize from "../hooks/useWindowSize";

const AddPhoto = () => {
  const { openAddPhoto, setOpenAddPhoto } = useApp();
  const { isSm, isMd, isLg, isXl } = useWindowSize();

  const [label, setLabel] = useState("");
  const [link, setLink] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setOpenAddPhoto(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("unsplashData")
      .insert([{ img_label: label, img_link: link, img_pass: password }])
      .select();

    if (data) {
      toast.success("Photo Successfully Uploaded!");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={openAddPhoto}
      onClose={handleClose}
    >
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/5 p-6 rounded-xl bg-white flex flex-col gap-6">
        <h1 className="font-medium text-2xl">Add new photo</h1>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="img_label"
            className="font-medium"
          >
            Label
          </label>
          <InputField
            id="img_label"
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Suspendisse elit massa"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="img_link"
            className="font-medium"
          >
            Photo URL
          </label>
          <InputField
            id="img_link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Paste the image URL"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="img_pass"
            className="font-medium"
          >
            Password
          </label>
          <InputField
            id="img_pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Image Password"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <button
            type="button"
            onClick={handleClose}
            className="font-medium text-base text-gray"
          >
            Cancel
          </button>

          <GreenButton
            onClick={handleSubmit}
            text="Submit"
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddPhoto;
