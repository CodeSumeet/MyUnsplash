import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [openAddPhoto, setOpenAddPhoto] = useState(false);
  const [openDeletePhoto, setOpenDeletePhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        openAddPhoto,
        setOpenAddPhoto,
        openDeletePhoto,
        setOpenDeletePhoto,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
