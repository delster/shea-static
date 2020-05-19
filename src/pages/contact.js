import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageContainer from '../components/pagecontainer'
import BackgroundImg from '../img/headshot-playful.jpg'

export default () => (
  <Layout bg={BackgroundImg}>
    <SEO title={pageTitle} />

    <PageContainer>
      <h1>{pageTitle} Page (WIP)</h1>
    </PageContainer>
  </Layout>
)

const pageTitle = 'Contact'