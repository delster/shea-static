import React from 'react'
import styled from 'styled-components'

import Container from '../atoms/Container'

const EmbedSection = styled.section``
const EmbedHeading = styled.h2`
  text-align: center;
`
const StyledEmbed = styled.iframe`
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
`

const Embed = () => (
  <EmbedSection>
    <Container>
      <EmbedHeading>YouTube</EmbedHeading>
      <StyledEmbed
        title="youtube"
        width="100%"
        height="580"
        src="https://www.youtube.com/embed/jM0wu_AQiqU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  </EmbedSection>
)

export default Embed
