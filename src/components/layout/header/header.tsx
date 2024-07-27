import React from 'react';

import { AccountInfo } from './account-info';
import './header.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav } from 'react-bootstrap';
import './custom.css';
type Props = {
  isAccountVisible: boolean;
};


export function Header({ isAccountVisible }: Props) {
  // const [isMenuOpen] = React.useState(false);

  return (
    <header>
       <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#111120'}}>
        <Navbar.Brand href="#home">
          <img className='logo'  src="/src/components/layout/header/img/LogoUVE.png" alt="Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" style={{color:'white',marginRight:'2.5rem'}} >About us</Nav.Link>
            <Nav.Link href="#features" style={{color:'white',marginRight:'2.5rem'}} >Events</Nav.Link>
            <Nav.Link href="#features" style={{color:'white',marginRight:'2.5rem'}} >Features</Nav.Link>
            {isAccountVisible && <AccountInfo />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      
      
    </header>
  );


}
