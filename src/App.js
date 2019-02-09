import React, { Component } from "react";

import "./App.css";
import { munchkinMachine } from "./state-machine";
import { ButtonList } from "./ButtonList";
import { screenByState } from "./screens";

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
      <div className="App">
        <header className="App-header">
          {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
          <h1>{screen.headline}</h1>
          <ButtonList onClick={this.handleClick} buttons={screen.buttons} />
        </header>
      </div>
    );
  }
}

export default App;
