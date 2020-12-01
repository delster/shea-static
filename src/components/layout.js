import React from 'react'
import tw from 'twin.macro'
import { createGlobalStyle } from 'styled-components'

import Header from './header'
import Footer from './footer'

export default props => (
  <>
    <GlobalStyles bg={props.bg} />
    <Header id="main-header" />
    <Main id="main">{props.children}</Main>
    <Footer id="main-footer" />
  </>
)


const GlobalStyles = createGlobalStyle`
  #___gatsby {
    ${tw`bg-gradient-to-tr from-green-300 via-blue-500 to-pink-800`}

  }
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: url(${props=>props.bg});
    background-position: center top;
    background-size: cover;
  }
`
const Main = tw.main`flex-auto h-full mx-8`