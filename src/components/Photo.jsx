import React from "react";
import PropTypes from "prop-types";
import Thumbnail from './Thumbnail';
import Details from './Details';
import Download from './Download';

function Photo(){
  return (
    <div>
      <style jsx>{`

        `}</style>
      <Thumbnail />
      <Details />
      <Download />
    </div>
  );
}

export default Photo;
