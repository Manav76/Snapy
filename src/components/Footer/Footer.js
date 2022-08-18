import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Sn<span className='primary'>Apy</span></h1>
                </div>
                <div className='col'>
                    <h5 style={{color:"white"}}>Support</h5>
                    <span className='bar'></span>
                        <a href='/' style={{color:"white"}}>Contact Us</a>
                        <a href='/' style={{color:"white"}}>Chat</a>
                        <a href='/' style={{color:"white"}}>Help Center</a>
                        <a href='/' style={{color:"white"}}>FAQ</a>

                </div>
                <div className='col'>
                    <h5 style={{color:"white"}}>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/' style={{color:"white"}}>Manav</a>
                        <a href='/' style={{color:"white"}}>Jaral</a>
                        <a href='/' style={{color:"white"}}>Pro</a>
                        <a href='/' style={{color:"white"}}>API</a>
                   
                </div>
                <div className='col'>
                    <h5 style={{color:"white"}}>Company</h5>
                    <span className='bar'> </span>
                        <a href='/' style={{color:"white"}}>About</a>
                        <a href='/' style={{color:"white"}}>Information</a>
                        <a href='/' style={{color:"white"}}>Legal</a>
                        <a href='/' style={{color:"white"}}>Privacy</a>
                </div>
                <div className='col'>
                    <h5 style={{color:"white"}}>Social</h5>
                    <span className='bar'> </span>
                        <a href='/' style={{color:"white"}}><FaFacebook className='icon'/></a>
                        <a href='/' style={{color:"white"}}><FaTwitter className='icon'/></a>
                        <a href='/' style={{color:"white"}}><FaLinkedin className='icon'/></a>
                        <a href='/' style={{color:"white"}}><FaGithub className='icon'/></a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
