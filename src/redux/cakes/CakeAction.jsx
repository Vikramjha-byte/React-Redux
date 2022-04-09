//Creating the action

import { BUY_CAKE } from "./CakesType";
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
