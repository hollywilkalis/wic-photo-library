import React from "react";
import PropTypes from "prop-types";

function PhotoItem(props){
  const photoInformation =
    <div>
      <img style={{width: '100%', border: '2px solid darkgray'}} src={props.thumbnailURL}/>
    </div>
  return (
    <div className="photo-card" onClick={() => {props.onPhotoSelection(props.photoId);}} >
      <style jsx>{`
        .photo-card {
          margin: 10px;
          width: 40%;
          min-width: 200px;
          }
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
  location: PropTypes.string,
  photoDate: PropTypes.string,
  photographer: PropTypes.string,
  useRestrictions: PropTypes.string,
  currentRouterPath: PropTypes.string,
  photoId: PropTypes.string.isRequired,
  onPhotoSelection: PropTypes.func
};

export default PhotoItem;
