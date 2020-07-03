import { SET_CLEAR_SEARCH_FORM } from './types';

export const setClearSearchForm = (payload) => {
  return {
    type: SET_CLEAR_SEARCH_FORM,
    payload,
  };
};
