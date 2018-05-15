import React from 'react';
import PropTypes from 'prop-types';
import constants from './../../src/constants';
const { c } = constants;
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

function DetailView(props){

  return (
    <div className='modal'>
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
          background-color: #fff6f2;
          background-image: url('https://www.transparenttextures.com/patterns/back-pattern.png');
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

        .modal {
          display: block;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0,0,0); /* Fallback color */
          background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
        }

        .modal-content {
          background-color: #fefefe;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 70%;
        }

      `}</style>
      <div className='modal-content'>
        <img className='thumbnail' src={props.selectedPhoto.thumbnailURL}/>
        <h3>{props.selectedPhoto.imgTitle}</h3>
        <p>{props.selectedPhoto.longDesc}</p>

        <hr/>
        <h4>Download this image</h4>
        <div className='button-container'>
          <Button bsStyle='success' className='download-button'><a href={props.selectedPhoto.socialmediaURL} style={{color: 'white'}} download>Facebook</a></Button>
          <Button bsStyle='success' className='download-button'><a href={props.selectedPhoto.printURL} style={{color: 'white'}} download>Print</a></Button>
          <Button bsStyle='success' className='download-button'><a href={props.selectedPhoto.powerPointURL} style={{color: 'white'}} download>Powerpoint</a></Button>
        </div>

        <hr/>
        <p><span className='label'>Image category: </span>{props.selectedPhoto.contentCategory}</p>
        <p><span className='label'>Image keywords:</span>{props.selectedPhoto.contentKeywords}</p>
        <p><span className='label'>Image orientation:</span> {props.selectedPhoto.orientation}</p>
        <p><span className='label'>Image use restrictions:</span> {props.selectedPhoto.useRestrictions}</p>

        <p><span className='label'>Photographer:</span>{props.selectedPhoto.photographer}</p>

        <p><span className='label'>Photo date:</span>{props.selectedPhoto.photoDate}</p>

        <p><span className='label'>Location:</span> {props.selectedPhoto.location}</p>
        <button>Close</button>
      </div>

    </div>
  );
}

DetailView.propTypes = {
  selectedPhoto: PropTypes.string,
};


export default DetailView;
