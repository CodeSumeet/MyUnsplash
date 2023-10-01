import React from "react";

const GreenButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="h-12 px-4 rounded-xl font-medium text-base text-white bg-green shadow-md hover:opacity-80 active:opacity-60 transition-opacity duration-150"
    >
      {props.text}
    </button>
  );
};

export default GreenButton;
