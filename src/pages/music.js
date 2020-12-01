import React from 'react'
import tw, { styled } from 'twin.macro'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/atoms/PageTitle'
import PageContainer from '../components/pagecontainer'
import BWCWAlbumCover from '../img/album-cover-bwcw.png'
import ESTDAlbumCover from '../img/album-cover-estd.jpg'
import TBHOMAlbumCover from '../img/album-cover-tbhom.png'
import GbaAdVideo from '../img/gba-video-ad.mp4'

const pageTitle = 'Music'

const albums = [
  {
    alt: 'Bow Who Cried Wolf',
    imgSrc: BWCWAlbumCover,
    url: 'https://music.apple.com/album/1464729327'
  },
  {
    alt: 'Easier Said Than Done',
    imgSrc: ESTDAlbumCover,
    url: 'https://music.apple.com/album/1450885778'
  },
  {
    alt: 'This Big Head of Mine',
    imgSrc: TBHOMAlbumCover,
    url: 'https://music.apple.com/album/1462692791'
  }
]

export default () => (
  <Layout>
    <SEO title={pageTitle} />

    <PageTitle tw="text-white text-center mt-12 tracking-wider text-6xl">
      {pageTitle}
    </PageTitle>
    <PageContainer>
      <Section>
        <Spotify
          title="Guilt By Association Records Ad"
          src="https://open.spotify.com/embed/artist/3cYP19oM8Ozds1QcZ1E49S"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Section>
      <Section>
        <ITunesRow>
          {albums.map(a => (
            <ITunesLi key={a.url}>
              <AlbumLink href={a.url} target="_blank">
                <AlbumCover src={a.imgSrc} alt={a.alt} />
              </AlbumLink>
            </ITunesLi>
          ))}
        </ITunesRow>
      </Section>
      <Section>
        <VideoWrap>
          <video autoPlay muted loop>
            <source src={GbaAdVideo} />
          </video>
        </VideoWrap>
      </Section>
    </PageContainer>
  </Layout>
)

const Section = tw.section`flex items-center justify-center`
const Spotify = tw.iframe`h-64 w-full`
const ITunesRow = tw.ul`flex items-center justify-around w-full my-32`
const ITunesLi = tw.li``
const AlbumLink = tw.a``
const AlbumCover = tw.img`h-64`

const VideoWrap = styled.div`
  position: relative;
  height: 0;
  padding: 18.625%;
  width: 80%;
  & video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`
