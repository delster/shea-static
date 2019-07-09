import React from 'react'
import styled from 'styled-components'

import Card from '../atoms/Card'
import Container from '../atoms/Container'

import HeroImg from '../../img/guitar-wide.png'
import FacebookImg from '../../img/sm-icon-facebook.svg'
import InstagramImg from '../../img/sm-icon-instagram.svg'
import LinkedInImg from '../../img/sm-icon-linkedin.svg'
import SoundCloudImg from '../../img/sm-icon-soundcloud.svg'
import TwitterImg from '../../img/sm-icon-twitter.svg'

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${HeroImg});
  background-position: top center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 28px; /* Balances out :root margin-top */
`
const HeroHeading = styled.h1`
  color: rgba(255, 255, 255, 0.37);
  font-size: 4vw;
  letter-spacing: 3px;
  padding: 1em 0 4vw;
`
const OverlapSection = styled.section`
  margin-top: -3vw;
  height: 0;
`
const OverlapCard = styled(Card)`
  background-color: var(--c-primary);
  padding: 1rem 0;
`
const HeroSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & a {
    flex: 0 1 10%;
    max-width: 100px;
  }
`
const SpacerSection = styled.section``

export default () => (
  <>
    <HeroSection>
      <HeroHeading>Shenendoah Thompson</HeroHeading>
    </HeroSection>
    <OverlapSection>
      <Container>
        <OverlapCard>
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
          </HeroSocials>
        </OverlapCard>
      </Container>
    </OverlapSection>
    <SpacerSection />
  </>
)
