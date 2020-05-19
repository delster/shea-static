import React from 'react'
import tw from 'twin.macro'

export default () => (
  <Footer>
    <Container>
      <Colophon>© Shenendoah Thompson {new Date().getFullYear()}</Colophon>
    </Container>
  </Footer>
)

const Footer = tw.footer`py-4 bg-pink-900`
const Container = tw.div`mx-auto container flex items-center justify-center`
const Colophon = tw.p`text-white text-xs uppercase tracking-wide`