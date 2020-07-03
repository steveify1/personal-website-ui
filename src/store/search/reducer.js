import { SET_CLEAR_SEARCH_FORM } from './types';

const initialState = {
  clear: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CLEAR_SEARCH_FORM:
      return {
        ...state,
        clear: action.payload,
      };
    default:
      return state;
  }
};
