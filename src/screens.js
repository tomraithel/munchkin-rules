const translations = {
  "openDoor.headline": "Tür öffnen",
  "openDoor.button.monster": "Monsterkarte",
  "openDoor.button.curse": "Fluch oder Falle",
  "openDoor.button.other": "alles andere",
  "applyCurseOrTrap.headline": "Fluch / Falle anwenden",
  "applyCurseOrTrap.button": "Fluch angewendet",
  "keepOrDrawCard.headline": "Karte spielen oder spielen",
  "keepOrDrawCard.button": "Weiter",
  "readyForTrouble.headline": "Auf Ärger aus sein?",
  "readyForTrouble.button.fight": "Gegen Monster Kämpfen",
  "readyForTrouble.button.takeLoot": "Raum Plündern",
  "takeDungeonCard.headline": "Dungeon-Karte nehmen",
  "takeDungeonCard.button": "Karte genommen",
  "mildGift.headline": "Milda Gabe",
  "mildGift.button.moreThanFive": "Ich habe 6 oder mehr Karten",
  "mildGift.button.lessOrEqualFive": "Ich habe <= 5 Karten",
  "hasLowestLevel.headline": "Bist du der Schwächste?",
  "hasLowestLevel.button.yes": "Ja",
  "hasLowestLevel.button.no": "Nein",
  "discard.headline": "Karten wegwerfen",
  "discard.button": "OK",
  "charity.headline": "Charity!",
  "charity.button": "Karten wurden aufgeteilt",
  "fightOrRun.headline": "Kampf!",
  "fightOrRun.button.defeat": "Monster besiegt",
  "fightOrRun.button.run": "Fluchtversuch unternehmen",
  "victory.headline": "Sieg",
  "victory.button": "Schatz nehmen und Level aufsteigen",
  "dice.headline": "Flucht",
  "dice.button.lowerThanFive": "Würfelergebnis < 5",
  "dice.button.fiveOrSix": "Würfelergebnis 5 oder 6",
  "badThings.headline": "Schlimme Dinge",
  "badThings.button": "Schlimme Dinge sind passiert",
  "done.headline": "Zug zu Ende",
  "done.button": "Fertig - nächster Spieler"
};

const translate = key => translations[key] || key;

const allScreens = {
  openDoor: {
    headline: translate("openDoor.headline"),
    buttons: [
      { text: translate("openDoor.button.monster"), action: "DRAW_MONSTER" },
      {
        text: translate("openDoor.button.curse"),
        action: "DRAW_CURSE_OR_TRAP"
      },
      { text: translate("openDoor.button.other"), action: "DRAW_OTHER" }
    ]
  },
  applyCurseOrTrap: {
    headline: translate("applyCurseOrTrap.headline"),
    buttons: [
      { text: translate("applyCurseOrTrap.button"), action: "APPLY_CURSE" }
    ]
  },
  keepOrDrawCard: {
    headline: translate("keepOrDrawCard.headline"),
    buttons: [{ text: translate("keepOrDrawCard.button"), action: "DRAW" }]
  },
  readyForTrouble: {
    headline: translate("readyForTrouble.headline"),
    buttons: [
      {
        text: translate("readyForTrouble.button.fight"),
        action: "FIGHT_VOLUNTARY"
      },
      {
        text: translate("readyForTrouble.button.takeLoot"),
        action: "TAKE_LOOT"
      }
    ]
  },
  takeDungeonCard: {
    headline: translate("takeDungeonCard.headline"),
    buttons: [
      { text: translate("takeDungeonCard.button"), action: "TAKE_CARD" }
    ]
  },
  mildGift: {
    headline: translate("mildGift.headline"),
    buttons: [
      {
        text: translate("mildGift.button.moreThanFive"),
        action: "MORE_THAN_FIVE_CARDS"
      },
      {
        text: translate("mildGift.button.lessOrEqualFive"),
        action: "LESS_THAN_FIVE_CARDS"
      }
    ]
  },
  hasLowestLevel: {
    headline: translate("hasLowestLevel.headline"),
    buttons: [
      { text: translate("hasLowestLevel.button.yes"), action: "YES" },
      { text: translate("hasLowestLevel.button.no"), action: "NO" }
    ]
  },
  discard: {
    headline: translate("discard.headline"),
    buttons: [{ text: translate("discard.button"), action: "DROP_CARDS" }]
  },
  charity: {
    headline: translate("charity.headline"),
    buttons: [{ text: translate("charity.button"), action: "DISTRIBUTE_CARDS" }]
  },
  fight: {
    fightOrRun: {
      headline: translate("fightOrRun.headline"),
      buttons: [
        { text: translate("fightOrRun.button.defeat"), action: "DEFEAT" },
        { text: translate("fightOrRun.button.run"), action: "RUN" }
      ]
    },
    victory: {
      headline: translate("victory.headline"),
      buttons: [
        {
          text: translate("victory.button"),
          action: "TAKE_TREASURE_AND_LEVEL_UP"
        }
      ]
    },
    dice: {
      headline: translate("dice.headline"),
      buttons: [
        {
          text: translate("dice.button.lowerThanFive"),
          action: "LOWER_THAN_FIVE"
        },
        { text: translate("dice.button.fiveOrSix"), action: "FIVE_OR_SIX" }
      ]
    },
    badThings: {
      headline: translate("badThings.headline"),
      buttons: [{ text: translate("badThings.button"), action: "DONE" }]
    },
    end: {
      type: "final"
    }
  },
  done: {
    headline: translate("done.headline"),
    buttons: [{ text: translate("done.button"), action: "NEXT_PLAYER" }]
  }
};

export const screenByState = (state, screens = allScreens) => {
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
