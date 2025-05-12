import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title = "Elegant Interiors", description = "Premium interior design and architecture services" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  )
}