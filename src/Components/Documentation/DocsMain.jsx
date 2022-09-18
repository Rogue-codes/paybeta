import React from 'react'
import styled from 'styled-components'
import DocsContent from './DocsContent'

function DocsMain() {
  return (
    <Container>
        <DocsContent/>
    </Container>
  )
}

export default DocsMain

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`