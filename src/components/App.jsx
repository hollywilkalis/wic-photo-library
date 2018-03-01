import React from "react";
import Nav from './Nav';
import Body from './Body';


function App(){
  return (
    <div>
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: 'Open Sans', sans-serif;
        }
        `}</style>
      <Nav />
      <Body />
    </div>
  );
}

export default App;
