import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({pagina}) => {
  return (
    <div>
        <Head>
            <title>TwistyTech | {pagina} </title>
            <meta name="description" content="Sitio web de venta de cubos de Rubik" />
        </Head>
        
        <Header/>

        <Footer/>
    </div>
  )
}

Layout.defaultProps={
  guitarra: null
}

export default Layout