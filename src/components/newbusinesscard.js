import React from 'react'
import tw from 'twin.macro'
import { FaEnvelope } from 'react-icons/fa'
import {
  FaFilePdf,
  FaSpotify,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSoundcloud,
  FaTwitter
} from 'react-icons/fa'
import pfp from '../img/headshot-serious.jpg'
import ResumePDF from '../img/resume-shenendoah-thompson.pdf'

const IconLinks = [
  { icon: FaFacebook, link: 'https://facebook.com/ShenendoahT' },
  { icon: FaInstagram, link: 'https://instagram.com/ShenendoahT' },
  { icon: FaSoundcloud, link: 'https://soundcloud.com/ShenendoahT' },
  { icon: FaTwitter, link: 'https://twitter.com/ShenendoahT' },
  { icon: FaLinkedin, link: 'https://linkedin.com/in/ShenendoahT' },
  {
    icon: FaSpotify,
    link:
      'https://open.spotify.com/artist/3cYP19oM8Ozds1QcZ1E49S?si=We7cJCxMRxqIa7qgT53Vuw'
  },
  { icon: FaFilePdf, link: ResumePDF }
]

export default () => (
  <Card>
    <PFP src={pfp} alt="head shot of Shenendoah Thompson" />

    <Name>Shenendoah Thompson</Name>

    <EmailLink href="mailto:shenendoahmt@gmail.com" target="_blank">
      <Icon>
        <FaEnvelope size={24} />
      </Icon>
      shenendoahmt@gmail.com
    </EmailLink>

    <Socials aria-labelledby="home-socials-label">
      <SocialAriaLabel id="home-socials-label">
        Social Media Links
      </SocialAriaLabel>
      {IconLinks.map(il => (
        <SocialItem key={il.link}>
          <SocialLink href={il.link}>
            <il.icon />
          </SocialLink>
        </SocialItem>
      ))}
    </Socials>
  </Card>
)

const Card = tw.div`bg-gray-100 rounded-lg p-8 shadow-xl mx-auto my-12 container mt-48`
const PFP = tw.img`h-56 w-56 rounded-full object-cover object-left-top mx-auto -mt-32 mb-0`
const Name = tw.h1`text-3xl font-semibold uppercase m-2 text-center`
const EmailLink = tw.a`flex items-center justify-center tracking-wide`
const Icon = tw.span`mr-2`
const Socials = tw.ul`flex items-center justify-center mt-8`
const SocialAriaLabel = tw.h3`sr-only`
const SocialItem = tw.li`mx-2`
const SocialLink = tw.a`text-4xl`
