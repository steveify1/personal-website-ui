import { SET_ACTIVE_READ, UNSET_ACTIVE_READ } from './types';

export const setActiveRead = (payload) => {
  return {
    type: SET_ACTIVE_READ,
    payload,
  };
};

export const unsetActiveRead = () => {
  return {
    type: UNSET_ACTIVE_READ,
  };
};
