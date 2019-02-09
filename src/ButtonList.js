import React from "react";
import { Button } from "./Button";

export const ButtonList = ({ buttons, onClick }) => {
  return (
    <>
      {buttons.map(({ text, action }) => (
        <Button
          onClick={() => {
            onClick(action);
          }}
        >
          {text}
        </Button>
      ))}
    </>
  );
};
