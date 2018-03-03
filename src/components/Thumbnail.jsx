import React from "react";
import PropTypes from "prop-types";
import Download from './Download';

function Thumbnail(){
  return (
    <div className="thumbnail-container">
      <style jsx>{`
        .thumbnail-container {
          width: 25%;
        }
        .thumbnail {
          width: 90%;
          border: 2px solid darkgray;
        }

        `}</style>
      <img className="thumbnail" src="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_PPT.jpg?raw=true" />
    </div>
  );
}

export default Thumbnail;
