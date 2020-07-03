import { BUY_DRINK } from './drinkTypes';

const initialState = {
  numberOfDrinks: 10,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUY_DRINK:
      return {
        ...state,
        numberOfDrinks: state.numberOfDrinks - action.payload,
      };

    default:
      return state;
  }
};
