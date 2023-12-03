'use client';
import Image from "next/image";
import styles from "../styles/Cubo.module.css";
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #fba45c;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Cubo = ({ cubo }) => {
  const { title, description, price, display_image} = cubo.attributes;

  return (
    <div className={styles.cubo}>
      <Image
        priority="true"
        width={180}
        height={350}
        src={`http://localhost:1337${display_image.data[0].attributes.url}`}
        alt={`imagen cubo ${title}`}
      />
      <div className={styles.contenido}>
        <h1>{title}</h1>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>{price}€</p>
        <StyledButton className={styles.enlace}>Ver Producto</StyledButton>
      </div>
    </div>
  );
};

export default Cubo;