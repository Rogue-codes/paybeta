import React from 'react'
import styled from 'styled-components'

function GlobalReach() {
  return (
    <Container>
        <h1>Our <span>global</span> reach</h1>
        <Section>
            <Left>
                <Cards>
                    <Top>
                        <h2 style={{color:'#00abab'}}>30+ Currencies</h2>
                    </Top>
                    <Bottom>
                        <p>We accept payments in more than thirty currencies.</p>
                    </Bottom>
                </Cards>
                <Cards>
                <Top>
                        <h2>20M+ API calls</h2>
                    </Top>
                    <Bottom>
                        <p>API calls per day, peaking at 231 requests per second.</p>
                    </Bottom>
                </Cards>
                <Cards>
                <Top>
                        <h2>500k+ payments daily</h2>
                    </Top>
                    <Bottom>
                        <p>Average number of payments processed daily.</p>
                    </Bottom>
                </Cards>
                <Cards>
                <Top>
                        <h2>15+ payment options</h2>
                    </Top>
                    <Bottom>
                        <ul>
                            <li>Debit & Credit cards</li>
                            <li>Mobile money</li>
                            <li>M-Pesa</li>
                            <li>Bank Transfer</li>
                        </ul>

                        <ul>
                            <li>Bank Account</li>
                            <li>POS</li>
                            <li>VISA QR</li>
                            <li>USSD</li>
                        </ul>
                    </Bottom>
                </Cards>
            </Left>
            <Right>
                <img src="/image4 (1).gif" alt="" />
            </Right>
        </Section>
    </Container>
  )
}

export default GlobalReach

const Container = styled.div`
    h1{
        padding-top: 12%;
        padding-left: 5%;
        font-size: 6vw;
        font-family: 'Alfa Slab One', cursive;
        margin-bottom: 5%;
        span{
            color: #6672c7;
        }
    }
`
const Section = styled.div`
    @media (max-width: 480px) {
        flex-direction: column;
        height: auto;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
`
const Left = styled.div`
    @media (max-width: 480px) {
        height: auto;
        width: 100%;
    }
    width: 50%;
    height: 100%;
`
const Cards = styled.div`
    @media (max-width: 480px) {
        margin-bottom: 15%;
        height: auto;
    }
    width: 80%;
    height: 20vh;
    margin-left: 7%;
`
const Top = styled.div`
    @media (max-width: 480px) {
        height: auto;
    }
    width: 100%;
    height: 40%;
    border-left: 2px ridge #353333;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5%;
    h2{
        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
        font-size: 1.5vw;
        font-family: 'Poppins', sans-serif;
    }
`
const Bottom = styled.div`
    @media (max-width: 480px) {
        flex-direction: column;
    }
    width: 100%;
    height: auto;
    padding: 2%;
    border-left: 2px dashed #353333;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5%;
    display: flex;
    justify-content: flex-start;
    gap: 10%;
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
        }
        font-family: 'Poppins', sans-serif;
    }
    ul{
        @media (max-width: 480px) {
            width: 100%;
        }
        li{
            @media (max-width: 480px) {
                font-size: 1rem;
            }
            margin-top: 12%;
            font-family: 'Poppins', sans-serif;
        }
    }
`
const Right = styled.div`
    @media (max-width: 480px) {
        height: 50vh;
        width: 90%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`