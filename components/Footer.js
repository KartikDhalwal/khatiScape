import { FaArrowUp, FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Elegant Interiors</h3>
            <p>Creating beautiful spaces that reflect your personality and meet your functional needs.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link href="#">Residential Design</Link></li>
              <li><Link href="#">Commercial Design</Link></li>
              <li><Link href="#">Space Planning</Link></li>
              <li><Link href="#">Consultation</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to get design tips and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit"><FaPaperPlane /></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elegant Interiors. All Rights Reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}