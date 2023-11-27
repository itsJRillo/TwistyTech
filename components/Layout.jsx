import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>TwistyTech | {pagina} </title>
            <meta name="description" content="Sitio web de venta de cubos de Rubik" />
        </Head>
        
        <Header/>

        {children}

        <Footer/>
    </div>
  )
}

Layout.defaultProps={
  guitarra: null
}

export default Layout