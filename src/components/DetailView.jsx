import React from "react";
import PropTypes from "prop-types";
import Thumbnail from "./Thumbnail";
import Details from "./Details";
import Download from "./Download";

function DetailView(props){

  return (
    <div >
        Detail View Works!
        <Thumbnail/>
        <Details/>
        <Download />

    </div>
  );
}


export default DetailView;
