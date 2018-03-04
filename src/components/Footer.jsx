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
          padding: 20px;
          width: 100%;
          font-size: 15px;
        }
        h4 {
          font-weight: bold;
        }
        `}</style>

        <div>
          <h4>Oregon WIC Photo Library</h4>
          <p>This library is a project of the Oregon WIC Program.</p>
        </div>
        <div>
          <p>Oregon WIC Program<br/>
          800 NE Oregon St Suite 865<br/>
          Portland, OR 97232<br/>
          Phone<br/>
          Email</p>
        </div>
    </div>
  );
}

export default Footer;
