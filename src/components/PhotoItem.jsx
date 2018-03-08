import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Image, Col } from 'react-bootstrap';
import constants from './../../src/constants';
const { c } = constants;
import DetailView from './DetailView';


function PhotoItem(props){

  function handleSelectingPhoto(photoId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_PHOTO,
      photoId: photoId
    };
    dispatch(action);

  }

  const photoInformation =
    <div>
      <Col xs={6} s={3}>
        <Image src={props.thumbnailURL} thumbnail/>
        <p>{props.imgTitle}</p>
      </Col>
    </div>;
  return (
    <div>
      <div onClick={() => {handleSelectingPhoto(props.photoId);}}>
        {photoInformation}
      </div>
    </div>
  );
}

PhotoItem.propTypes = {
  imgTitle: PropTypes.string,
  longDesc: PropTypes.string,
  contentCategory: PropTypes.string,
  contentKeywords: PropTypes.string,
  orientation: PropTypes.string,
  thumbnailURL: PropTypes.string,
  socialmediaURL: PropTypes.string,
  printURL: PropTypes.string,
  powerPointURL: PropTypes.string,
  location: PropTypes.string,
  photoDate: PropTypes.string,
  photographer: PropTypes.string,
  useRestrictions: PropTypes.string,
  currentRouterPath: PropTypes.string,
  photoId: PropTypes.string.isRequired,
  selectedPhoto: PropTypes.string
};

export default connect()(PhotoItem);
