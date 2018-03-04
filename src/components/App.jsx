import React from "react";
import SiteNav from './SiteNav';
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
      <SiteNav />
      <Body />
    </div>
  );
}

export default App;
