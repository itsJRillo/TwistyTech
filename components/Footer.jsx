import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/">Nosotros</Link>
                <Link href="/">Blog</Link>
            </nav>

            <p className={styles.copyright}>TwistyTech © Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer