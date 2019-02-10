import React from "react";
import styled from "styled-components";
import { ButtonList } from "./ButtonList";
import { Close } from "./Close";
import { Headline } from "./Headline";
import { Icon } from "./Icon";
import { screenByState } from "./screens";
import { munchkinMachine } from "./state-machine";
import { useMachine } from "./use-machine";

export const AppContainer = styled.div`
  display: flex;
  padding: 1rem;
  min-height: 100vh;
  background: radial-gradient(ellipse at center, #f1e767 37%, #f09a47 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
`;

const App = () => {
  const [current, transition] = useMachine(munchkinMachine);
  const state = current.value;
  const screen = screenByState(state);

  return (
    <AppContainer>
      <Close
        onClick={() => {
          transition("CANCEL");
        }}
      />
      <Headline>{screen.headline}</Headline>
      <Icon>{screen.icon}</Icon>
      <ButtonList onClick={transition} buttons={screen.buttons} />
    </AppContainer>
  );
};

export default App;
