import React from 'react'
import './header.css'
import { Link,NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
     <div className='container'>
        <div className='logo'>
            <Link to='/'>Movies</Link>
        </div>
        <ul className='nav-links'>
         <li><NavLink to='/'>Watch List</NavLink></li>
         <li><NavLink to='/watched' >Watched</NavLink></li>
         <li><NavLink to='/add' className='btn' >ADD</NavLink></li>

        </ul>
     </div>
    
      
    </div>
  )
}

export default Header
