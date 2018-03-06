import React from "react";
import PropTypes from "prop-types";
import { Modal } from 'react-bootstrap';


function DetailView(props){
  return (
    <div>
      <Modal.Dialog>
        <h1>{props.selectedPhoto.imgTitle}</h1>
        <h2>{props.selectedPhoto.location}</h2>
      </Modal.Dialog>
    </div>
  );
}

DetailView.propTypes = {
  selectedPhoto: PropTypes.object
};

export default DetailView;
