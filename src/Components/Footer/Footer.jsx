import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { footerData } from './footerData'
import MobileFoot from './MobileFoot'
function Footer() {
  const btnRef = useRef()
  const [showMenu, setShowMenu] = useState(false)

  const Data = footerData

  useEffect(()=>{
    const closeDrpDwn = (e) =>{
      console.log(e)
      if(e.path[0] !== btnRef.current)
      setShowMenu(false)
    }
  
    document.body.addEventListener('click', closeDrpDwn)

    return ()=> document.body.removeEventListener('click', closeDrpDwn)
  },[])


  return (
    <>
    <Container>
        <ul>
          <li>Products</li>
          <li>Collect Payments</li>
          <li>Send Money</li>
          <li>Store</li>
          <li>Payment Links</li>
          <li>Invoices</li>
          <li>Capital</li>
          <li>Grow</li>
          <li>Card Issuing</li>
          <li>FaaS</li>
        </ul>

        <ul>
          <li>Resources</li>
          <li>Pricing</li>
          <li>Support</li>
          <li>Blog</li>
          <li>Integrations</li>
          <li>Why you got charged</li>
        </ul>

        <ul>
          <li>Developers</li>
          <li>API Documentation</li>
          <li>API Reference</li>
          <li>API Status</li>
        </ul>

        <ul>
          <li>Flutterwave</li>
          <li>Customers</li>
          <li>Careers</li>
          <li>Press kit</li>
          <li>Covid 19</li>
          <li>Barter</li>
          <li>Disha</li>
          <li>Send</li>
        </ul>

        <ul>
          <li>Contact</li>
          <li>hi@flutterwavego.com</li>
          <li>+234 1-8889595</li>
          <li>0700-FLUTTERWAVE</li>
          <li>Twitter Support</li>
        </ul>
    </Container>
    <SecondFoot>
      <div className="country">
        <div className="flag">
          <img src="https://static4.depositphotos.com/1007011/319/i/600/depositphotos_3195249-stock-photo-flag-of-nigeria.jpg" width="40" height="40" alt="" />  
        </div> 
        <p ref={btnRef} onClick={()=>setShowMenu(!showMenu)}>Nigeria</p>
        <RiArrowDropDownLine size="2rem"/>
      </div>
      <div className="social">
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>YouTube</p>
        <p>LinkedIn</p>
      </div>

      <div className={showMenu ? "drop show" : "drop" }>
        {
          Data.map((item)=>(
            <div className={item.isActive ? "count active" : "count"} key={item.id}>
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <p>{item.name}</p>
            </div>
          ))
        }
      </div>
    </SecondFoot>

    <SecondFoot>
      <Leftt>
        <p>© PayBeta</p>
      </Leftt>

      <Rightt>
        <ul>
          <li>Privacy policy</li>
          <li>Terms of use</li>
          <li>Cookie policy</li>
          <li>Merchant service agreement</li>
          <li>Payment protection promise</li>
        </ul>
      </Rightt>
    </SecondFoot>
    <MobileFoot/>
    </>
  )
}

export default Footer

const Container = styled.footer`
  @media (max-width: 480px) {
    display: none;
  }
  width: 90%;
  margin: auto;
  min-height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5%;
  ul{
    list-style-type: none;
    height: auto;
    li{
      font-size: 1.2vw;
      margin-top: 15%;
      font-family: 'Poppins', sans-serif;
      cursor: pointer;
      transition: all .2s linear;
      &:nth-child(1){
        font-size: 1.3vw;
        font-weight: 500;
        &:hover{
          color: #000;
        }
      }
      &:hover{
        color: #00abab;
      }
    }
  }
`
const SecondFoot = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
  border-top: 1px solid #eceaea;
  width: 90%;
  height: 20vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  .country{
    width: 10%;
    display: flex;
    align-items: center;
    gap: 2%;
    &:hover{
      color: #00abab;
      cursor: pointer;
    }
    .flag{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    p{
      font-size: 1.2vw;
      font-family: 'Poppins', sans-serif;
    }
  }
  .social{
    width: 60%;
    font-size: 1.2vw;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-between;
  }
  .drop{
  width: 50%;
  position: absolute;
  height: 70vh;
  border-radius: 15px;
  bottom: 90%;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 15;
  background: white;
  display: none;
}
.show{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  flex-wrap: wrap;
}
.count{
  width: 25%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 5%;
  padding: 2% 0%;
  border-radius: 12px;
  p{
    font-family: 'Poppins', sans-serif;
    font-size: 1vw;
  }
  .img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  &:hover{
    background: #eee9e9;
    transition: all .5s linear;
  }
}
.active{
  background: #00abab68;
  border-radius: 15px;
}
`
const Leftt = styled.div`
  p{
  font-size: 1.2vw;
  font-family: 'Poppins', sans-serif;
}
`

const Rightt = styled.div`
  width: 80%;
  ul{
    width: 100%;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    font-size: 1.2vw;
    font-family: 'Poppins', sans-serif;
    li{
      &:hover{
        color: #00abab;
        cursor: pointer;
        transition: all .5s linear;
      }
    }
  }
`