import React from 'react'
import styled from 'styled-components'
import footcity from '../Assets/foot-city.webp'
import famasi from '../Assets/Famasi-3.webp'
function Second() {
  return (
    <Container>
        <Left></Left>
        <Right>
            <Top></Top>
            <Bottom>
                <p>
                    It is not the size of the company that matters, but the size of the ambition. Ambitious businesses of all sizes rely on PayBeta to grow their business everywhere.
                </p>
            </Bottom>
        </Right>
    </Container>
  )
}

export default Second

const Container = styled.div`
    @media (max-width: 480px) {
        flex-direction: column;
        height: auto;
    }
    width: 100%;
    height: 100vh;
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    @media (max-width: 480px) {
        width: 90%;
        margin: auto;
        margin-top: 5%;
        height: 40vh;
    }
    width: 60%;
    height: 100%;
    background: url(${footcity});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 70% 10%;
`
const Right = styled.div`
    @media (max-width: 480px) {
        height: auto;
        width: 90%;
        margin: auto;
        margin-top: 5%;
    }
    width: 35%;
    height: 120vh;
    margin-top: -10%;
`
const Top = styled.div`
    @media (max-width: 480px) {
        height: 50vh;
    }
    width: 100%;
    height: 75%;
    background: url(${famasi});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 70% 10%;
`
const Bottom = styled.div`
    @media (max-width: 480px) {
        height: 40vh;
    }
    margin-top: 5%;
    width: 100%;
    height: 20%;
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
        }
        padding: 2%;
        font-size: 1.4vw;
        font-family: 'Poppins', sans-serif;
        line-height: 30px;
    }
`