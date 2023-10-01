import React from "react";
import Header from "./Header";
import ImageGrid from "./ImageGrid";
import AddPhoto from "./AddPhoto";
import { ToastContainer } from "react-toastify";
import DeletePhoto from "./DeletePhoto";

const Home = () => {
  return (
    <div className="px-4 sm:px-12 md:px-16 lg:px-28 py-4">
      <Header />
      <ImageGrid />
      <AddPhoto />
      <DeletePhoto />
      <ToastContainer />
    </div>
  );
};

export default Home;
