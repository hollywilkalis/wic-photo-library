import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';
import Search from './Search';
import { Grid, Row } from 'react-bootstrap';

function PhotoList(props) {
  return (
    <div className="photo-list">
      <style jsx>{`

        `}</style>
      <Search/>
      <Grid>
        <Row>
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
                currentRouterPath={props.currentRouterPath}
                key={photoId}
                photoId={photoId} />;
            })}
          </div>
        </Row>
      </Grid>
    </div>

  );
}

PhotoList.propTypes = {
  photoList: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default PhotoList;
