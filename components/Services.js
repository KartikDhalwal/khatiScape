import { motion } from 'framer-motion'
import { FaHome, FaBuilding, FaPaintRoller, FaCouch } from 'react-icons/fa'

const services = [
  {
    id: 1,
    icon: <FaHome />,
    title: "Architecture",
    description: `We design architectural spaces that balance innovation, sustainability, and functionality to meet modern needs.
Our approach combines creative vision with technical precision to bring lasting structures to life.`
  },
  {
    id: 2,
    icon: <FaBuilding />,
    title: "Interior Design",
    description: `We create interior designs that blend functionality with aesthetic appeal, tailored to reflect each client's unique style.
Our goal is to transform spaces into inspiring environments that feel both comfortable and personal.`
  },
  {
    id: 3,
    icon: <FaPaintRoller />,
    title: "Consultancy",
    description: `We offer consultancy services to help businesses solve complex challenges and achieve their goals efficiently.
With our expertise, we provide tailored strategies and actionable insights for sustainable growth.`
  },
  {
    id: 4,
    icon: <FaCouch />,
    title: "PMC",
    description: `We provide Project Management Consultancy (PMC) services to oversee and guide projects from concept to completion.
Our team ensures timely delivery, cost efficiency, and quality control across every phase of development.`
  }
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}