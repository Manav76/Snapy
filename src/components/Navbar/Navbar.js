import React, { useState } from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
 const[click,setClick] = useState(false);
 const handleClick = () => setClick(!click);
  return (
    <div className = 'header'>
        <div className='container'>
            <h1>Sn<span className='primary'>Apy</span></h1>
            <ul className={click ? 'nav-menu active':'nav-menu' }>
                <li>
                    <a href = '/' style={{color:"white"}}>Home</a>
                </li>
                <li>
                    <a href = '/' style={{color:"white"}}>Earn</a>
                </li>
                <li>
                    <a href = '/' style={{color:"white"}}>Contact</a>
                </li>

            </ul>
            <div className='btn-group'>
                <button className='btn'>Connect Wallet</button>
            </div>
            <div className = 'hamburger' onClick = {handleClick}>
                {click ? (<FaTimes size = {20} style ={{color: 'white'}}/>): (<FaBars size = {20} style ={{color: 'white'}} />) }
                
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
