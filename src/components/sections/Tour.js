import React from 'react'
import styled from 'styled-components'

import Container from '../atoms/Container'

const TourSection = styled.section`
 & ${Container} {
   text-align: center;
 }
`
const TourHeading = styled.h2`
  text-align: center;
`

const Tour = () => (
  <TourSection>
    <Container>
      <TourHeading>Tour Dates</TourHeading>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/pg/ShenendoahT"
        data-tabs="events"
        data-height="500"
        data-width="800"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      />
    </Container>
  </TourSection>
)

export default Tour
