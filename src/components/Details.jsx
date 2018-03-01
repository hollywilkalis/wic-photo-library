import React from "react";
import PropTypes from "prop-types";

function Details(){
  return (
    <div className="details-container">
      <style jsx>{`
        .details-container {
          width: 50%;
        }
        .label {
          color: #2e3192;
          font-weight: bold;
        }
        h2 {
          color: #2e3192;
        }
        `}</style>
      <h2>Clinic shot with certifier and med tech</h2>
      <p>Clinic setting with young participant and medical technician and WIC coordinator</p>

      <p><span className="label">Image category: </span>Clinic</p>

      <p><span className="label">Image keywords:</span> clinic, medical, technician, child, toddler, participant</p>
      <p><span className="label">Image orientation:</span> Landscape</p>
      <p><span className="label">Image use restrictions:</span> for Oregon WIC and WIC clinic use only</p>
      <hr/>

      <p><span className="label">Photographer:</span></p>

      <p><span className="label">Photo date:</span> 09/2018</p>

      <p><span className="label">Location:</span> Douglas County, Oregon</p>
      <hr/>



    </div>
  );
}

export default Details;
