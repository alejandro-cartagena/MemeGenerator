import React from 'react'
import trollface from '../images/troll-face.png'

function NavBar() {
  return (
    <header>
        <div className="logo-title">
            <img className="logo" src={trollface} alt="" />
            <h1 className="header-title">Meme Generator</h1>
        </div>
        <div>
            <h3 className="header-text">React Course - Project 3</h3>
        </div>
        
    </header>
  )
}

export default NavBar