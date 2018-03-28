import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';
import Search from './Search';
import { Grid, Row } from 'react-bootstrap';
import constants from './../../src/constants';
const { c } = constants;
import DetailView from './DetailView';
import { connect } from 'react-redux';


function PhotoList(props) {
  let selectedPhotoDetails = null;

  if (props.selectedPhoto.length > 0) {
    selectedPhotoDetails =  <DetailView selectedPhoto={props.photoList[props.selectedPhoto]}/>;
  }

  return (
    <div className="photo-list">
      <style jsx>{`
        .photo-list {
          display: flex;
          flex-wrap: wrap;
        }
        .selected-view {
          width: 40%;
        }
        .list-view {
          width: 55%;
          display: flex;
          flex: wrap;
          flex-direction: column;
        }
        .search-box {
          padding: 10px;
        }

        .item-grid {
          display: flex;
        }
        `}</style>
      <div className="list-view">
        <div className="search-box">
          <Search/>
        </div>
        <div className="item-grid">
          <Grid>
            <Row>
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
                  photoId={photoId}/>;
              })}
            </Row>
          </Grid>
        </div>
      </div>
      <div className="selected-view">
        {selectedPhotoDetails}
      </div>
    </div>
  );
}

PhotoList.propTypes = {
  photoList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  selectedPhoto: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedPhoto: state.selectedPhoto,
    photoList: state.masterPhotoList
  };
};

export default connect(mapStateToProps)(PhotoList);
