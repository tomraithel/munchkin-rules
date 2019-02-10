import { useState } from "react";

export function useMachine(machine) {
  const [current, setCurrent] = useState(machine.initialState);

  const transition = action => {
    setCurrent(machine.transition(current, action));
  };

  return [current, transition];
}
