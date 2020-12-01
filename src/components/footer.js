import React from 'react'
import tw from 'twin.macro'
import {
  FaSpotify,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSoundcloud,
  FaTwitter
} from 'react-icons/fa'

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
  <Footer>
    <Container>
      <FooterSocials />
      <Colophon>© Shenendoah Thompson {new Date().getFullYear()}</Colophon>
    </Container>
  </Footer>
)


const FooterSocials = () => (
  <Socials aria-labelledby="footer-socials-label">
    <SocialAriaLabel id="footer-socials-label">
      Social Media Links
    </SocialAriaLabel>
    {IconLinks.map(il => (
      <SocialItem key={il.link}>
        <SocialLink href={il.link} target='_blank'>
          <il.icon />
        </SocialLink>
      </SocialItem>
    ))}
  </Socials>
)
const Footer = tw.footer`pt-4 pb-12`
const Container = tw.div`mx-auto container flex flex-col items-center justify-center`
const Colophon = tw.p`text-white text-xs uppercase tracking-wide`
const Socials = tw.ul`flex items-center justify-center my-8`
const SocialAriaLabel = tw.h3`sr-only`
const SocialItem = tw.li`mx-2 text-white`
const SocialLink = tw.a`text-4xl`
