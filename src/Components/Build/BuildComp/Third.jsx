import React from 'react'
import styled from 'styled-components'
import creator from '../../../Assets/creator.webp'
import {AiOutlineRight} from 'react-icons/ai'

function Third() {
  return (
    <Container>
        <Left>
            <Content>
            </Content>
            <p>A platform for you, whether you are a large company or a solo artist. <span>solo artist.</span></p>
        </Left>

        <Right>
        <ContentR>
                <h2>Invoices</h2>
                <p>Generate professional invoices for your clients and get paid from anywhere.</p>
                <div className="learn">
                    Begin <AiOutlineRight className='icon'/>
                </div>
            </ContentR>

            <ContentR>
                <h2>Payment links</h2>
                <p>Receive one-time or recurring payments from anyone, anywhere through your unique payment link.</p>
                <div className="learn">
                    Learn more <AiOutlineRight className='icon'/>
                </div>
            </ContentR>
        </Right>
    </Container>
  )
}

export default Third

const Container = styled.div`
    @media (max-width: 480px) {
        flex-direction: column-reverse;
    }
    width: 90%;
    margin: auto;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 5%;
`
const Left = styled.div`
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
    width: 55%;
    height: auto;
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
        }
        margin: 2%;
        text-align: center;
        font-size: 1.2vw;
        font-family: 'Poppins', sans-serif;
        span{
            color:#35a162;
        }
    }
`

const Right = styled.div`
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
    width: 45%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const Content = styled.div`
    @media (max-width: 480px) {
        margin-top: 0%;
    }
    height: 100vh;
    margin-top: -10%;
    background: url(${creator});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 70% 10%;
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
            font-size: 1rem;
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
                transform: translateX(5px);
            }
        }
    }
`