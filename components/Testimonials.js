import { FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    quote: "Elegant Interiors transformed our home completely. Their attention to detail is unmatched!",
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    id: 2,
    quote: "The team delivered beyond our expectations. Our office space now reflects our brand perfectly.",
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "From concept to completion, the process was smooth and the results are stunning.",
    name: "Emily Rodriguez",
    role: "Apartment Owner",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="quote">
                <FaQuoteLeft />
              </div>
              <p>{testimonial.quote}</p>
              <div className="client">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={60} 
                  height={60}
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}