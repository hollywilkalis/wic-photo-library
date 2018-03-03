import React from "react";
import PropTypes from "prop-types";

function About(){
  return (
    <div>
      <style jsx>{`
        img {
          width: 40%;
          float: right;
          margin: 0 20px;
          border: 7px solid #2e3192;
          padding: 4px;
          border-radius: 10%;
        }
        h2 {
          color: #2e3192;
          font-size: 30px;
          text-align: center;
        }
        `}</style>
    <h2>About the WIC Photo Library</h2>
    <img src="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/FAM_024_FB.jpg?raw=true"/>
    <p>Cut the cheese airedale goat. Everyone loves edam cream cheese cheeseburger squirty cheese emmental cheesy grin cheese and wine. Cheese slices manchego cheese triangles who moved my cheese mascarpone fromage frais cheese and biscuits cow. Cut the cheese macaroni cheese bocconcini.</p>

    <p>Who moved my cheese brie cow. Mascarpone the big cheese paneer cauliflower cheese melted cheese queso boursin stinking bishop. Bocconcini who moved my cheese macaroni cheese when the cheese comes out everybodys happy stilton rubber cheese airedale queso. Fromage melted cheese cauliflower cheese caerphilly swiss.</p>


    </div>
  );
}

export default About;
