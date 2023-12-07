import styles from "../styles/Entrada.module.css";
import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";

const Entrada = ({ entrada }) => {
  const { title, content, coverImage, publishedAt, url } = entrada.attributes;

  return (
    <article>
      <Image
        priority="true"
        width={800}
        height={600}
        src={`http://localhost:1337${coverImage.data[0].attributes.url}`}
        alt={`imagen blog ${title}`}
      />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{content}</p>
        <Link href={`/blog/${url}`}>
          <p className={styles.enlace}>Leer entrada</p>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
