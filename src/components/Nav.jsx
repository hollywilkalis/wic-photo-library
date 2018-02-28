import React from "react";

function Nav(){
  return (
    <div >
      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-end;
        }
        li {
          list-style: none;
          font-family: 'Roboto', sans-serif;
          display: inline-block;
          background-color: #6c54a3;
          border: 1px solid black;
          padding: 2px 5px;
          color: white;
          margin: 2px 5px;
          cursor: pointer;
          box-shadow: 2px 2px #888888;
          }
        li:hover {
          background-color: #f3716d;
        }
        }
        `}</style>
      <li href='#'>Home</li>
      <li href='#'>Search for a photo</li>
      <li href='#'>About the project</li>
      <li href='#'>Contact</li>
    </div>
  );
}

export default Nav;
