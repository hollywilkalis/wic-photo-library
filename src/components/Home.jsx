import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";

function Home(){
  return (
    <div>
      <style jsx>{`
        .hero {
          width: 600px;
          height: 400px;
          border: 2px solid black;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        `}</style>
      <p>Home works!</p>
      <div className="hero"></div>
      <Footer />
    </div>
  );
}

export default Home;
