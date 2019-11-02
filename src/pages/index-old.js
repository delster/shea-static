import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/sections/Hero'
import Featured from '../components/sections/Featured'
import Embed from '../components/sections/Embed'
import Tour from '../components/sections/Tour'
import Merch from '../components/sections/Merch'
import Contact from '../components/sections/Contact'

export default ({ data }) => (
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

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 800, quality: 76) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              presentationWidth
            }
          }
        }
      }
    }
  }
`
