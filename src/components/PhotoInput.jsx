import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import constants from './../../src/constants';
const { c } = constants;
import { addPhoto } from './../actions';

function NewPhotoForm(props){
  let _imgTitle = null;
  let _longDesc = null;
  let _contentCategory = null;
  let _contentKeywords = null;
  let _orientation = null;
  let _thumbnailURL = null;
  let _socialmediaURL = null;
  let _powerPointURL = null;
  let _printURL = null;
  let _location = null;
  let _photoDate = null;
  let _photographer = null;
  let _useRestrictions = null;

  function handleNewPhotoFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addPhoto(_imgTitle.value, _longDesc.value, _contentCategory.value, _contentKeywords.value, _orientation.value, _thumbnailURL.value, _socialmediaURL.value, _powerPointURL.value, _printURL.value, _location.value, _photoDate.value, _photographer.value, _useRestrictions.value));

    _imgTitle.value = '';
    _longDesc.value = '';
    _contentCategory.value = '';
    _contentKeywords.value = '';
    _orientation.value = '';
    _thumbnailURL.value = '';
    _socialmediaURL.value = '';
    _powerPointURL.value = '';
    _printURL.value = '';
    _location.value = '';
    _photoDate.value = '';
    _photographer.value = '';
    _useRestrictions.value = '';
  }

  return (
    <div className="form-container">
      <style jsx>{`
        .form-container {
          padding: 20px;
          }
          input, select, textarea {
            margin-bottom: 10px;
            width: 70%;
          }
        .form-label {
          font-weight: bolder;
        }
        .input-spacing {
          margin-top: 10px;
        }
        `}</style>
      <h2>Add a new image to the library</h2>
      <form onSubmit={handleNewPhotoFormSubmission}>
        <div className="input-spacing">
          <p className="form-label">Short title</p>
          <input
            type='text'
            id='imgTitle'
            placeholder='Short image title'
            ref={(input) => {_imgTitle = input;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">Long description</p>
          <textarea
            type='text'
            id='longDesc'
            placeholder='Long description'
            ref={(textarea) => {_longDesc = textarea;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">Choose your photo category</p>
          <select
            multiple={true}
            id='contentCategory'
            placeholder='Content category'
            ref={(select) => {_contentCategory = select;}}>
            <option value="breastfeeding">Breastfeeding</option>
            <option value="family">Family</option>
            <option value="clinic">Clinic settings</option>
            <option value="classes">Group class settings</option>
            <option value="farm">Farmers markets</option>
          </select>
        </div>
        <div className="input-spacing">
          <p className="form-label">Enter image keywords (separated by comma)</p>
          <textarea
            id='contentKeywords'
            placeholder='Content keywords (separated by commas)'
            ref={(textarea) => {_contentKeywords = textarea;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">Photo orientation</p>
          <input
            id='orientation'
            placeholder='Photo orientation'
            ref={(input) => {_orientation = input;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">Photo location (if known)</p>
          <input
            id='location'
            placeholder='Photo location'
            ref={(input) => {_location = input;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">Photo date (month and year)</p>
          <input
            id='photoDate'
            placeholder='Photo date'
            ref={(input) => {_photoDate = input;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">Photographer</p>
          <input
            id='photographer'
            placeholder='Photographer'
            ref={(input) => {_photographer = input;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">Describe any use restrictions</p>
          <textarea
            id='useRestrictions'
            placeholder='Use restrictions'
            ref={(textarea) => {_useRestrictions = textarea;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">URL for image thumbnail</p>
          <input
            id='thumbnailURL'
            placeholder='URL for thumbnail image'
            ref={(input) => {_thumbnailURL = input;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">URL for presentation image</p>
          <input
            id='powerPointURL'
            placeholder='URL for powerPointURL'
            ref={(input) => {_powerPointURL = input;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">URL for social media image</p>
          <input
            id='socialmediaURL'
            placeholder='socialmediaURL'
            ref={(input) => {_socialmediaURL = input;}}/>
        </div>
        <div className="input-spacing">
          <p className="form-label">URL for print image</p>
          <input
            id='printURL'
            placeholder='printURL'
            ref={(input) => {_printURL = input;}}/>
        </div>
        <Button type='submit' bsStyle="primary">Add this photo</Button>
      </form>
    </div>
  );
}

export default connect()(NewPhotoForm);
