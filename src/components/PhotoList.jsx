import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';
import Search from './Search';
import DetailView from './DetailView';

function PhotoList(props) {
  return (
    <div className="photo-list">
    <style jsx>{`
      .list-container {
        display: flex;
        flex-wrap: wrap;
      }
      .photo-list {
        display: flex;
        flex-wrap: wrap;

      }
      `}</style>
    <Search photoList={props.masterPhotoList}/>
    <div className="list-container">
      {Object.keys(props.photoList).map(function(photoId) {
        var photo = props.photoList[photoId];
        return <PhotoItem
          imgTitle={photo.imgTitle}
          longDesc={photo.longDesc}
          contentCategory={photo.contentCategory}
          contentKeywords={photo.contentKeywords}
          orientation={photo.orientation}
          thumbnailURL={photo.thumbnailURL}
          socialmediaURL={photo.socialmediaURL}
          powerPointURL={photo.powerPointURL}
          printURL={photo.printURL}
          location={photo.location}
          photoDate={photo.photoDate}
          photographer={photo.photographer}
          useRestrictions={photo.useRestrictions}
          key={photoId}
          photoId={photoId}
          onPhotoSelection={props.onPhotoSelection}/>
      })}
      </div>
    </div>

  );
}

PhotoList.propTypes = {
  photoList: PropTypes.object,
  onPhotoSelection: PropTypes.func.isRequired,
  selectedPhoto: PropTypes.string
};

export default PhotoList;
