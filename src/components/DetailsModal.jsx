import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function DetailsModal(props){
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
    zIndex: '1'
  };

  // The modal "window"
  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    color: 'black',
    zIndex: '2'
  };

  return (
    <div className="backdrop" style={backdropStyle}>
    <style jsx>{`
      .label {
        color: #2e3192;
        font-weight: bold;
      }
      h2 {
        color: #2e3192;
      }
      .thumbnail {
        width: 50%;
        border: 2px solid darkgray;
      }
      .modal-container{
        padding: 20px;
      }


    `}</style>
      <div className="modal" style={modalStyle}>
        {props.selectedPhoto.imgTitle}
        <img className="thumbnail" src={props.selectedPhoto.thumbnailURL}/>
        <p>{props.selectedPhoto.longDesc}</p>

        <p><span className="label">Image category: </span>{props.selectedPhoto.contentCategory}</p>

        <p><span className="label">Image keywords:</span>{props.selectedPhoto.contentKeywords}</p>
        <p><span className="label">Image orientation:</span> {props.selectedPhoto.orientation}</p>
        <p><span className="label">Image use restrictions:</span> {props.selectedPhoto.useRestrictions}</p>
        <hr/>

        <p><span className="label">Photographer:</span>{props.selectedPhoto.photographer}</p>

        <p><span className="label">Photo date:</span>{props.selectedPhoto.photoDate}</p>

        <p><span className="label">Location:</span> {props.selectedPhoto.location}</p>
        <h3>Download this image</h3>
        <Button bsStyle="success"><a href={props.selectedPhoto.socialmediaURL} style={{color: 'white'}} download>Facebook</a></Button>
        <Button bsStyle="success"><a href={props.selectedPhoto.printURL} style={{color: 'white'}} download>Print</a></Button>
        <Button bsStyle="success"><a href={props.selectedPhoto.powerPointURL} style={{color: 'white'}} download>Powerpoint</a></Button>

        <div className="footer">
          <button>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


DetailsModal.propTypes = {
  selectedPhoto: PropTypes.object
};



export default DetailsModal;
