import React from 'react'
import styled from 'styled-components'

function DocsContent() {
  return (
    <Container>
        <h1>Well documented and easy-to-use <span>APIs</span> for <span>developers</span></h1>
        <p>We have done the core payments integrations and abstractions, so your team can easily integrate with our APIs and access multiple payment functionalities.</p>
        <ul>
            <li>Quick transfers</li>
            <li>Initiate one-time and recurring payments</li>
            <li>Payment verification</li>
            <li>Instant virtual cards creation</li>
            <li>Customer verification</li>
        </ul>
        <button>Read the API docs</button>
    </Container>
  )
}

export default DocsContent

const Container = styled.div`
    @media (max-width: 480px) {
        width: 100%;
    }
    width: 90%;
    padding: 5%;
    padding-top: 8%;
    h1{
        @media (max-width: 480px) {
            font-size: 2rem;
        }
        font-size: 6vw;
        font-family: 'Alfa Slab One', cursive;
    }
    span{
        color: #eb7da7;
    }
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
            width: 100%;
            line-height: 30px;
        }
        font-family: 'Poppins', sans-serif;
        width: 70%;
        margin-top: 5%;
        font-size: 1.6vw;
        line-height: 40px;
    }
    ul{
        padding: 2%;
        list-style-type: disc;
        li{
            @media (max-width: 480px) {
                font-size: 1rem;
            }
            padding-top: 2%;
            font-family: 'Poppins', sans-serif;
            font-size: 1.4vw;
        }
    }
    button{
        @media (max-width: 480px) {
            font-size: 1rem;
            width: 60%;
            height: 8vh;
        }
        height: 12vh;
        width: 20%;
        border-radius: 10px;
        border: none;
        color: white;
        background: #0a0e27;
        font-family: 'Poppins', sans-serif;
        font-size: 1.4vw;
        margin-top: 5%;
    }
`