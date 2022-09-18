import React from 'react'
import styled from 'styled-components'

function First() {
  return (
    <Container>
        <h1>Build a successful online business with our <span>Business Tools.</span></h1>
    </Container>
  )
}

export default First

const Container = styled.div`
    margin-top: 10%;
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    h1{
        @media (max-width: 480px) {
          font-size: 2.2rem;
        }
        width: 90%;    
        font-size: 6vw;
        font-family: 'Alfa Slab One', cursive;
        color: #000;
        span{
            color:#35a162;
        }
    }
`