"use client";

import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <a href="/">
            <Image
              width={400}
              height={100}
              src="/img/logo.svg"
              alt="imagen-logo"
            />
          </a>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/catalogue">Catálogo</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </div>

      {router.pathname === "/" && (
        <div className={styles.guitarra}>
          <Image
            layout="fixed"
            width={500}
            height={1200}
            src="/img/header_cube.svg"
            alt="imagen header"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
