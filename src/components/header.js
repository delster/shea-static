import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'
import PrimaryNav from './primarynav'


export default () => (
  <Header>
    <Container>
      <HeaderLeft>
        <SiteTitle to="/">Shenendoah Thompson</SiteTitle>
      </HeaderLeft>
      <HeaderRight>
        <PrimaryNav />
      </HeaderRight>
    </Container>
  </Header>
)

const Header = tw.header`py-2 bg-pink-900`
const Container = tw.div`mx-auto container flex items-center justify-between`
const HeaderLeft = tw.div``
const HeaderRight = tw.div``
const SiteTitle = tw(Link)`text-gray-200 hover:text-white no-underline uppercase tracking-wider font-semibold`