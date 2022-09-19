import React from 'react'
import styled from 'styled-components'

function Businesses() {
  return (
    <Container>
        <Top>
            <p>We are trusted by 1 Million+ businesses</p>
        </Top>
        <Bottom>
            <Cards>
                <img src="/uber.svg" alt="" />
            </Cards>

            <Cards>
                <img src="/mtn.svg" alt="" />
            </Cards>

            <Cards>
                <img src="/chipper.svg" alt="" />
            </Cards>

            <Cards>
                <img src="/piggyvest.svg" alt="" />
            </Cards>

            <Cards>
                <img src="/wise.svg" alt="" />
            </Cards>

            <Cards>
                <img src="/microsoft.svg" alt="" />
            </Cards>
        </Bottom>
    </Container>
)}

export default Businesses

const Container = styled.div`
    @media (max-width: 480px) {
        height: auto;
    }
    width: 90%;
    margin: auto;
    height: 40vh;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`
const Top = styled.div`
    @media (max-width: 480px) {
        font-size:1.2rem;
    }
    width: 100%;
    margin-top: 2%;
    height: 20%;
    font-size: 1.4vw;
    font-family: 'Poppins', sans-serif;
`
const Bottom = styled.div`
    @media (max-width: 480px) {
        margin-bottom: 10%;
        flex-wrap: wrap;
        height: auto;
    }
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Cards = styled.div`
    @media (max-width: 480px) {
        min-width: 22%;
        margin: 5%;
    }
    width: 12%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain
    }
`