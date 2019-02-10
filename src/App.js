import React, { Component } from "react";
import styled from "styled-components";
import { ButtonList } from "./ButtonList";
import { Headline } from "./Headline";
import { Icon } from "./Icon";
import { screenByState } from "./screens";
import { munchkinMachine } from "./state-machine";

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
