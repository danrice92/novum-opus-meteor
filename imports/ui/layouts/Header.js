import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function Header() {
  return (
    <header>
      <Navbar className="navigation">
        <NavbarBrand href="/">
          <h1 className="hero-link">Novum Opus</h1>
        </NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink href="/jobposts/new" className="link">Post a job</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="sub-header">Pay the bills. Get qualified. Launch your career, debt-free.</div>
      <br />
    </header>
  );
}
