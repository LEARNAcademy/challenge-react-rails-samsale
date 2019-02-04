import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink } from 'reactstrap'
class NavBar extends React.Component {
  render () {
    return (
      <div>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact Us</NavLink>
        </NavItem>
      </Nav>
    <hr></hr>
</div>
    );
  }
}

export default NavBar
