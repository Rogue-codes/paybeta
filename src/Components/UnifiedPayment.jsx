import React from 'react'
import styled from 'styled-components'

function UnifiedPayment() {
  return (
    <Container>
        <h1>A fully unified set <span>of Payment Tools</span></h1>
    </Container>
  )
}

export default UnifiedPayment

const Container = styled.div`
    @media (max-width: 480px) {
      margin-top: 5%;
      margin-bottom: 5%;
      height: auto;
    }
    margin-top: 6%;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5%;
    h1{
      @media (max-width: 480px) {
        width: 90%;
        font-size: 2rem;
      }
      width: 60%;
      font-size: 7vw;
      font-family: 'Alfa Slab One', cursive;
      color: #000;
      span{
          color:#fb9129
      }
    }
`