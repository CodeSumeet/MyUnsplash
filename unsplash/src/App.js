import React from "react";
import Home from "./components/Home";
import { AppProvider } from "./context/AppContext";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  );
};

export default App;
