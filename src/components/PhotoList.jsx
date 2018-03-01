import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';
import Search from './Search';

function PhotoList(props) {
  return (
    <div className="photo-list">
    <style jsx>{`
      .list-container {
        width: 70%;
        min-width: 300px;
        display: flex;
        flex-wrap: wrap;
      }
      .photo-list {
        display: flex;
        flex-wrap: wrap;

      }
      `}</style>
    <Search />
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
          printURL={photo.printURL}
          location={photo.location}
          photoDate={photo.photoDate}
          photographer={photo.photographer}
          useRestrictions={photo.useRestrictions}
          key={photoId}
          photoId={photoId}/>
      })}
      </div>
    </div>
  );
}

PhotoList.propTypes = {
  photoList: PropTypes.object
};

export default PhotoList;
