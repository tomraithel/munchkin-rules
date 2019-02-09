import React from "react";
import { Button } from "./Button";

export const ButtonList = ({ buttons, onClick }) => {
  return (
    <>
      {buttons.map(({ text, action }) => (
        <Button
          key={action}
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
