import React, { useState } from 'react'
import styled from 'styled-components'
import AltImg from '../../img/headshot-playful.jpg'
import DefaultImg from '../../img/headshot-serious.jpg'

const StyledImg = styled.img`
  height: 100%;
  max-height: 300px;
  width: auto;
`

const Headshot = () => {
  const [isAlt, setIsAlt] = useState(false)

  const toggleAlt = () => setIsAlt(!isAlt)

  return <StyledImg alt="headshot"
              src={isAlt?AltImg:DefaultImg}
              onMouseEnter={toggleAlt}
              onMouseLeave={toggleAlt} />
}

export default Headshot