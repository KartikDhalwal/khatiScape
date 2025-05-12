import Image from 'next/image'
import Link from 'next/link'

export default function Architecture() {
  return (
    <div className="architecture-container">
      {/* Hero Banner */}
      <div className="architecture-hero">
        <img src={"/images/file.svg"} alt="Architecture Hero" width={1920} height={600} className="hero-image" layout="responsive" priority
        />
        <div className="hero-overlay">
          <h1>Architecture Services</h1>
          <p>Transforming visions into structural masterpieces</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="architecture-services">
        <div className="service-card">
          <Image
            src="/images/residential-architecture.jpg"
            alt="Residential Architecture"
            width={500}
            height={350}
          />
          <div className="service-content">
            <h2>Residential Architecture</h2>
            <p>
              Custom home designs that blend functionality with aesthetic appeal, 
              tailored to your lifestyle and site characteristics.
            </p>
            <Link href="/contact" className="service-link">
              Enquire Now →
            </Link>
          </div>
        </div>

        <div className="service-card reverse">
          <Image
            src="/images/commercial-architecture.jpg"
            alt="Commercial Architecture"
            width={500}
            height={350}
          />
          <div className="service-content">
            <h2>Commercial Architecture</h2>
            <p>
              Innovative workspace designs that enhance productivity while 
              creating impressive brand statements.
            </p>
            <Link href="/contact" className="service-link">
              Enquire Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="architecture-process">
        <h2>Our Architectural Process</h2>
        <div className="process-steps">
          <div className="step">
            <span>1</span>
            <h3>Consultation</h3>
            <p>Understanding your vision and requirements</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Concept Design</h3>
            <p>Creating initial sketches and layouts</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Development</h3>
            <p>Refining designs with technical details</p>
          </div>
          <div className="step">
            <span>4</span>
            <h3>Execution</h3>
            <p>Overseeing construction to realization</p>
          </div>
        </div>
      </div>
    </div>
  )
}