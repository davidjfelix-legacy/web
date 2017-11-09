import React from 'react'
import styled from 'styled-components'


const BlueStop = styled.stop`
  stop-color: #1976D2;
  stop-opacity: 1;
`

const LightBlueStop = styled.stop`
  stop-color: #BBDEFB;
  stop-opacity: 1;
`

const MagentaStop = styled.stop`
  stop-color: #9C27B0;
  stop-opacity: 1;
`

const VioletStop = styled.stop`
  stop-color: #210041;
  stop-opacity: 1;
`

const PinkStop = styled.stop`
  stop-color: #E1BEE7;
  stop-opacity: 1;
`

const Text = styled.text`
    paint-order: stroke;
    stroke: #ffffff;
    stroke-width: 2px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
`

const Logo = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 45'>
    <defs>
      <linearGradient id='grad1' x1='0%' y1='20%' x2='0%' y2='85%'>
        <BlueStop offset='0%'/>
        <BlueStop offset='40%'/>
        <LightBlueStop offset='40.1%'/>
        <LightBlueStop offset='50%'/>
        <VioletStop offset='50.1%'/>
        <VioletStop offset='63%'/>
        <MagentaStop offset='63.1%'/>
        <MagentaStop offset='79%'/>
        <PinkStop offset='79.1%'/>
        <PinkStop offset='100%'/>
      </linearGradient>
    </defs>
    <Text
      x='5'
      y='40'
      fontFamily='Arvo'
      fontWeight='bold'
      fontStyle='italic'
      fontSize='40'
      fill='url(#grad1)'
    >iotv
    </Text>
  </svg>
)

export default Logo
