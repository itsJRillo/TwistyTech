import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Cubo.module.css";

const Cubo = ({ cubo }) => {
  const { title, description, price, display_image} = cubo.attributes;
  console.log(display_image.data.attributes);
  return (
    <div className={styles.cubo}>
      <Image
        priority="true"
        width={180}
        height={350}
        src={display_image.data}
        alt={`imagen cubo ${title}`}
        layout="responsive"
      />
      <div className={styles.contenido}>
        <h1>{title}</h1>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>{price}€</p>
        <a className={styles.enlace}>Ver Producto</a>
        {/* <Link href={`/cubes/${url}`}>
        </Link> */}
      </div>
    </div>
  );
};

export default Cubo;