import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FaFilePdf } from 'react-icons/fa'

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
const SocialIcon = styled.a``
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
      background: #bb0000;
      border-radius: 50%;
      padding: 10px;
    }
  }
`
