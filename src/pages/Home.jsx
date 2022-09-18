import React from 'react'
import styled from 'styled-components'
import BuildMain from '../Components/Build/BuildMain'
import Businesses from '../Components/Businesses'
import CardMain from '../Components/cards/CardMain'
import Checkout from '../Components/Checkout'
import DocsMain from '../Components/Documentation/DocsMain'
// import Footer from '../Components/Footer/Footer'
import GlobalMain from '../Components/global/GlobalMain'
import Landing from '../Components/Landing'
import Nav from '../Components/Nav'
import Second from '../Components/Second'
import UnifiedPayment from '../Components/UnifiedPayment'
function Home() {
  return (
    <Container>
        <Nav/>
       <Landing/>
       <Second/>
        <Businesses/>
        <UnifiedPayment/>
        <Checkout/>
        <BuildMain/>
        <CardMain/>
        <DocsMain/>
        <GlobalMain/>
        {/*<Footer/> */}
    </Container>
  )
}

export default Home

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`