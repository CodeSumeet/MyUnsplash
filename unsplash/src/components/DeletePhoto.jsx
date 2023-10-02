import React, { useState } from "react";
import RedButton from "./RedButton";
import useApp from "../hooks/useApp";
import { Modal } from "@mui/material";
import InputField from "./InputField";
import supabase from "../config/supabaseClient";
import { toast } from "react-toastify";

const DeletePhoto = () => {
  const { openDeletePhoto, setOpenDeletePhoto } = useApp();
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setOpenDeletePhoto(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("unsplashData")
      .delete()
      .eq("img_pass", password);

    if (error) {
      toast.error("Invalid Password!");
    }
  };
  return (
    <Modal
      open={openDeletePhoto}
      onClose={handleClose}
    >
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/5 p-6 rounded-xl bg-white flex flex-col gap-6">
        <h1 className="font-medium text-2xl">Are you sure ?</h1>

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

          <RedButton
            onClick={handleDelete}
            text="Delete"
          />
        </div>
      </form>
    </Modal>
  );
};

export default DeletePhoto;
