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
import ResumePDF from '../img/resume.pdf'

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
  }
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

    <Copy css={{maxWidth: `80ch`}}>{copyText.split("\n").map(p=><CopyP key={p.length}>{p}</CopyP>)}</Copy>

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

const Copy = tw.div`text-2xl mt-12 mb-24 mx-auto`
const CopyP = tw.p`mb-6`
const copyText = `Shenendoah Thompson has been performing since he could walk. He has acted in and assisted with over a hundred various productions ranging from contemporary musical theatre such as Fiddler on the Roof, Wizard of Oz, The Wiz, Honk!, High School Musical, to more operatic titles such as Sweeney Todd, Into the Woods & Pirates of Penzance.

He has directed dozens of plays and worked on numerous independent films. A production of John Logan’s RED, earned a Best Actor Award for his portrayal of Ken, and a Best Play Award from the 2015 West Virginia Theatre Association.

As a singer-songwriter he has released two albums and three singles of his original composition. He is currently working on his third album.

Always open to endeavor into any creative idiom, his future plans include producing his original screenplay and completing his mid-life memoir. He resides in Peekskill NY with his loving fiance Stephanie.`