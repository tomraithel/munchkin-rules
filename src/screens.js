export const getAllScreens = translations => {
  const translate = key => translations[key] || key;

  return {
    openDoor: {
      headline: translate("openDoor.headline"),
      rules: translate("openDoor.rules"),
      icon: "🚪",
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
      rules: translate("applyCurseOrTrap.rules"),
      icon: "😣",
      buttons: [
        { text: translate("applyCurseOrTrap.button"), action: "APPLY_CURSE" }
      ]
    },
    keepOrPlayCard: {
      headline: translate("keepOrPlayCard.headline"),
      rules: translate("keepOrPlayCard.rules"),
      icon: "🃏",
      buttons: [
        { text: translate("keepOrPlayCard.button.keep"), action: "KEEP" },
        { text: translate("keepOrPlayCard.button.play"), action: "PLAY" }
      ]
    },
    readyForTrouble: {
      headline: translate("readyForTrouble.headline"),
      rules: translate("readyForTrouble.rules"),
      icon: "🤔",
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
      rules: translate("takeDungeonCard.rules"),
      icon: "📤",
      buttons: [
        { text: translate("takeDungeonCard.button"), action: "TAKE_CARD" }
      ]
    },
    mildGift: {
      headline: translate("mildGift.headline"),
      rules: translate("mildGift.rules"),
      icon: "🖐",
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
      rules: translate("hasLowestLevel.rules"),
      icon: "🐣",
      buttons: [
        { text: translate("hasLowestLevel.button.yes"), action: "YES" },
        { text: translate("hasLowestLevel.button.no"), action: "NO" }
      ]
    },
    discard: {
      headline: translate("discard.headline"),
      rules: translate("discard.rules"),
      icon: "🗑",
      buttons: [{ text: translate("discard.button"), action: "DROP_CARDS" }]
    },
    charity: {
      headline: translate("charity.headline"),
      rules: translate("charity.rules"),
      icon: "🎁",
      buttons: [
        { text: translate("charity.button"), action: "DISTRIBUTE_CARDS" }
      ]
    },
    fight: {
      fightOrRun: {
        headline: translate("fightOrRun.headline"),
        rules: translate("fightOrRun.rules"),
        icon: "⚔️",
        buttons: [
          { text: translate("fightOrRun.button.fight"), action: "FIGHT" },
          { text: translate("fightOrRun.button.run"), action: "RUN" }
        ]
      },
      wait: {
        headline: translate("wait.headline"),
        rules: translate("wait.rules"),
        icon: "⏳",
        buttons: []
      },
      recheckConditions: {
        headline: translate("recheckConditions.headline"),
        rules: translate("recheckConditions.rules"),
        icon: "😯",
        buttons: [
          {
            text: translate("recheckConditions.button.somethingChanged"),
            action: "SOMETHING_CHANGED"
          },
          {
            text: translate("recheckConditions.button.nothingChanged"),
            action: "NOTHING_CHANGED"
          }
        ]
      },
      victory: {
        headline: translate("victory.headline"),
        rules: translate("victory.rules"),
        icon: "🏆",
        buttons: [
          {
            text: translate("victory.button"),
            action: "TAKE_TREASURE_AND_LEVEL_UP"
          }
        ]
      },
      dice: {
        headline: translate("dice.headline"),
        rules: translate("dice.rules"),
        icon: "🎲",
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
        rules: translate("badThings.rules"),
        icon: "☠️",
        buttons: [{ text: translate("badThings.button"), action: "DONE" }]
      },
      end: {
        type: "final"
      }
    },
    done: {
      headline: translate("done.headline"),
      rules: translate("done.rules"),
      icon: "🏁",
      buttons: [{ text: translate("done.button"), action: "NEXT_PLAYER" }]
    }
  };
};

export const screenByState = (state, screens) => {
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
