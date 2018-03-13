import React from "react";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';


function DetailView(props){

  return (
    <div className="details-container">
      <style jsx>{`
        .label {
          color: #2e3192;
          font-weight: bold;
          font-size: inherit;
        }

        h2 {
          color: #2e3192;
        }
        .thumbnail {
          width: 90%;
          border: 2px solid darkgray;
        }

        .details-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          border: 1px solid darkgray;
          padding: 10px;
          margin: 10px;
          box-shadow: 0 8px 6px -6px black;
          backgroundColor: ivory;
        }

        .thumbnail-container {
          width: 40%;
        }

        .download-button {
          margin: 10px;
        }
        .thumbnail {
          width: 100%;
        }

        .button-container {
          display: flex;
          justify-content: space-around;
        }

      `}</style>
      <div>
        <img className="thumbnail" src={props.selectedPhoto.thumbnailURL}/>
        <h3>{props.selectedPhoto.imgTitle}</h3>
        <p>{props.selectedPhoto.longDesc}</p>

        <hr/>
        <h4>Download this image</h4>
        <div className="button-container">
          <Button bsStyle="success" className="download-button"><a href={props.selectedPhoto.socialmediaURL} style={{color: 'white'}} download>Facebook</a></Button>
          <Button bsStyle="success" className="download-button"><a href={props.selectedPhoto.printURL} style={{color: 'white'}} download>Print</a></Button>
          <Button bsStyle="success" className="download-button"><a href={props.selectedPhoto.powerPointURL} style={{color: 'white'}} download>Powerpoint</a></Button>
        </div>

        <hr/>
        <p><span className="label">Image category: </span>{props.selectedPhoto.contentCategory}</p>
        <p><span className="label">Image keywords:</span>{props.selectedPhoto.contentKeywords}</p>
        <p><span className="label">Image orientation:</span> {props.selectedPhoto.orientation}</p>
        <p><span className="label">Image use restrictions:</span> {props.selectedPhoto.useRestrictions}</p>

        <p><span className="label">Photographer:</span>{props.selectedPhoto.photographer}</p>

        <p><span className="label">Photo date:</span>{props.selectedPhoto.photoDate}</p>

        <p><span className="label">Location:</span> {props.selectedPhoto.location}</p>

      </div>

    </div>
  );
}

DetailView.propTypes = {
  selectedPhoto: PropTypes.object
};

export default DetailView;
