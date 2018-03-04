import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_Photo:
    return action.photoId;
  default:
    return state;
  }
};
