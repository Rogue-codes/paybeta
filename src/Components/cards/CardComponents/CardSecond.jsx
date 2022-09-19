import React from 'react'
import styled from 'styled-components'

function CardSecond() {
  return (
    <Container>
        <Top>
            <img src="/BC_Right_Angle_529x382.png" alt="" />
        </Top>
    </Container>
  )
}

export default CardSecond

const Container = styled.div`
    @media (max-width: 480px) {
      height: auto;
    }
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1d1d1d;
`
const Top = styled.div`
    @media (max-width: 480px) {
      width: 80%;
      height: 60%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    width: 50%;
    height: 80vh;
    margin-top: 9%;
`