import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div className="footer-container">
      <style jsx>{`
        .footer-container {
          background-color: #f3716d;
          color: white;
          display: flex;
          justify-content: space-between;
          padding: 20px;
          width: 100%;
          font-size: 15px;
          margin-top: 40px;
        }
        h4 {
          font-weight: bold;
        }
        a {
          color: ivory;
          font-weight: bold;
        }
        `}</style>

      <div>
        <h4>Oregon WIC Photo Library</h4>
        <p>This photo library is a project of the Oregon WIC Program.</p>

        <p>Site design and development by <a href="mailto:holly.wilkalis@gmail.com">Holly Wilkalis</a></p>

      </div>
      <div>
        <p>Oregon WIC Program<br/>
        800 NE Oregon St Suite 865<br/>
        Portland, OR 97232<br/>
        971-673-0040<br/>
          <a href="mailto:barbra.a.mcclendon@state.or.us">Email us</a></p>
        <Link to="/photoinput" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '10px' }}>Admin login</Link>
      </div>
    </div>
  );
}

export default Footer;
