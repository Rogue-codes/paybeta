import React from 'react'
import styled from 'styled-components'
import CardFirst from './CardComponents/CardFirst'
import CardSecond from './CardComponents/CardSecond'
import CardThird from './CardComponents/CardThird'
import CardThirdMobile from './CardComponents/CardThirdMobile'

function CardMain() {
  return (
    <Container>
        <CardFirst/>
        <CardSecond/>
        <CardThird/>
        <CardThirdMobile/>
    </Container>
  )
}

export default CardMain

const Container = styled.div`
    width: 100%;
    height: auto;
    background: #1d1d1d;
`