import React from "react";
import PropTypes from "prop-types";


function Download(){
  return (
    <div className="download-container">
      <style jsx>{`
        .download-container {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .download-button {
          background-color: #2cb34a;
          border: 1px solid black;
          padding: 2px 5px;
          cursor: pointer;
          box-shadow: 2px 2px #888888;
          color: white;
          border-radius: 3px;
          text-align: center;
          width: 50%;
          margin: 10px 0px;
        }
        `}</style>
      <h3>Download this image</h3>
      <button><a href="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_FB_cover.jpg" style={{color: 'white', textDecoration: 'none' }} download>Facebook</a></button>
      <button><a href="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_print.jpg" style={{color: 'white', textDecoration: 'none' }} download>Print</a></button>
      <button><a href="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_PPT.jpg" style={{color: 'white', textDecoration: 'none' }} download>Powerpoint</a></button>
    </div>
  );
}

export default Download;
