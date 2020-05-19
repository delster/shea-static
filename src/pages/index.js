import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FaFilePdf, FaSpotify } from 'react-icons/fa'

import ResumePDF from '../img/resume-shenendoah-thompson.pdf'
import BackgroundImg from '../img/site-bg.jpg'
import FacebookImg from '../img/sm-icon-facebook.svg'
import InstagramImg from '../img/sm-icon-instagram.svg'
import LinkedInImg from '../img/sm-icon-linkedin.svg'
import SoundCloudImg from '../img/sm-icon-soundcloud.svg'
import TwitterImg from '../img/sm-icon-twitter.svg'

export default () => (
  <Layout>
    <SEO title="Home" />
    <BusinessCard>
      <h1>
        Shenendoah <White>Thompson</White>
      </h1>
      <ContactInfo>
        <ContactWrap>
          <ContactLink href="mailto:shenendoahmt@gmail.com">
            shenendoahmt@gmail.com
          </ContactLink>
          <ContactLink href="tel:+13046858220">304.685.8220</ContactLink>
        </ContactWrap>
      </ContactInfo>
      <HeroSocials>
        <a href="https://facebook.com/ShenendoahT">
          <img src={FacebookImg} alt="Facebook" />
        </a>
        <a href="https://instagram.com/ShenendoahT">
          <img src={InstagramImg} alt="Instagram" />
        </a>
        <a href="https://soundcloud.com/ShenendoahT">
          <img src={SoundCloudImg} alt="SoundCloud" />
        </a>
        <a href="https://twitter.com/ShenendoahT">
          <img src={TwitterImg} alt="Twitter" />
        </a>
        <a href="https://linkedin.com/in/ShenendoahT">
          <img src={LinkedInImg} alt="LinkedIn" />
        </a>
        <SocialIcon href="https://open.spotify.com/artist/3cYP19oM8Ozds1QcZ1E49S?si=We7cJCxMRxqIa7qgT53Vuw">
          <FaSpotify />
        </SocialIcon>
        <SocialIcon href={ResumePDF}>
          <FaFilePdf />
        </SocialIcon>
      </HeroSocials>
    </BusinessCard>
  </Layout>
)

const BusinessCard = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background-image: url(${BackgroundImg});
  background-position: 50% 20%;
  background-size: cover;

  &::before {
    content: '';
    position: fixed;
    display: block;
    height: 100vh;
    width: 100vw;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }

  > * {
    z-index: 1;
  }

  h1 {
    font-size: 5vw;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
    padding: 7vw 0 0 5vw;
  }
`
const White = styled.span`
  display: block;
  color: white;
`
const ContactInfo = styled.div`
  text-align: right;
`
const ContactWrap = styled.div`
  display: inline-block;
  width: auto;
  text-align: center;
`
const ContactLink = styled.a`
  color: white;
  display: block;
  font-size: 2.5vw;
  text-decoration: none;
  margin-bottom: 0.5em;
  padding-right: 2vw;
`
const SocialIcon = styled.a`
  color: ${props => props.theme.color};
  color: ${props => props.theme.color};
`
/* Stolen from Hero.js */
const HeroSocials = styled.div`
  background-color: var(--c-primary);
  display: inline-block;
  margin: auto auto 2rem;
  border-radius: 1rem;

  & a {
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 2vw;
    vertical-align: middle;

    & img {
      height: auto;
      max-height: 100%;
      width: 100%;
    }

    & svg {
      height: 40px;
      width: 40px;
      fill: white;
      background: #1db954;
      border-radius: 50%;
      padding: 10px;
    }

    &:last-of-type svg {
      background: #bb0000;
    }
  }
`

/* Below is the old landing page `index.js`:
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
