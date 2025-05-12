import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const carouselItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    title: 'Modern Elegance',
    description: 'Contemporary designs for modern living'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Luxury Comfort',
    description: 'Bedrooms designed for ultimate relaxation'
  },
  {
    id: 3,
    image: '/images/carosal_3.jpg',
    title: 'Minimalist Design',
    description: 'Clean lines and functional spaces'
  },
  {
    id: 4,
    image: '/images/carosal_4.jpg',
    title: 'Productive Spaces',
    description: 'Home offices that inspire creativity'
  }
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoPlay, currentSlide])

  return (
    <section id="home" className="hero">
      <div 
        className="carousel"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div 
              key={item.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img src={item.image} alt={item.title} />
              <motion.div 
                className="carousel-caption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <span 
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}