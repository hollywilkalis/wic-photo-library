import React from "react";
import PropTypes from "prop-types";

function Search(){
  return (
    <div className="search-container">
      <style jsx>{`
        .search-container {
          width: 30%;
          min-width: 200px;
          max-width: 300px;
        }
        `}</style>
      <form>
      <input placeholder="dropdown to go here"/>
      </form>
    </div>
  );
}

export default Search;
