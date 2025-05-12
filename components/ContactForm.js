import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><FaMapMarkerAlt /> 123 Design Avenue, Creative District, CA 90210</p>
            <p><FaPhone /> (555) 123-4567</p>
            <p><FaEnvelope /> info@elegantinteriors.com</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterestP /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus === 'success' && (
              <motion.div 
                className="alert success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div 
                className="alert error"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                There was an error sending your message. Please try again.
              </motion.div>
            )}
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}