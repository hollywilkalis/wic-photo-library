import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-wrap: wrap;
          padding: 20px;
          }
          input, select, textarea {
            width: 50%;
            margin-bottom: 10px;
          }

        `}</style>
      <form onSubmit={handleNewPhotoFormSubmission}>
        <div>
          <input
            type='text'
            id='imgTitle'
            placeholder='Short image title'
            ref={(input) => {_imgTitle = input;}}/>
        </div>
        <div>
          <textarea
            type='text'
            id='longDesc'
            placeholder='Long description'
            ref={(textarea) => {_longDesc = textarea;}}/>
        </div>
        <div>
          <select
            multiple={true}
            id='contentCategory'
            placeholder='Content category'
            ref={(select) => {_contentCategory = select;}}>
            <option value="family">Family</option>
            <option value="clinic">Clinic</option>
            <option value="breastfeeding">Breastfeeding</option>
          </select>
        </div>
        <div>
          <textarea
            id='contentKeywords'
            placeholder='Content keywords (separated by commas)'
            ref={(textarea) => {_contentKeywords = textarea;}}/>
        </div>
        <div>
          <input
            id='orientation'
            placeholder='Photo orientation'
            ref={(input) => {_orientation = input;}}/>
        </div>
        <div>
          <input
            id='location'
            placeholder='Photo location'
            ref={(input) => {_location = input;}}/>
        </div>
        <div>
          <input
            id='photoDate'
            placeholder='Photo date'
            ref={(input) => {_photoDate = input;}}/>
        </div>
        <div>
          <input
            id='photographer'
            placeholder='Photographer'
            ref={(input) => {_photographer = input;}}/>
        </div>
        <div>
          <textarea
            id='useRestrictions'
            placeholder='Use restrictions'
            ref={(textarea) => {_useRestrictions = textarea;}}/>
        </div>
        <div>
          <input
            id='thumbnailURL'
            placeholder='URL for thumbnail image'
            ref={(input) => {_thumbnailURL = input;}}/>
        </div>
        <div>
          <input
            id='powerPointURL'
            placeholder='URL for powerPointURL'
            ref={(input) => {_powerPointURL = input;}}/>
        </div>
        <div>
          <input
            id='socialmediaURL'
            placeholder='socialmediaURL'
            ref={(input) => {_socialmediaURL = input;}}/>
        </div>
        <div>
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
