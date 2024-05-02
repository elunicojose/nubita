import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/Navbar2.css'

const Navbar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
         <Link to="/" className='title'>Nubita</Link>
         <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen)
         }} >
            <span></span>
            <span></span>
            <span></span>
         </div>
        <ul className= {menuOpen ? "open" : ""}>
            <li><NavLink to="/frutas">Frutas</NavLink></li>
            <li><NavLink to="/mixes">Mixes</NavLink></li>
            <li><NavLink to="/home">Salir</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar2
