import React from 'react'
import { styled } from 'twin.macro'

export default ({ title, src, ...props }) => (
  <VideoWrap>
    <iframe
      title={title}
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      {...props}></iframe>
  </VideoWrap>
)

const VideoWrap = styled.div`
  position: relative;
  height: 0;
  padding: 18.625%;
  width: 80%;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`
