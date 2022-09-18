import React from 'react'
import styled from 'styled-components'
import checkout from '../Assets/checkout.png'
import {AiOutlineRight} from 'react-icons/ai'
function Checkout() {
  return (
    <Container>
        <Left>
            <Content>
                <h2>Checkout</h2>
                <p>Checkout features our smart checkout system, incredible processing speed, and a beautiful, simple interface. It is designed to increase your revenue and provide the best payment experience for your customers.</p>
                <button>Begin</button>
            </Content>
        </Left>
        <Center></Center>
        <Right>
            <ContentR>
                <h2>Accept Payments</h2>
                <p>Easily receive money from anyone, anywhere in the world.</p>
                <div className="learn">
                    Learn more <AiOutlineRight className='icon'/>
                </div>
            </ContentR>

            <ContentR>
                <h2>Transfers (Payment)</h2>
                <p>Make single or bulk transfers to bank accounts from your Paybeta dashboard.</p>
                <div className="learn">
                    Learn more <AiOutlineRight className='icon'/>
                </div>
            </ContentR>
        </Right>
    </Container>
  )
}

export default Checkout

const Container =styled.div`
    @media (max-width: 480px) {
        flex-direction: column;
        height: auto;
    }
    width: 90%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
`
const Left =styled.div`
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
    
const Center =styled.div`
    @media (max-width: 480px) {
        width: 100%;
        height: 120vh;
        background-position: 50% 40%;
        margin-top: 15%;
    }
    width: 25%;
    height: 100%;
    background: url(${checkout});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const Right =styled.div`
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        margin-top: 10%;
    }
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Content =styled.div`
    @media (max-width: 480px) {
        height: 80vh;
    }
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2%;
    h2{
        @media (max-width: 480px) {
            font-size: 1.3rem;
        }
        font-size: 2vw;
        font-family: 'Poppins', sans-serif;
    }
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
        }
        font-size: 1.3vw;
        line-height: 35px;
        font-family: 'Poppins', sans-serif;
    }
    button{
        @media (max-width: 480px) {
            font-size: 1.3rem;
            height: 8vh;
        }
        width: 30%;
        height: 8vh;
        font-size: 1.5vw;
        border: none;
        border-radius: 10px;
        background: #0a0e27;
        color: #fff;
        cursor: pointer;
    }
`
const ContentR =styled.div`
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2%;
    h2{
        @media (max-width: 480px) {
            font-size: 1.3rem;
        }
        font-size: 2vw;
        font-family: 'Poppins', sans-serif;
    }
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
        }
        font-size: 1.3vw;
        line-height: 35px;
        font-family: 'Poppins', sans-serif;
    }
    button{
        width: 30%;
        height: 8vh;
        font-size: 1.5vw;
        border: none;
        border-radius: 10px;
        background: #000;
        color: #fff;
    }
    .learn{
        @media (max-width: 480px) {
            font-size: 1.3rem;
            width: 100%;
        }
        width: 40%;
        height: 10vh;
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
        gap: 3%;
        align-items: center;
        transition: all .5s linear;
        color: #fb4e20;
         font-size: 1.3vw;
        font-family: 'Poppins', sans-serif;
        &:hover{
            .icon{
                transition: all .5s linear;
                transform: translateX(8px);
            }
        }
    }
`