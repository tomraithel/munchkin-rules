import React from "react";
import styled from "styled-components";

export const ButtonHost = styled.button`
  background: #333;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  color: white;
  border: none;
`;

export const Button = ({ children, onClick }) => {
  return (
    <ButtonHost
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </ButtonHost>
  );
};
