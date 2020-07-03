import * as types from './postTypes';

export const setActivePost = (post) => {
  return {
    type: types.SET_ACTIVE_POST,
    payload: post,
  };
};

export const updatePost = (post) => {
  return {
    type: types.UPDATE_POST,
    payload: post,
  };
};

export const deletePost = (id) => {
  return {
    type: types.DELETE_POST,
    payload: id,
  };
};
