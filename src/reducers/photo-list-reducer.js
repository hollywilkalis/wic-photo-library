import constants from './../../src/constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;

  const { imgTitle, longDesc, contentCategory, contentKeywords, orientation, thumbnailURL, socialmediaURL, printURL, powerPointURL, location, photoDate, photographer, useRestrictions, id } = action;

  switch (action.type) {

  case c.ADD_PHOTO:
    newState = Object.assign({}, state, {
      [id]: {
        imgTitle: imgTitle,
        longDesc: longDesc,
        contentCategory: contentCategory,
        contentKeywords:
          contentKeywords,
        orientation: orientation,
        thumbnailURL: thumbnailURL,
        socialmediaURL: socialmediaURL,
        printURL: printURL,
        powerPointURL: powerPointURL,
        location: location,
        photoDate: photoDate,
        photographer: photographer,
        useRestrictions: useRestrictions,
        id: id
      }
    });
    return newState;

  case c.RECEIVE_PHOTO:
    newState = Object.assign({}, state);
    newState[action.photo.id] = action.photo;
    return newState;

  default:
    return state;
  }
};
