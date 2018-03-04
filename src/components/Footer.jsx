import React from "react";
import PropTypes from "prop-types";

function Footer(){
  return (
    <div className="footer-container">
      <style jsx>{`
        .footer-container {
          background-color: #f3716d;
          color: white;
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          padding: 10px;
          width: 100%;
        }
        `}</style>
        <div>Something to go here about the who can use the library, maybe?</div>
        <div>Barb McClendon</div>
    </div>
  );
}

export default Footer;
