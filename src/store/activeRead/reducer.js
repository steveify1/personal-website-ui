import { SET_ACTIVE_READ, UNSET_ACTIVE_READ } from './types';

const initialState = {
  isBeingRead: true,
  statistics: {
    readPercentage: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_READ:
      return {
        ...state,
        ...action.payload,
        isBeingRead: false,
      };
    case UNSET_ACTIVE_READ:
      return {
        ...state,
        isBeingRead: true,
      };
    default:
      return state;
  }
};
