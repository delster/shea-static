import React from 'react'
import { createGlobalStyle } from 'styled-components'

import 'normalize.css'
import 'typeface-just-another-hand'
import 'typeface-rock-salt'

const GlobalStyle = createGlobalStyle`
  :root {
    --c-primary: rgb(66, 9, 67);
    --c-secondary: rgb(22, 147, 165);
    --ff-sans: 'Just Another Hand', cursive;
    --ff-handwriting: 'Rock Salt', cursive;
    margin-top: -28px; /* Why?! */
  }
  html, body {
    background-color: #f4f0f8;
    font-family: var(--ff-sans);
    font-size: 20px;
  }
  h1 {
    font-family: var(--ff-handwriting);
  }
  h2 {
    opacity: .27;
    color: var(--c-primary);
    font-family: var(--ff-sans);
    font-size: 120px;
    font-weight: 400;
    line-height: 1em;
    margin-bottom: -.333em;
  }
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
)
