import React from "react";
import PropTypes from "prop-types";


function DetailView(props){
  return (
    <div>
      <h1>{props.selectedPhoto.imgTitle}</h1>
      <h2>{props.selectedPhoto.location}</h2>
      <h4><em>{props.selectedPhoto.issue}</em></h4>
    </div>
  );
}

DetailView.propTypes = {
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
  selectedPhoto: PropTypes.object
};

export default DetailView;
