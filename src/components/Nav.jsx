import React from "react";
import { Navbar, NavItem } from 'react-materialize';


function Nav(){
  return (
    <div>
      <style jsx>{`
            .wic-nav {
              background-color: #2e3192;
              padding: 0px 10px;
            }
        `}</style>
    <Navbar className="wic-nav" brand='WIC Photo Library' right>
    	<NavItem href='#'>Home</NavItem>
    	<NavItem href='#'>Search for a photo</NavItem>
      <NavItem href='#'>About the project</NavItem>
      <NavItem href='#'>Contact</NavItem>
    </Navbar>
    </div>
  );
}

export default Nav;
