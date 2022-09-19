import React from 'react'
import styled from 'styled-components'
import AllCollapseExample from './AllCollapseExample'

function MobileFoot() {
  return (
    <Container>
        <AllCollapseExample/>
    </Container>
  )
}

export default MobileFoot
const Container = styled.div`
    @media (max-width: 480px) {
        display: block;
    }
    display: none;
`