import React from 'react'
import styled from 'styled-components'

function CardThirdMobile() {
  return (
    <Container>
        <Card>
            <h2>Better Business Expense management</h2>
            <p>You can issue cards for specific business purposes so you can better manage your expenses. An example of a business expense you’re able to better manage now is your Instagram ad. You’re able to issue a specific virtual card for all your Instagram ads to better manage and account for that expense within your business.</p>
        </Card>
        <Card>
            <h2>New revenue lines</h2>
            <p>You can issue a physical bank card to an employee or even a trusted merchant at your local market to make the purchases for you. Every time you have an order, you’re able to fund that card so they can purchase it and send it to you for delivery to your customer. The possibilities are endless.</p>
        </Card>
        <Card>
            <h2>Seamless Business Organization</h2>
            <p>Reduce the friction of expense management by ditching the old ways of obtaining expense approvals. Use Flutterwave Issuing to issue cards to the teams within your organization. A physical card for your procurement team, for instance, would help to speed up their execution while providing you with a birds-eye view of your overall spending.</p>
        </Card>
    </Container>
  )
}

export default CardThirdMobile

const Container = styled.div`
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    width: 100%;
    display: none;
    height: auto;
    background: #1d1d1d;
`
const Card = styled.div`
    width: 90%;
    margin-bottom: 15%;
    height: auto;
    background: #343434;
    padding: 5%;
    border-radius: 15px;
    h2{
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        color: #fff;
    }
    p{
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        color: #fff;
    }
`