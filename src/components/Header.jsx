import React from 'react'
import { Link } from 'react-router-dom'

function Header({ back }) {
  return (
    <header className='header'>
        <div className='width'>
            {back && (
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48' width="24"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z" fill="currentColor"/></svg>
                </Link>
            )}
            <h1><Link to="/">K&D Crypto</Link></h1>
        </div>
    </header>
  )
}

export default Header