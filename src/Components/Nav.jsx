import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { Link } from 'react-router-dom'


function Nav() {
    const [showMenu, setShowMenu]= useState(false)
    const [showMenu2, setShowMenu2]= useState(false)
    const [clicked,setClicked]= useState(false)

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: showMenu,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })

    const menuTransitions2 = useTransition(showMenu2, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: showMenu2,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })
  return (
    <NavCont>
        <Left>
            <h1><span>Pay</span>Beta</h1>
        </Left>

        <Mid>
            <Link to="/" onMouseOut={()=>{setShowMenu(false)}} onMouseOver={()=>{setShowMenu(true)}}>Payments</Link>
            <Link to="/"  onMouseOut={()=>{setShowMenu2(false)}} onMouseOver={()=>{setShowMenu2(true)}}>Commerce</Link>
            <Link to="/">Isuing</Link>
            <Link to="/">Capital</Link>
            <Link to="/">Grow</Link>
            <Link to="/">Faas</Link>
        </Mid>

        <Right>
            <button>
                sign in
            </button>
        </Right>

        <div className={clicked ? 'menu clicked' : 'menu'} onClick={()=>setClicked(!clicked)}>
            <div className='menuBtn' >

            </div>
        </div>

        {
        menuTransitions(
        (styles, item) => item && <animated.div style={styles} className='animate' onMouseOut={()=>{setShowMenu(false)}} onMouseOver={()=>{setShowMenu(true)}}>
            <div className='pay'>
                <h1>Collect Payments</h1>
                <p>Collect Payments in 30+ Currencies</p>
            </div>

            <div className='pay'>
                <h1>Send Money</h1>
                <p>send more to anyone or business globally</p>
            </div>

            <div className='pay'>
                <h1>Checkout demo</h1>
                <p>Experience checkout yourself</p>
            </div>
        </animated.div>
        )
      }

{
        menuTransitions2(
        (styles, item) => item && <animated.div style={styles} className='animate2' onMouseOut={()=>{setShowMenu2(false)}} onMouseOver={()=>{setShowMenu2(true)}}>
            <div className='pay'>
                <h1>Store</h1>
                <p>Start selling online</p>
            </div>

            <div className='pay'>
                <h1>Payemt link</h1>
                <p>Accept payment link without writing any code</p>
            </div>

            <div className='pay'>
                <h1>Invoices</h1>
                <p>Create Professional invoices</p>
            </div>
        </animated.div>
        )
      }
    </NavCont>
  )
}

export default Nav

const NavCont = styled.div`
    @media (max-width:480px){
        justify-content: space-between;
        align-items: center;
        padding: 2%;
    }
    width: 100%;
    height: 15vh;
    display: flex;
    .animate{
        @media screen and (min-width:481px) and (max-width:768px) {
            width: 30%;
            left: 62%;
        }
        @media (max-width:480px) {
            width: 60%;
            left: 35%;
            height: 40vh;
        }
        width: 20%;
        height: 50vh;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 22%;
        z-index: 10;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        top: 12%;
        .pay{
            width: 90%;
            padding: 1%;
            cursor: pointer;
            &:hover{
                h1{
                    color: #1bb8b8;
                }
            }
            h1{
                font-size: 1.3vw;
                color:#2a3362;
                font-family: 'Poppins', sans-serif;
            }
            p{
                font-size: 1vw;
                color:#2a3362;
                font-family: 'Poppins', sans-serif;
            }
        }
    }
    .animate2{
        width: 20%;
        height: 50vh;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 35%;
        z-index: 10;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        top: 12%;
        .pay{
            width: 90%;
            padding: 1%;
            cursor: pointer;
            &:hover{
                h1{
                    color: #1bb8b8;
                }
            }
            h1{
                font-size: 1.3vw;
                color:#2a3362;
                font-family: 'Poppins', sans-serif;
            }
            p{
                font-size: 1vw;
                color:#2a3362;
                font-family: 'Poppins', sans-serif;
            }
    }
}
.menu{
    @media (max-width: 480px) {
        display: flex;
    }
    display: none;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    position: relative;
    .menuBtn{
        width: 90%;
        border: 2px solid #000;
        transition:all .5s linear;
        &::before,
        &::after{
            content:'';
            position: absolute;
            width: 80%;
            border: 2px solid #000;
            left: 5%;
        }
        &::before{
            transform: translateY(-12px);
            transition:all .5s linear;
        }
        &::after{
            transform: translateY(10px);
            transition:all .5s linear;
        }
    }
}
.menu.clicked .menuBtn{
    transform: translateX(-0px);
    border: none;
    transition:all .5s linear;
}
.menu.clicked{
    .menuBtn{
        &::before{
            transition:all .5s linear;
            transform: rotate(45deg) ;
        }
        &::after{
            transition:all .5s linear;
            transform: rotate(-45deg) 
        }
    }
}
`
const Left = styled.div`
    @media (max-width: 480px) {
        font-size: 1rem;
        margin-left: 10%;
    }
    width: 25%;
    height: 100%;
    color: #2a3362;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Alfa Slab One', cursive;
        span{
            color:#fb9129
        }
    }
`

const Mid = styled.div`
    @media (max-width: 480px) {
        display: none;
    }
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        color: #2a3362;
        font-weight: 500;
        font-size: 1.2vw;
    }
`

const Right = styled.div`
    @media (max-width: 480px) {
        display: none;
    }
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 50%;
        height: 8vh;
        font-size: 1.2vw;
        border-radius: 10px;
        transition: all .5s linear;
        border: none;
        cursor: pointer;
        &:hover {
            background-color:#2a3362;
            color: #fff;
        }
    }
`
