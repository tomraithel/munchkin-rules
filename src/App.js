import React, { useMemo } from "react";
import styled from "styled-components";
import { ButtonList } from "./ButtonList";
import { Close } from "./Close";
import { Footnote } from "./Footnote";
import { Headline } from "./Headline";
import { Icon } from "./Icon";
import { Rules } from "./Rules";
import { getAllScreens, screenByState } from "./screens";
import { munchkinMachine } from "./state-machine";
import { translations } from "./translations/ua-UA";
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
  const translatedScreens = useMemo(() => getAllScreens(translations), [
    translations
  ]);
  const screen = screenByState(state, translatedScreens);

  return (
    <AppContainer>
      <Close
        onClick={() => {
          transition("CANCEL");
        }}
      />
      <Headline>{screen.headline}</Headline>
      <Icon>{screen.icon}</Icon>
      {screen.rules && <Rules>{screen.rules}</Rules>}
      <ButtonList onClick={transition} buttons={screen.buttons} />
      <Footnote href="https://github.com/tomraithel/munchkin-rules">
        View on GitHub
      </Footnote>
    </AppContainer>
  );
};

export default App;
