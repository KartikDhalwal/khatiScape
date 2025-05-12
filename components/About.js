import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>About Our Design Studio</h2>
            <p>Founded in 2010, Elegant Interiors has been creating beautiful, functional spaces for over a decade. Our team of talented designers brings together diverse perspectives to deliver unique solutions tailored to each client's needs.</p>
            <p>We believe that great design should be accessible to everyone, which is why we offer services at various price points without compromising on quality or creativity.</p>
            <a href="#contact" className="btn">Get in Touch</a>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/images/new_1.jpg" 
              alt="Our Design Team" 
              width={600}
              height={400}
              className="about-img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}