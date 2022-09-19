import React from 'react'
import styled from 'styled-components'
import yanga from '../../../Assets/yanga-beauty.webp'
function Second() {
  return (
    <Container>
        <Left>
            <Content>
                <h2>store</h2>
                <p>Create an e-commerce website for free and start selling worldwide in just a few clicks.</p>
                <button>start selling</button>
            </Content>
        </Left>

        <Right>

        </Right>
    </Container>
  )
}

export default Second

const Container = styled.div`
    @media (max-width: 480px) {
        flex-direction: column;
        margin-top: 0%;
        height: auto;
    }
    width: 90%;
    margin: auto;
    height: 100vh;
    margin-top: 10%;
    display: flex;
    justify-content: center;
`
const Left = styled.div`
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
    width: 40%;
    height: 100%;
`

const Right = styled.div`
    @media (max-width: 480px) {
        width: 100%;
        height: 60vh;
        margin-top: 10%;
    }
    width: 55%;
    height: 100%;
    background: url(${yanga});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 70% 10%;
`
const Content = styled.div`
    @media (max-width: 480px) {
        height: auto;
        margin-top: 0;
    }
    margin-top: 20%;
    h2{
        @media (max-width: 480px) {
            font-size: 2rem;
            width: 100%;
            margin: 0;
        }
        font-size: 2vw;
        margin:4%;
        width: 70%;
        font-family: 'Poppins', sans-serif;
    }
    p{
        @media (max-width: 480px) {
            margin-top: 4%;
            font-size: 1rem;
            width: 100%;
            margin: 0;
            line-height: 30px;
        }
        font-size: 1.2vw;
        margin:4%;
        width: 70%;
        font-family: 'Poppins', sans-serif;
    }
    button{
        @media (max-width: 480px) {
            font-size: 1rem;
            width: 50%;
            margin: 0;
            margin-top: 8%;
        }
        width: 30%;
        height: 8vh;
        margin-left: 4%;
        border-radius: 10px;
        border: none;
        background: #0a0e27;
        font-size: 1.2vw;
        color: white;
        cursor: pointer;
    }
`