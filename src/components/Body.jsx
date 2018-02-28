import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from 'react-router-dom';

function Body(){
  return (
    <div className="body">
      <style jsx>{`
        .body {
          background-color: #f3716d;
          height: 300px;
          font-family: 'Roboto', sans-serif;
        }
        `}</style>
      <Switch>
        <p>Body works!</p>
      </Switch>
    </div>

  );
}

export default Body;
