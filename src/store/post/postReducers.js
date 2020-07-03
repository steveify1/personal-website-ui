import * as types from './postTypes';

const initialState = {
  activePost: {},
  data: [],
};

const updateArrayItem = (array, itemUpdate, cb) => {
  array = [...array];
  const index = cb(array, itemUpdate);
  if (index) {
    array[index] = itemUpdate;
    return array;
  }
  return array;
};

const deleteArrayItem = (array, cb) => {
  array = [...array];
  const index = cb(array);
  if (index) {
    array.splice(index, 1);
    return array;
  }
  return array;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_POST:
      return {
        ...state,
        activePost: action.payload,
      };

    case types.UPDATE_POST:
      return {
        ...state,
        data: updateArrayItem(state.data, action.payload, (arr, item) => {
          return arr.findIndex((i) => i.id === item.id);
        }),
      };

    case types.DELETE_POST:
      return {
        ...state,
        data: deleteArrayItem(state.data, (arr) => {
          return arr.findIndex((item) => item.id === action.payload.id);
        }),
      };

    default:
      return state;
  }
};
