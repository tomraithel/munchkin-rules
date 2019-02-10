import React from "react";
import styled from "styled-components";

export const ButtonHost = styled.button`
  background: linear-gradient(
    to bottom,
    hsla(6, 65%, 54%, 1),
    hsla(16, 65%, 54%, 1),
    hsla(6, 65%, 54%, 1)
  );
  padding: 0.8rem;
  font-size: 1rem;
  color: hsla(6, 65%, 98%, 1);
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 0.3rem;
  font-family: "Overlock", cursive;
  font-weight: 700;
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
