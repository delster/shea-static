import React from 'react'
import tw from 'twin.macro'
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/atoms/PageTitle'
import BackgroundImg from '../img/contact-bg.jpg'

const pageTitle = 'Contact'

export default () => (
  <Layout bg={BackgroundImg}>
    <CenteringCss />
    <SEO title={pageTitle} />
    <PageTitle tw="text-white mt-12 tracking-wider text-6xl">
      {pageTitle}
    </PageTitle>
    <EmailLink href="mailto:shenendoahmt@gmail.com" target="_blank">
      shenendoahmt@gmail.com
    </EmailLink>
  </Layout>
)

const EmailLink = tw.a`inline-block text-center text-white text-2xl`
const CenteringCss = createGlobalStyle`
  #main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`