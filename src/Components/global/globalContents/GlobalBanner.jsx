import React from 'react'
import styled from 'styled-components'
import {AiOutlineRight} from 'react-icons/ai'

function GlobalBanner() {
  return (
    <Container>
        <Content>
            <h1>Ready to get started?</h1>
            <p>Create an account and instantly start accepting payments, selling your beautiful products online and building financial tools.</p>
            <div className="btn">
                <button>Get started</button>
                <button>Contact sales <AiOutlineRight className='icon'/></button>
            </div>
        </Content>
    </Container>
  )
}

export default GlobalBanner

const Container = styled.div`
    @media (max-width: 480px) {
        height: auto;
    }
    width: 90%;
    height: 80vh;
    margin: auto;
    border-radius: 20px;
    margin-top: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1d1d1d;
`

const Content = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10%;
    h1{
        @media (max-width: 480px) {
            font-size: 2rem;
            margin-top: 3%;
            margin-bottom: 5%;
        }
        font-size: 4vw;
        font-family: 'Alfa Slab One', cursive;
        color: white;
    }
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
            line-height: 30px;
            margin-bottom: 5%;
        }
        font-size: 1.4vw;
        font-family: 'Poppins', sans-serif;
        color: white;
    }
    .btn{
        @media (max-width: 480px) {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            height: auto;
        }
        width: 40%;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
            @media (max-width: 480px) {
                font-size: 1rem;
                width: 60%;
                margin-bottom: 6%;
            }
            width: 40%;
            height: 10vh;
            border: none;
            border-radius: 10px;
            font-size: 1.3vw;
            cursor: pointer;
            &:nth-child(2){
                background:transparent;
                color: white;
                display: flex;
                align-items: center;
                gap: 5%;
                &:hover{
                    .icon{
                        transition: all .5s linear;
                        transform: translateX(8px);
                    }
                }
            }
        }
    }
`