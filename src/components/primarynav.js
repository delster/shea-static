import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'

const navLinks = [
  { path: '/writing', text: 'Writing' },
  { path: '/acting', text: 'Acting' },
  { path: '/music', text: 'Music' },
  { path: '/contact', text: 'Contact' }
]

export default () => (
  <Nav role="navigation" aria-labelledby="primary-nav-label">
    <AriaLabel id="primary-nav-label">Primary Navigation</AriaLabel>
    <NavList role="navigation">
      {navLinks.map(nl => (
        <NavLink key={nl.text} to={nl.path}>
          {nl.text}
        </NavLink>
      ))}
    </NavList>
  </Nav>
)

const Nav = tw.nav``
const AriaLabel = tw.h2`sr-only`
const NavList = tw.div``
const NavLink = tw(Link)`
  inline-block font-semibold text-lg text-center tracking-wider uppercase no-underline
  text-gray-200
  hover:text-white
  mx-4 my-2
  hover:mb-0
  hover:pb-1
  hover:border-b-2
  hover:border-solid
  hover:border-current
`
