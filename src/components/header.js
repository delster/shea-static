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

const Header = tw.header`px-8 pt-4 pb-6 bg-gradient-to-b from-purple-900 to-transparent`
const Container = tw.div`mx-auto container flex items-center justify-between`
const HeaderLeft = tw.div``
const HeaderRight = tw.div``
const SiteTitle = tw(Link)`text-gray-200 hover:text-white no-underline uppercase tracking-wider font-semibold`