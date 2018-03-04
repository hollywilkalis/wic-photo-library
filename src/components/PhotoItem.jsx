import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Image, Col } from 'react-bootstrap';

function PhotoItem(props){
  const photoInformation =
    <div>
      <Col xs={6} md={4}>
        <Image src={props.thumbnailURL} thumbnail/>
      </Col>
    </div>
  return (
    <div className="photo-card">
      <style jsx>{`

        `}</style>
      {photoInformation}
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
  photoId: PropTypes.string.isRequired
};

export default connect()(PhotoItem);
