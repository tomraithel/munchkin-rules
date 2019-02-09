import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};
