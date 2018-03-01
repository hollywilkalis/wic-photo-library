import React from "react";
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <div className="nav-container">
      <style jsx>{`
        .nav-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          align-items: flex-end;
          flex-wrap: wrap;
          border-bottom: solid 3px #f3716d;
          padding-bottom: 10px;

        }
        li {
          list-style: none;
          font-family: 'Roboto', sans-serif;
          background-color: #6c54a3;
          border: 1px solid black;
          padding: 2px 5px;
          margin: 5px 5px;
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
        img {
          height: 100px;
        }
        `}</style>
      <img src='https://github.com/hollywilkalis/capstone-planning/blob/master/samples/wic-logo-green.png?raw=true'/>
      <div className="nav-links">
        <li><Link style={{color: 'white', textDecoration: 'none' }} to="/">Home</Link></li>
        <li><Link style={{color: 'white', textDecoration: 'none' }} to="/photolist">Search for a photo</Link></li>
        <li><Link style={{color: 'white', textDecoration: 'none' }} to="/about">About the project</Link></li>
      </div>
    </div>
  );
}

export default Nav;
