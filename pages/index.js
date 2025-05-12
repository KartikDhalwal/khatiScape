import Head from 'next/head'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Khati Scape - Premium Interior Design</title>
        <meta name="description" content="Premium interior design services" />
      </Head>
      
      <Header />
      <Carousel />
      <Testimonials />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </>
  )
}