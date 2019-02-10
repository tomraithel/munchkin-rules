import React, { Component } from "react";

import { munchkinMachine } from "./state-machine";
import { ButtonList } from "./ButtonList";
import { screenByState } from "./screens";
import { Headline } from "./Headline";
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  padding: 1rem;
  min-height: 100vh;
  background-color: #282c34;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Icon = styled.div`
  font-size: 3em;
`;

class App extends Component {
  state = { munchkin: munchkinMachine.initialState };

  transition(action) {
    this.setState({
      munchkin: munchkinMachine.transition(this.state.munchkin, action)
    });
  }

  handleClick = action => {
    this.transition(action);
  };

  render() {
    const state = this.state.munchkin.value;
    const screen = screenByState(state);
    return (
      <AppContainer>
        <Headline>{screen.headline}</Headline>
        <Icon>{screen.icon}</Icon>
        <ButtonList onClick={this.handleClick} buttons={screen.buttons} />
      </AppContainer>
    );
  }
}

export default App;
