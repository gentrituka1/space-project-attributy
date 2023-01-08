import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link to="/missions"><img src='../src/assets/spacex.svg' width={350}/></Link>
        <div className='route-names'>
            <NavLink className="route-names-item" to='/missions'>Missions</NavLink>
        </div>
    </header>
  )
}

export default Header