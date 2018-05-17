import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function SiteNav(){
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <img style={{width: '100px'}} pullLeft src='https://github.com/hollywilkalis/capstone-planning/blob/master/samples/wic-logo-green.png?raw=true' />
        </Navbar.Header>
        <Nav pullRight style={{marginTop: '20px'}}>
          <NavItem><Link to ="/" style={{color: '#2cb34a', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></NavItem>
          <NavItem><Link to="/photos" style={{color: '#2cb34a',  textDecoration: 'none', fontWeight: 'bold' }}>Find a photo</Link></NavItem>
          <NavItem><Link to="/about" style={{color: '#2cb34a',  textDecoration: 'none', fontWeight: 'bold' }}>About the project</Link></NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default SiteNav;
