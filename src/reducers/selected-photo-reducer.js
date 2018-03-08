import constants from './../../src/constants';
const { c } = constants;
let newState;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_PHOTO:
    return action.photoId;

  case c.DESELECT_PHOTO:
    let selectedPhoto = null;
    return action.selectedPhoto;

  default:
    return state;
  }
};
