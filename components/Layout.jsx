import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import wave from "../public/img/wave_2.svg";
import styles from '../styles/Layout.module.css';

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>TwistyTech | {pagina} </title>
        <meta
          name="description"
          content="Sitio web de venta de cubos de Rubik"
        />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null,
};

export default Layout;
