import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink
} from 'reactstrap';
import logo from '../../assets/images/gli-oblong-logo.png';
import Portfolio from '../../views/PortfolioPage';
import Homepage from '../../views/Homepage';
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
      <Router>
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
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Portfolio">Portfolio</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Services">Services</Link>
                </NavItem>
                <NavItem>
                  <Link to="/About">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Contact">Contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          
          <Route path="/" exact HomePage={Homepage} />
          <Route path="/Portfolio" Portfolio={Portfolio} />
        </>
      </Router>
    );
  }
}

export default Header;
