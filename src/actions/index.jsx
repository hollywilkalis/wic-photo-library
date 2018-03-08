import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

const photos = firebase.database().ref('photos');

export function addPhoto(_imgTitle, _longDesc, _contentCategory, _contentKeywords, _orientation, _thumbnailURL, _socialmediaURL, _powerPointURL, _printURL, _location, _photoDate, _photographer, _useRestrictions) {
  alert('Photo has been added');
  return () => photos.push({
    imgTitle: _imgTitle,
    longDesc: _longDesc,
    contentCategory: _contentCategory,
    contentKeywords: _contentKeywords,
    orientation: _orientation,
    thumbnailURL: _thumbnailURL,
    socialmediaURL: _socialmediaURL,
    powerPointURL: _powerPointURL,
    printURL: _printURL,
    location: _location,
    photoDate: _photoDate,
    photographer: _photographer,
    useRestrictions: _useRestrictions
  });
}

export function watchFirebasePhotosRef() {
  return function(dispatch) {
    photos.on('child_added', data => {
      const newPhoto = Object.assign({}, data.val(), {
        id: data.getKey(),
      });
      dispatch(receivePhoto(newPhoto));
    });
  };
}


function receivePhoto(photoFromFirebase) {
  return {
    type: c.RECEIVE_PHOTO,
    photo: photoFromFirebase
  };
}

export function deselectPhoto(selectedPhoto) {
  return {
    type: c.DESELECT_PHOTO,
    selectedPhoto: selectedPhoto
  };
}
