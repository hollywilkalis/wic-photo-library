import React from "react";
import PropTypes from "prop-types";

function About(){
  return (
    <div>
      <style jsx>{`

        .imagedropshadow {
          width: 40%;
          float: right;
          margin: 0 20px;
          padding: 8px;
          border: solid 1px #EFEFEF;
          -moz-box-shadow: 1px 1px 5px #999;
          -webkit-box-shadow: 1px 1px 5px #999;
              box-shadow: 1px 1px 5px #999;
        }

        h2 {
          color: #2e3192;
          font-size: 30px;
          margin-bottom: 20px;
          font-weight: bold;
        }

        `}</style>
    <img className="imagedropshadow" src="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/FAM_024_FB.jpg?raw=true"/>

    <h2>About the WIC Photo Library</h2>
    <p>Cut the cheese airedale goat. Everyone loves edam cream cheese cheeseburger squirty cheese emmental cheesy grin cheese and wine. Cheese slices manchego cheese triangles who moved my cheese mascarpone fromage frais cheese and biscuits cow. Cut the cheese macaroni cheese bocconcini.</p>

    <p>Who moved my cheese brie cow. Mascarpone the big cheese paneer cauliflower cheese melted cheese queso boursin stinking bishop. Bocconcini who moved my cheese macaroni cheese when the cheese comes out everybodys happy stilton rubber cheese airedale queso. Fromage melted cheese cauliflower cheese caerphilly swiss.</p>


    </div>
  );
}

export default About;
