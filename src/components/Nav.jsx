import React from 'react'
import './Nav.scss'
import DiamondIcon from '@mui/icons-material/Diamond';

const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">
            <a href="/">
            <DiamondIcon />
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