import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NewBusinessCard from '../components/newbusinesscard'
import BackgroundImg from '../img/site-bg.jpg'

export default () => (
  <Layout bg={BackgroundImg}>
    <SEO title="Home" />
    <NewBusinessCard />
  </Layout>
)
