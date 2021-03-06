import '../styles/globals.css'
import Footer from  '../components/Footer'
import Header from '../components/Header'
import '../styles/layout.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)  }

  return (
    <>
    <Head>
      <title>Iqbal Athorid</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
