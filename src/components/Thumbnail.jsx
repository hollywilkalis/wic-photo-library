import React from "react";
import PropTypes from "prop-types";
import Download from './Download';

function Thumbnail(){
  return (
    <div className="thumbnail-container">
      <style jsx>{`
        .thumbnail-container {
          width: 50%;
        }
        .thumbnail {
          width: 90%;
          border: 2px solid darkgray;
        }

        `}</style>
      <img className="thumbnail" src="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/BFMB_035_FB_cover.jpg?raw=true" />
      <Download />
    </div>
  );
}

export default Thumbnail;
