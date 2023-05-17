import React from 'react'
import './Nav.scss'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">
            <img src="" alt="" />
            <a href="/">
                <h2>Company Name</h2>
            </a>        
        </div>
        <div className="nav-menu">
            <div className="nav-menu-item">
                <a href="/">
                    Link
                </a>
            </div>
            <div className="nav-menu-item">
            <a href="/">
                    Link
                </a>
            </div>
            <div className="nav-menu-item">
            <a href="/">
                    Link
                </a>
            </div>
        </div>

    </div>
  )
}

export default Nav