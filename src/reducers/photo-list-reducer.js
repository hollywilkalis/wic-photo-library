export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_PHOTO':
    const { imgTitle, longDesc, contentCategory, contentKeywords, orientation, thumbnailURL, socialmediaURL, printURL, powerPointURL, location, photoDate, photographer, useRestrictions, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        imgTitle: imgTitle,
        longDesc: longDesc,
        contentCategory: content,
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
      }
    });
    return newState;
  default:
    return state;
  }
};
