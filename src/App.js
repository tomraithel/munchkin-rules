import React, { Component } from "react";

import "./App.css";
import { munchkinMachine } from "./state-machine";
import { ButtonList } from "./ButtonList";

const allScreens = {
  openDoor: {
    buttons: [
      { text: "Monsterkarte", action: "DRAW_MONSTER" },
      { text: "Fluch oder Falle", action: "DRAW_CURSE_OR_TRAP" },
      { text: "alles andere", action: "DRAW_OTHER" }
    ]
  },
  applyCurseOrTrap: {
    buttons: [{ text: "Fluch/Falle sofort anwenden", action: "APPLY_CURSE" }]
  },
  keepOrDrawCard: {
    buttons: [{ text: "Weiter", action: "DRAW" }]
  },
  readyForTrouble: {
    buttons: [
      { text: "Gegen ein Monster kämpfen", action: "FIGHT_VOLUNTARY" },
      { text: "Raum Plündern", action: "TAKE_LOOT" }
    ]
  },
  takeDungeonCard: {
    buttons: [{ text: "Karte genommen", action: "TAKE_CARD" }]
  },
  mildGift: {
    buttons: [
      { text: "Ich habe > 5 Karten", action: "MORE_THAN_FIVE_CARDS" },
      { text: "Ich habe <= 4 Karten", action: "LESS_THAN_FIVE_CARDS" }
    ]
  },
  hasLowestLevel: {
    buttons: [
      { text: "Ich habe den niedrigsten Level", action: "YES" },
      { text: "Ich habe NICHT den niedrigsten Level", action: "NO" }
    ]
  },
  discard: {
    buttons: [{ text: "Karten weggelegt", action: "DROP_CARDS" }]
  },
  charity: {
    buttons: [{ text: "Karten wurden aufgeteilt", action: "DROP_CARDS" }]
  },
  fight: {
    fightOrRun: {
      buttons: [
        { text: "Monster Besiegt", action: "DEFEAT" },
        { text: "Weglaufen", action: "RUN" }
      ]
    },
    victory: {
      buttons: [
        {
          text: "Schatz nehmen und Level aufsteigen",
          action: "TAKE_TREASURE_AND_LEVEL_UP"
        }
      ]
    },
    dice: {
      buttons: [
        { text: "Würfle < 5", action: "LOWER_THAN_FIVE" },
        { text: "Würfle 5 oder 6", action: "FIVE_OR_SIX" }
      ]
    },
    badThings: {
      buttons: [{ text: "Schlimme Dinge sind passiert", action: "DONE" }]
    },
    end: {
      type: "final"
    }
  },
  done: {
    buttons: [{ text: "Fertig - nächster Spieler", action: "NEXT_PLAYER" }]
  }
};

const screenByState = (state, screens = allScreens) => {
  if (!screens) {
    return undefined;
  }
  if (typeof state === "string") {
    return screens[state];
  } else {
    const key = Object.keys(state)[0];
    return screenByState(state[key], screens[key]);
  }
};

const buttonsByState = state => {
  const screen = screenByState(state);
  if (screen && screen.buttons) {
    return screen.buttons;
  }
  return [];
};

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
    return (
      <div className="App">
        <header className="App-header">
          <pre>{JSON.stringify(state, null, 2)}</pre>

          <ButtonList
            onClick={this.handleClick}
            buttons={buttonsByState(state)}
          />
        </header>
      </div>
    );
  }
}

export default App;
