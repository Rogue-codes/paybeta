import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { Link } from 'react-router-dom'
import {BsFlagFill,BsFillHandbagFill,BsCreditCardFill} from 'react-icons/bs'
import {FaNetworkWired,FaStoreAlt,FaFileInvoiceDollar} from 'react-icons/fa'

function Nav() {
    const [showMenu, setShowMenu]= useState(false)
    const [showMenu2, setShowMenu2]= useState(false)
    const [clicked,setClicked]= useState(false)
    const [dropDwn, setDropDwn]= useState(false)

    const showDropdown = ()=>{
        setClicked(!clicked)
        setDropDwn(!dropDwn)
    }

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

    const menuTransitions3 = useTransition(dropDwn, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: dropDwn,
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

        <div className={clicked ? 'menu clicked' : 'menu'} onClick={showDropdown}>
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

        {
            menuTransitions3(
             (styles, item) => item && <animated.div style={styles} className='dropdown' onMouseOut={()=>{setShowMenu2(false)}} onMouseOver={()=>{setShowMenu2(true)}}>
                <div className="content">
                    <h2>PAYMENTS</h2>
                    <div className="contentcard">
                        <div className="cleft">
                            <BsFlagFill size='1.5rem'/>
                        </div>
                        <div className="cRight">
                            <h2>Collect Payments</h2>
                            <p>Collect Payments in 30+ Currencies</p>
                        </div>
                    </div>

                    <div className="contentcard">
                        <div className="cleft" style={{background:'#e9eaf3'}}>
                            <FaNetworkWired size='1.5rem'/>
                        </div>
                        <div className="cRight">
                            <h2>Send Money</h2>
                            <p>send more to anyone or business globally</p>
                        </div>
                    </div>
                    <div className="contentcard">
                        <div className="cleft">
                            <BsFillHandbagFill size='1.5rem'/>
                        </div>
                        <div className="cRight">
                            <h2>Checkout demo</h2>
                            <p>Experience checkout yourself</p>
                        </div>
                    </div>
                </div>
                <hr /> <br />
                <div className="content">
                    <h2>COMMERCE</h2>
                    <div className="contentcard">
                        <div className="cleft" style={{background:'#d9f4e4'}}>
                            <FaStoreAlt size='1.5rem'/>
                        </div>
                        <div className="cRight">
                            <h2>Store</h2>
                            <p>Start selling online</p>
                        </div>
                    </div>

                    <div className="contentcard">
                        <div className="cleft" style={{background:'#e9eaf3'}}>
                            <BsCreditCardFill size='1.5rem'/>
                        </div>
                        <div className="cRight">
                            <h2 style={{color: ''}}>Payment Links</h2>
                            <p>Accept payments without writing code</p>
                        </div>
                    </div>
                    <div className="contentcard">
                        <div className="cleft">
                            <FaFileInvoiceDollar size='1.5rem'/>
                        </div>
                        <div className="cRight">
                            <h2>Checkout demo</h2>
                            <p>Experience checkout yourself</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="contents">
                    <div>
                        <h2>Issuing</h2>
                        <p>Issue physical & virtual cards</p>
                    </div><br />

                    <div>
                        <h2>Capital</h2>
                        <p>Get quick access to flexible</p>
                    </div><br />

                    <div>
                        <h2>Grow</h2>
                        <p>Register & incorporate your business from anywhere</p>
                    </div><br />

                    <div>
                        <h2>FaaS</h2>
                        <p>Embed financial service into your product</p>
                    </div><br />

                    <button>sign in</button>
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
        border: 1px solid #000;
        transition:all .2s linear;
        &::before,
        &::after{
            content:'';
            position: absolute;
            width: 80%;
            border: 1px solid #000;
            left: 5%;
        }
        &::before{
            transform: translateY(-12px);
            transition:all .2s linear;
        }
        &::after{
            transform: translateY(10px);
            transition:all .2s linear;
        }
    }
}
.menu.clicked .menuBtn{
    transform: translateX(-0px);
    border: none;
    transition:all .2s linear;
}
.menu.clicked{
    .menuBtn{
        &::before{
            transition:all .2s linear;
            transform: rotate(45deg) ;
        }
        &::after{
            transition:all .2s linear;
            transform: rotate(-45deg) 
        }
    }
}
.dropdown{
    width: 100%;
    height: 200vh;
    background: #fff;
    position: absolute;
    z-index: 900;
    left: 0;
    top: 15%;
    bottom: 0%;
    .content{
        width: 90%;
        margin: auto;
        margin-bottom: 5%;
        h2{
            font-family: 'Poppins', sans-serif;
            font-size: .8rem;
            color: #787878;
        }
        .contentcard{
            h2{
                font-size: 1rem;
                color:#262c55;
                font-family: 'Poppins', sans-serif;
            }
            display: flex;
            justify-content: space-between;
            align-items: center;
            .cleft{
                width: 20%;
                display: flex;
                background: #fdf6e6;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                padding: 2%;
                p{
                    font-family: 'Poppins', sans-serif;
                }
            }
            .cRight{
                width: 75%;
                padding: 2%;
                p{
                    font-size: .8rem;
                    font-family: 'Poppins', sans-serif;
                }
            }
        }
    }
}
.contents{
    width: 90%;
    margin: auto;
    margin-bottom: 5%;
    margin-top: 10%;
    h2{
        font-size: 1rem;
        color:#262c55;
        font-family: 'Poppins', sans-serif;
    }
    p{
        font-size: 1rem;
        color:#262c55;
        font-family: 'Poppins', sans-serif;
    }
    button{
        width: 100%;
        margin: auto;
        height: 8vh;
        font-size: 1rem;
        background: #22263c;
        color: white;
        font-family: 'Poppins', sans-serif;
        border: none;
        border-radius: 5px;
    }
}
`
const Left = styled.div`
    @media (max-width: 480px) {
        font-size: 1rem;
        margin-left: 15%;
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
