import React from 'react'
import styled from 'styled-components'

function Fourth() {
  return (
    <Container>
        <Text>Let's put our strengths forward, shall we? You focus on realizing your amazing ideas and we focus on providing all the <span>Commerce tools</span> you need.</Text>
        <Btn>Okay let's go</Btn>
    </Container>
  )
}

export default Fourth

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15%;
`
const Text = styled.h1`
  @media (max-width: 480px) {
      font-size: 2rem;
      width: 100%;
      line-height: 60px;
  }
  font-size: 6vw;
  font-family: 'Noto Serif Display', serif;
  line-height: 90px;
  width: 95%;
  span{
    color:#35a162
  }
`
const Btn = styled.button`
  @media (max-width: 480px) {
    width: 50%;
    font-size: 1rem;
  }
  margin-top:5%;
  width: 15%;
  height: 10vh;
  border-radius: 10px;
  background: #0a0e27;
  color: #fff;
  font-size: 1.5vw;
  border: none;
  cursor: pointer;
`