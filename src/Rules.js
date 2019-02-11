import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const RulesHost = styled.div`
  background: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  color: #333;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 0.3rem;

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

export const Rules = ({ children }) => {
  return (
    <RulesHost>
      <ReactMarkdown source={children} />
    </RulesHost>
  );
};
