import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/atoms/PageTitle'
import PageContainer from '../components/pagecontainer'
import ResumePdf from '../img/resume.pdf'
import ResumePng from '../img/resume-preview.png'
import YoutubeEmbed from '../components/atoms/YoutubeEmbed'

const pageTitle = 'Acting'

export default () => (
  <Layout>
    <SEO title={pageTitle} />

    <PageTitle tw="text-white text-center mt-12 tracking-wider text-6xl">
      {pageTitle}
    </PageTitle>
    <PageContainer>
      <ResumeSection>
        <ResumeLink href={ResumePdf} target="_blank">
          <ResumePreviewImg src={ResumePng} alt="download resume" />
          <ResumeByline>Click image to download resume.</ResumeByline>
        </ResumeLink>
      </ResumeSection>
      <YoutubeSection>
        <YoutubeEmbed
          title="Acting Demo Reel"
          src="https://www.youtube.com/embed/N_qIfxfdc0w"
        />
      </YoutubeSection>
    </PageContainer>
  </Layout>
)

const ResumeSection = tw.section`mb-8`
const ResumeLink = tw.a`flex flex-col items-center justify-center w-full`
const ResumePreviewImg = tw.img`border-DEFAULT border-gray-400 rounded-lg rounded-b-none shadow-xl`
const ResumeByline = tw.p`italic text-sm text-center max-w-3xl my-4`
const YoutubeSection = tw.section`flex items-center justify-center`
