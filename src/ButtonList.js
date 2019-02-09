import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

export const ButtonListHost = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ButtonListItem = styled.div`
  flex: 1 1 100%;
  display: flex;
  padding: 0.2rem 0;
  > * {
    flex-basis: 100%;
  }
`;

export const ButtonList = ({ buttons, onClick }) => {
  return (
    <ButtonListHost>
      {buttons.map(({ text, action }) => (
        <ButtonListItem>
          <Button
            key={action}
            onClick={() => {
              onClick(action);
            }}
          >
            {text}
          </Button>
        </ButtonListItem>
      ))}
    </ButtonListHost>
  );
};
