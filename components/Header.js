import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="logo">Khati Scape</div>
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link href="#home" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link href="#about" onClick={closeMobileMenu}>About Us</Link>
            </li>
            <li>
              <Link href="#services" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li>
              <Link href="#contact" onClick={closeMobileMenu}>Contact Us</Link>
            </li>
            <li>
  <Link href="/architecture">Architecture</Link>
</li>
          </ul>
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  )
}