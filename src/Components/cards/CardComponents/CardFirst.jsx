import React from 'react'
import styled from 'styled-components'

function CardFirst() {
  return (
    <Container>
        <Content>
            <h1>Create physical and virtual <span>cards</span></h1>
            <p>Issue physical and virtual cards that work globally. Create, launch, and manage your cards easily from anywhere.</p>
            <button>Get started with cards</button>
        </Content>
    </Container>
  )
}

export default CardFirst
const Container = styled.div`
    @media (max-width: 480px) {
        margin-bottom: 15%;
        height: auto;
        padding-bottom: 5%;
        padding-top: 8%;
    }
    width: 100%;
    height: 100vh;
    background: #1d1d1d;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 5%;
    justify-content: center;
    align-items: center;
    h1{
        @media (max-width: 480px) {
            font-size: 3rem;
        }
        font-size: 6vw;
        width: 95%;
        text-align: center;
        font-family: 'Alfa Slab One', cursive;
        color: #fff;
        span{
            color: #6672c7;
        }
    }
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
            width: 100%;
            margin-top: 5%;
        }
        font-size: 1.6vw;
        width: 70%;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        color: #fff;
    }
    button{
        @media (max-width: 480px) {
            font-size: 1.3rem;
            width: 80%;
            height: 8vh;
            border: none;
            margin-top: 5%;
        }
        height: 12vh;
        width: 20%;
        border-radius: 10px;
        font-size: 1.3vw;
        cursor: pointer;
    }
`