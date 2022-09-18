import React from 'react'
import styled from 'styled-components'

function Landing() {
  return (
    <Container>
        <Endless>
            <span>Endless possibilities</span> for every business
        </Endless>
        
        <SellOnline>
            Sell online, process payments, build financial products, or use business tools designed to grow your business.
        </SellOnline>

        <Buttons>
            <button>Create a free account</button>
            <button>Contact sales</button>
        </Buttons>
    </Container>
  )
}

export default Landing

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2%;
    padding-left: 6%;
`
const Endless = styled.h1`
    @media (max-width: 480px) {
        font-size: 3rem;
        width: 100%;
    }
    width: 70%;
    font-size: 7vw;
    font-family: 'Alfa Slab One', cursive;
    color: #000;
    span{
        color:#fb9129
    }
`

const SellOnline = styled.p`
    @media (max-width: 480px) {
        font-size: 1rem;
        width: 100%;
    }
    width: 70%;
    font-size: 1.5vw;
    font-family: 'Poppins', sans-serif;
    color: #2a3362;
    margin-top: 2%;
`

const Buttons = styled.div`
    @media (max-width: 480px) {
        width: 100%;
    }
    width: 40%;
    height: 20vh;
    display: flex;
    justify-content: center;
    gap: 5%;
    align-items: center;
    button{
        @media (max-width: 480px) {
            font-size: 1rem;
            height: 8vh;
        }
        width: 60%;
        height: 10vh;
        font-size: 1.4vw;
        background: #0a0e27;
        border-radius: 10px;
        border: none;
        color: #fff;
        cursor: pointer;
        &:nth-child(2){
            @media (max-width: 480px) {
                font-size: 1rem;
                height: 8vh;
            }
            width: 40%;
            height: 10vh;
            font-size: 1.4vw;
            background: #d4d2d2;
            color: #000;
        }
    }
`