import { Machine } from "xstate";

export const fightConfig = {
  initial: "fightOrRun",
  states: {
    fightOrRun: {
      on: {
        DEFEAT: { target: "victory" },
        RUN: { target: "dice" }
      }
    },
    victory: {
      on: {
        TAKE_TREASURE_AND_LEVEL_UP: { target: "end" }
      }
    },
    dice: {
      on: {
        LOWER_THAN_FIVE: { target: "badThings" },
        FIVE_OR_SIX: { target: "end" }
      }
    },
    badThings: {
      on: {
        DONE: { target: "end" }
      }
    },
    end: {
      type: "final"
    }
  }
};

export const munchkinConfig = {
  id: "munchkin",
  initial: "openDoor",
  states: {
    openDoor: {
      on: {
        DRAW_MONSTER: [{ target: "fight" }],
        DRAW_CURSE_OR_TRAP: [{ target: "applyCurseOrTrap" }],
        DRAW_OTHER: [{ target: "keepOrDrawCard" }]
      }
    },
    applyCurseOrTrap: {
      on: {
        APPLY_CURSE: { target: "readyForTrouble" }
      }
    },
    keepOrDrawCard: {
      on: {
        KEEP: { target: "readyForTrouble" },
        DRAW: { target: "readyForTrouble" }
      }
    },
    readyForTrouble: {
      on: {
        FIGHT_VOLUNTARY: { target: "fight" },
        TAKE_LOOT: { target: "takeDungeonCard" }
      }
    },
    takeDungeonCard: {
      on: {
        TAKE_CARD: { target: "mildGift" }
      }
    },
    mildGift: {
      on: {
        MORE_THAN_FIVE_CARDS: { target: "hasLowestLevel" },
        LESS_THAN_FIVE_CARDS: { target: "done" }
      }
    },
    hasLowestLevel: {
      on: {
        YES: { target: "discard" },
        NO: { target: "charity" }
      }
    },
    discard: {
      on: {
        DROP_CARDS: { target: "done" }
      }
    },
    charity: {
      on: {
        DISTRIBUTE_CARDS: { target: "done" }
      }
    },
    fight: {
      ...fightConfig,
      on: {
        "": { target: "mildGift", in: "fight.end" }
      }
    },
    done: {
      on: {
        NEXT_PLAYER: { target: "openDoor" }
      }
    }
  },
  on: {
    CANCEL: { target: "openDoor" }
  }
};

export const munchkinMachine = Machine(munchkinConfig);