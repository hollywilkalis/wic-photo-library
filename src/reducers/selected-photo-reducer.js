import constants from './../../src/constants';
const { c } = constants;
let newState;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_PHOTO:
    return action.photoId;

  default:
    return state;
  }
};
