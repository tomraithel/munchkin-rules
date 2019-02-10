import styled from "styled-components";

export const Close = styled.a`
  cursor: pointer;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  position: fixed;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  ::after {
    content: "⇤";
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
