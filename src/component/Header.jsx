import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink to='/' style={{margin:'20px'}}>List</NavLink>
        <NavLink to='/AddCard'>AddCard</NavLink>
    </div>
  )
}

export default Header