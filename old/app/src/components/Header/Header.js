import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink
} from 'reactstrap';
import logo from '../../assets/images/gli-oblong-logo.png';
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img
              className="img-fluid"
              src={logo}
              alt={`GLI Norcal Landscape Construction`}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
