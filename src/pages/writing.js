import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionTitle from '../components/atoms/sectiontitle'
import PageTitle from '../components/atoms/pagetitle'
import PageContainer from '../components/pagecontainer'
import BackgroundImg from '../img/writing-bg.jpg'
import DecisionSamplePdf from '../img/writing-sample-decision.pdf'
import DecisionSamplePng from '../img/writing-sample-decision.png'
import SubwaySamplePdf from '../img/writing-sample-subway.pdf'
import SubwaySamplePng from '../img/writing-sample-subway.png'
import WidowerSamplePdf from '../img/writing-sample-widower.pdf'
import WidowerSamplePng from '../img/writing-sample-widower.png'

const pageTitle = 'Writing'

export default () => (
  <Layout>
    <SEO title={pageTitle} />

    <PageTitle tw="text-white text-center mt-12 tracking-wider text-6xl">
      {pageTitle}
    </PageTitle>
    <PageContainer>
      <WritingBioSection>
        <ImageCol>
          <Headshot src={BackgroundImg} alt="head shot" />
        </ImageCol>
        <CopyCol>
          <CopyP>
            Shenendoah Thompson has been performing since he could walk. He has
            acted in and assisted with over a hundred productions ranging from
            contemporary musical theatre such as Fiddler on the Roof, Wizard of
            Oz, The Wiz, Honk!, High School Musical, to more operatic titles
            such as Sweeney Todd, Into the Woods & Pirates of Penzance.
          </CopyP>

          <CopyP>
            He has Directed dozens of plays and worked on numerous independent
            films. A production of John Logan’s RED, earned a Best Actor Award
            for his portrayal of Ken, and a Best Play Award from the 2015 West
            Virginia Theatre Association.
          </CopyP>

          <CopyP>
            As a writer he has completed several stage and screenplays, with
            hopes of producing them in the future.
          </CopyP>

          <CopyP>
            As a singer-songwriter he has released two albums and three singles
            of his original composition. He is currently working on his third
            album.
          </CopyP>

          <CopyP>
            Always open to endeavor into any creative idiom, his future plans
            include producing his original screenplay and completing his
            mid-life memoir. He resides in Peekskill NY with his loving fiance
            Stephanie.
          </CopyP>
        </CopyCol>
      </WritingBioSection>
      <PlaywrightSamplesSection>
        <SectionTitle tw="text-center">Samples</SectionTitle>
        <PlayList>
          <Play>
            <PlayTitle>Decision</PlayTitle>
            <PlaySampleLink href={DecisionSamplePdf} target="_blank">
              <img src={DecisionSamplePng} alt="Decision playwriting sample" />
              <PlayByline>
                A family faces the decision to end life support.
              </PlayByline>
            </PlaySampleLink>
          </Play>
          <Play>
            <PlayTitle>Ghost of 103rd Street Station</PlayTitle>
            <PlaySampleLink href={SubwaySamplePdf} target="_blank">
              <img src={SubwaySamplePng} alt="Subway playwriting sample" />
              <PlayByline>
                A glimpse at the many worlds within our world.
              </PlayByline>
            </PlaySampleLink>
          </Play>
          <Play>
            <PlayTitle>Widower</PlayTitle>
            <PlaySampleLink href={WidowerSamplePdf} target="_blank">
              <img src={WidowerSamplePng} alt="Widower playwriting sample" />
              <PlayByline>
                An Old Man and Wife go through the process of grieving and
                moving on after an untimely passing, with the help of their
                daughter.
              </PlayByline>
            </PlaySampleLink>
          </Play>
        </PlayList>
      </PlaywrightSamplesSection>
    </PageContainer>
  </Layout>
)

const WritingBioSection = tw.section`flex flex-col xl:flex-row justify-between`
const ImageCol = tw.div`xl:w-1/2 p-4 pt-0 pb-12`
const Headshot = tw.img`rounded-lg shadow-lg`
const CopyCol = tw.div`xl:w-1/2 p-2 pt-0`
const CopyP = tw.p`text-lg mb-8 leading-8`

const PlaywrightSamplesSection = tw.section`my-24`
const PlayList = tw.ul``
const Play = tw.li`mb-32`
const PlayTitle = tw.h3`text-2xl text-center font-normal font-serif tracking-wider m-2 hidden`
const PlaySampleLink = tw.a`flex flex-col items-center justify-center w-full`
const PlayByline = tw.p`italic my-4 text-center text-xl max-w-3xl`