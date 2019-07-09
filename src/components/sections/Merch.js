import React from 'react'
import styled from 'styled-components'
import Container from '../atoms/Container'
import Row from '../atoms/Row'

import VinylImg from '../../img/merch-vinyl.jpg'

const ExecProds = styled.div`
  text-align: center;
  & strong {
    font-size: 52px;
    font-weight: normal;
    letter-spacing: 4px;
  }
  & ul {
    font-size: 38px;
    list-style: none;
    margin-top: 0;
    padding-left: 0;
  }
`
const MerchSection = styled.section``
const MerchHeading = styled.h2`
  text-align: center;
`
const MerchCol = styled.div`
  position: relative;
  margin: 1rem 0;
  text-align: center;
`
const MerchLink = styled.a`
  display: inline-block;
  max-width: 100%;
  font-size: 36px;
  letter-spacing: 2px;
  padding: 0.25em 1em;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 2px 2rem rgba(0, 0, 150, 0.13);
  transition: 0.2s all ease-in-out;
  color: white;
  background-color: var(--c-secondary);
  &:hover {
    color: var(--c-secondary);
    background-color: white;
  }
`
const MerchImg = styled.img`
  height: auto;
  width: 50%;
  border-radius: 1rem;
  box-shadow: 0 2px 2rem rgba(0, 0, 150, 0.13);
`
const VinylRow = styled.div`
  text-align: center;
`

const Merch = () => (
  <MerchSection>
    <Container>
      <MerchHeading>Merch</MerchHeading>
      <VinylRow>
        <a href="https://leestavall.com/products/shenendoahthompson">
          <MerchImg src={VinylImg} alt="Vinyl Album" />
        </a>
      </VinylRow>
      <Row>
        <MerchCol>
          <MerchLink
            color="primary"
            size="lg"
            style={{ marginBottom: `2rem` }}
            href="https://www.patreon.com/ShenendoahT"
          >
            Become My Patron
          </MerchLink>
        </MerchCol>
        <MerchCol>
          <MerchLink
            color="primary"
            size="lg"
            style={{ marginBottom: `2rem` }}
            href="https://www.patreon.com/gbarecords"
          >
            Support GBA Records
          </MerchLink>
        </MerchCol>
      </Row>
      <ExecProds>
        <strong>Executive Producers</strong>
        <ul>
          <li>...</li>
          <li>David Beach</li>
          <li>Alina Andreushkina</li>
          <li>David Elster</li>
          <li>Phil Circle</li>
        </ul>
      </ExecProds>
    </Container>
  </MerchSection>
)

export default Merch
