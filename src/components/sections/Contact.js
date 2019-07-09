import React from 'react'
import styled from 'styled-components'

import Container from '../atoms/Container'
import Row from '../atoms/Row'

const ContactSection = styled.section`
  padding: 2rem 0 6rem;
`
const ContactHeading = styled.h2`
  margin-bottom: 0.2em;
  text-align: center;
`
const ContactColumn = styled.div`
  position: relative;
  margin: 1rem 0;
  text-align: center;
`
const ContactLink = styled.a`
  display: inline-block;
  max-width: 100%;
  font-size: 36px;
  letter-spacing: 2px;
  padding: 0.25em 1em;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 2px 2rem rgba(0, 0, 150, 0.13);
  transition: .2s all ease-in-out;

  color: white;
  background-color: var(--c-secondary);
  &:hover {
    color: var(--c-secondary);
    background-color: white;
  }
`

const Contact = () => (
  <ContactSection>
    <Container>
      <ContactHeading>Reach Out!</ContactHeading>
      <Row>
        <ContactColumn>
          <ContactLink href="https://bit.ly/ShenendoahTBookMe">
            Bookings
          </ContactLink>
        </ContactColumn>
        <ContactColumn>
          <ContactLink href="mailto:shenendoahmt@gmail.com">
            Other Inquiries
          </ContactLink>
        </ContactColumn>
      </Row>
    </Container>
  </ContactSection>
)

export default Contact
