import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';

function DetailView(props){
  return (
    <div className="modal-container">
      <style jsx>{`
        .label {
          color: #2e3192;
          font-weight: bold;
        }
        h2 {
          color: #2e3192;
        }
        .thumbnail {
          width: 90%;
          border: 2px solid darkgray;
        }
        .my-modal .modal-container{
          overflow: hidden;
          overflow-y: scroll;
          padding-right: 0 !important;
        }


      `}</style>

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



            <Button bsStyle="primary">Close</Button>


    </div>
  );
}

DetailView.propTypes = {
  selectedPhoto: PropTypes.object
};

export default DetailView;
