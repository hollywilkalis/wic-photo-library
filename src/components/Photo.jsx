import React from "react";
import PropTypes from "prop-types";
import Thumbnail from './Thumbnail';
import Details from './Details';


function Photo(){
  return (
    <div>
      <style jsx>{`
        div {
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
        }
        `}</style>
      <Thumbnail />
      <Details />
    </div>
  );
}

export default Photo;
