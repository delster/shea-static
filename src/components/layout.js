import React from 'react'
import tw from 'twin.macro'
import { createGlobalStyle } from 'styled-components'

import Header from './header'
import Footer from './footer'

export default props => (
  <>
    <GlobalStyles bg={props.bg} />
    <Header />
    <Main>{props.children}</Main>
    <Footer />
  </>
)


const GlobalStyles = createGlobalStyle`
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: url(${props=>props.bg});
    background-position: center top;
    background-size: cover;
  }
`
const Main = tw.main`flex-auto h-full`