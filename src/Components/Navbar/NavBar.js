import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import './NavBar.Styles.scss'

const NavBar = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
    if (location.hash) {
        scrollTo(location.hash.slice(1))
    } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
}, [location])

  const scrollTo = (section) => {
    scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        offset: -100,
        smooth: 'easeInOutQuart'
    })
  }

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <nav data-aos-duration="1000" data-aos-delay="500" data-aos='fade-down' className='navbar-white'>
      <div className='nav-container'>
        <div className='nav-links'>
          <Link className='nav-option' to='/'>Home</Link>
          <Link className='nav-option' to='/committee'>Committee</Link>
          <Link className='nav-option' to='/call-for-paper'>Call For Paper</Link>
          <Link className='nav-option' to='/keynote'>Keynote</Link>
          <Link className='nav-option' to='/'>Submission</Link>
          <Link className='nav-option' to='/'>Publication</Link>
          <Link className='nav-option' to='/'>Registration</Link>
          <Link className='nav-option' to='/#map-section'>Venue</Link>
          <Link className='nav-option' to='/#contact-us-section'>Contact Us</Link>
        </div>

        <div className={open ? 'menu-icon closed' : 'menu-icon'} onClick={handleClick}>
          <div></div>
        </div>

        <div className={open ? 'menu-container opened' : 'menu-container'}>
          <Link className='nav-option' to='/'>Home</Link>
          <Link className='nav-option' to='/#about-us-section'>About Us</Link>
          <Link className='nav-option' to='/cars'>Cars</Link>
          <Link className='nav-option' to={location.pathname === '/' ? '/#contact-us-section' : '/cars/#contact-us-section'}>Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar