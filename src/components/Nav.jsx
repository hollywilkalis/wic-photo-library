import React from "react";
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <div >
      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
        }
        li {
          list-style: none;
          font-family: 'Roboto', sans-serif;
          display: inline-block;
          background-color: #6c54a3;
          border: 1px solid black;
          padding: 2px 5px;
          margin: 2px 5px;
          cursor: pointer;
          box-shadow: 2px 2px #888888;
          color: white;
          border-radius: 3px;
          }
        li:hover {
          background-color: #f3716d;
          color: black;
        }
        }
        `}</style>
      <li><Link style={{color: 'white', textDecoration: 'none' }} to="/">Home</Link></li>
      <li><Link style={{color: 'white', textDecoration: 'none' }} to="/library">Search for a photo</Link></li>
      <li><Link style={{color: 'white', textDecoration: 'none' }} to="/">About the project</Link></li>
      <li><Link style={{color: 'white', textDecoration: 'none' }} to="/">Contact</Link></li>
    </div>
  );
}

export default Nav;
