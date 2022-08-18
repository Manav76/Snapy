import React from 'react'
import './Intro.css'
import Crypto from './crypto.jpg'
const Intro = () => {

  return (
  <div className='intro' style={{background:"black"}}>
    <div className = 'container' >
      <div className = 'left' >
        <h1>What is BlockChain?</h1>
        <p style={{color:"white"}}>A blockchain is a distributed database or ledger that is shared among the nodes of a computer network.
        As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions.
        </p>
        <div className='input-container'>
          <input type = 'email' placeholder = 'Enter your email' style={{color:"white"}}   />
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className = 'right'>
        <div className='img-container'>
          <img src = {Crypto} alt = ''/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Intro
