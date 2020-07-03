import { BUY_CAKE } from './cakeTypes';

export const buyCake = (quantity) => {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
};
