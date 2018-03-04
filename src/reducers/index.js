import selectedPhotoReducer from './selected-photo-reducer';
import photoListReducer from './photo-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedPhoto: selectedPhotoReducer,
  masterPhotoList: photoListReducer
});

export default rootReducer;
