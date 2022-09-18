import React from 'react'
import styled from 'styled-components'
import First from './BuildComp/First'
import Fourth from './BuildComp/Fourth'
import Second from './BuildComp/Second'
import Third from './BuildComp/Third'

function BuildMain() {
  return (
    <Container>
        <First/>
        <Second/>
        <Third/>
        <Fourth/>
    </Container>
  )
}

export default BuildMain

const Container = styled.div`
  margin-top: 15%;
  width: 100%;
  min-height: 100vh;
  background: #f8fafd;
  padding-bottom: 10%;
`