import {Spinner} from 'office-ui-fabric-react'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`


const LoadingView = () => (
  <Container>
    <Spinner label='Loading...'/>
  </Container>
)

export default LoadingView
