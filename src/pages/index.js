import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/sections/Hero'
import Featured from '../components/sections/Featured'
import Embed from '../components/sections/Embed'
import Tour from '../components/sections/Tour'
import Merch from "../components/sections/Merch"
import Contact from "../components/sections/Contact"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Featured />
    <Embed />
    <Tour />
    <Merch />
    <Contact />
  </Layout>
)
