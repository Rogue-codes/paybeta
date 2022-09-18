import React from 'react'
import styled from 'styled-components'
import GlobalBanner from './globalContents/GlobalBanner'
import GlobalReach from './globalContents/GlobalReach'

function GlobalMain() {
  return (
    <Container>
        <GlobalReach/>
        <GlobalBanner/>
    </Container>
  )
}

export default GlobalMain

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: white;
    margin-bottom: 8%;
`