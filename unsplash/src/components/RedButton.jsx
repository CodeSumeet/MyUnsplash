import React from "react";

const RedButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`${props.styles} h-12 px-4 rounded-xl font-medium text-base text-white border-2 border-red bg-redAlpha shadow-md hover:opacity-80 transition-opacity duration-300`}
    >
      {props.text}
    </button>
  );
};

export default RedButton;
