import React, { useState } from 'react'
import styled from 'styled-components'

function CardThird() {
    const [secondCard,setSecondCard] = useState(false)
    const [thirdCard,setThirdCard] = useState(false)
  return (
    <Container>
        <CardInfo onMouseOver={()=>setSecondCard(true)} onMouseOut={()=>setSecondCard(false)} >
            <h1>Better Business Expense Management</h1>
            <p>You can issue cards for specific business purposes so you can better manage your expenses. An example of a business expense you’re able to better manage now is your Instagram ad. You’re able to issue a specific virtual card for all your Instagram ads to better manage and account for that expense within your business.</p>
        </CardInfo>
        <CardInfo2 className={secondCard ? 'translate' : 'null'} onMouseOver={()=>setThirdCard(true)} onMouseOut={()=>setThirdCard(false)}>
            <h1>New Revenue Lines</h1>
            <p>You can issue cards for specific business purposes so you can better manage your expenses. An example of a business expense you’re able to better manage now is your Instagram ad. You’re able to issue a specific virtual card for all your Instagram ads to better manage and account for that expense within your business.</p>
        </CardInfo2>
        <CardInfo3 className={thirdCard ? 'translate2' : 'null'}>
            <h1>Seamless Business Organization</h1>
            <p>You can issue cards for specific business purposes so you can better manage your expenses. An example of a business expense you’re able to better manage now is your Instagram ad. You’re able to issue a specific virtual card for all your Instagram ads to better manage and account for that expense within your business.</p>
        </CardInfo3>
    </Container>
  )
}

export default CardThird

const Container = styled.div`
    @media (max-width: 480px) {
        display: none;
    }
    width: 100%;
    padding: 2%;
    height: 80vh;
    background: #1d1d1d;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    position: relative;
    transition: all .5s linear;
    .translate{
        transition: all .5s linear;
        transform: translateX(45%);
    }
    .translate2{
        transition: all .5s linear;
        transform: translateX(30%);
    }
    .null{
        transition: all .5s linear;
        transform: translateX(0%);
    }
`
const CardInfo = styled.div`
    @media (max-width: 480px) {
        width: 90%;
        left: 5%;
        height: auto;
    }
    width: 50%;
    height: 55vh;
    background: #343434;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position: absolute;
    left: 15%;
    border-radius: 15px;
    h1{
        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
        font-size: 1.5vw;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        padding: 5%;
    }
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
            width: 100%;
        }
        font-size: 1.3vw;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        padding: 2%;
        padding-left: 5%;
        width: 65%;
    }
`
const CardInfo2 = styled.div`
    @media (max-width: 480px) {
        width: 90%;
        top: 45%;
        left: 5%;
        height: auto;
    }
    width: 40%;
    height: 55vh;
    background: #343434;
    box-shadow: #000 0px 5px 15px;
    z-index: 10;
    position: absolute;
    left: 30%;
    border-radius: 15px;
    h1{
        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
        font-size: 1.5vw;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        padding: 5%;
    }
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
            width: 100%;
        }
        font-size: 1.3vw;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        padding: 2%;
        width: 80%;
        padding-left: 5%;
    }
`
const CardInfo3 = styled.div`
    @media (max-width: 480px) {
        width: 90%;
        top: 88%;
        left: 5%;
        height: auto;
    }
    width: 40%;
    height: 55vh;
    background: #343434;
    box-shadow: #000 0px 5px 15px;
    position: absolute;
    left: 50%;
    z-index: 15;
    border-radius: 10px;
    h1{
        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
        font-size: 1.5vw;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        padding: 5%;
    }
    p{
        @media (max-width: 480px) {
            font-size: 1rem;
        }
        font-size: 1.3vw;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        padding: 2%;
        padding-left: 5%;
        width: 100%;
    }
`
