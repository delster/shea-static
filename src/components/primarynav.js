import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'

export default () => (
  <Nav role="navigation" aria-labelledby="primary-nav-label">
    <AriaLabel id="primary-nav-label">Primary Navigation</AriaLabel>
    <NavList role="navigation">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/music"> Music </NavLink>
      <NavLink to="/merch"> Merch </NavLink>
      <NavLink to="/acting"> Acting </NavLink>
      <NavLink to="/contact"> Contact </NavLink>
    </NavList>
  </Nav>
)

const Nav = tw.nav``
const AriaLabel = tw.h2`sr-only`
const NavList = tw.div``
const NavLink = tw(Link)`text-gray-400 hover:text-white no-underline`