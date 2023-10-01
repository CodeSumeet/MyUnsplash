import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
};

export default useApp;
