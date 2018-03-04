import photoListReducer from './../../src/reducers/photo-list-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe('photoListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(photoListReducer({}, { type: null })).toEqual({});
  });

});
