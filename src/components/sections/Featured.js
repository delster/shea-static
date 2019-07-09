import React from 'react'
import styled from 'styled-components'
import { FaApple, FaSpotify } from 'react-icons/fa'

import Card from '../atoms/Card'
import Container from '../atoms/Container'
import Row from '../atoms/Row'

import EasierSaidImg from '../../img/featured-easiersaid.png'
import ThePairImg from '../../img/featured-thepair.jpg'
import BoyWhoCriedWolfImg from '../../img/featured-boywhocriedwolf.png'
import ThisBigHeadOfMineImg from '../../img/featured-thisbigheadofmine.png'

const FeaturedSection = styled.section`
  padding-top: 6rem;
`
const FeaturedHeading = styled.h2`text-align: center`
const FeaturedCard = styled(Card)`
  padding: 2rem 1rem;
  text-align: center;
  margin-bottom: 1em;
`
const FeaturedImage = styled.img`
  margin: 0 auto;
  width: 75%;
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  ${props => props.circle && `border-radius: 50%;`}
`
const FeaturedLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  & a {
    color: var(--c-primary);
    margin: 0 0.5em;
    transition: 0.2s color ease-in-out;
    &:hover {
      color: var(--c-secondary);
    }
  }
`

// TODO: Refactor away from reactstrap to styled-components

const Featured = () => (
  <FeaturedSection>
    <Container>
      <FeaturedHeading>Albums</FeaturedHeading>
      <Row>
        <FeaturedCard>
          <FeaturedImage
            circle
            src={EasierSaidImg}
            alt="Easier Said Than Done cover art"
          />
          <FeaturedLinks>
            <a
              aria-label="Easier Said Than Done on iTunes"
              href="https://music.apple.com/album/1450885778?app=itunes&ls=1">
              <FaApple size={48} />
            </a>
            <a
              aria-label="Easier Said Than Done on Spotify"
              href="https://open.spotify.com/album/1NKSfAjzFUFPZ1ImHUphlh">
              <FaSpotify size={42} />
            </a>
          </FeaturedLinks>
        </FeaturedCard>
        <FeaturedCard>
          <FeaturedImage src={ThePairImg} alt="The Pair cover art" />
          <FeaturedLinks>
            <a
              aria-label="The Pair on iTunes"
              href="https://music.apple.com/us/album/the-pair-ep/975733756">
              <FaApple size={48} />
            </a>
            <a
              aria-label="The Pair on Spotify"
              href="https://open.spotify.com/album/5HkfOzqW3J3sW4f4WxmBJD">
              <FaSpotify size={42} />
            </a>
          </FeaturedLinks>
        </FeaturedCard>
      </Row>
      <Row>
        <FeaturedCard>
          <FeaturedImage
            src={BoyWhoCriedWolfImg}
            alt="Boy Who Cried Wolf cover art"
          />
          <FeaturedLinks>
            <a
              aria-label="Boy Who Cried Wolf on iTunes"
              href="http://itunes.apple.com/album/id1464729327?ls=1&app=itunes">
              <FaApple size={48} />
            </a>
            <a
              aria-label="Boy Who Cried Wolf on Spotify"
              href="https://open.spotify.com/album/0QETzSo2LYh71L8KTWNgcK">
              <FaSpotify size={42} />
            </a>
          </FeaturedLinks>
        </FeaturedCard>
        <FeaturedCard>
          <FeaturedImage
            src={ThisBigHeadOfMineImg}
            alt="This Big Head of Mine cover art"
          />
          <FeaturedLinks>
            <a
              aria-label="This Big Head of Mine on iTunes"
              href="https://music.apple.com/album/1462692791?app=itunes&ls=1">
              <FaApple size={48} />
            </a>
            <a
              aria-label="This Big Head of Mine on Spotify"
              href="https://open.spotify.com/album/5kRSwmNxgUnUz7z8xxHQXL?si=T2arBsSWRAiPUNH89HKs3w">
              <FaSpotify size={42} />
            </a>
          </FeaturedLinks>
        </FeaturedCard>
      </Row>
    </Container>
  </FeaturedSection>
)

export default Featured
