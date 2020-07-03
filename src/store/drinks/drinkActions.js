import { BUY_DRINK } from './drinkTypes';

export const buyDrink = (quantity) => {
  return {
    type: BUY_DRINK,
    payload: quantity,
  };
};
