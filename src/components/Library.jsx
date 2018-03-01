import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Library(){
  return (
    <div>
      <style jsx>{`

        `}</style>
      <p>Library works!</p>
      <p>View a <Link style={{color: 'white', textDecoration: 'none' }} to="/photo">photo</Link> Details</p>
    </div>
  );
}

export default Library;
