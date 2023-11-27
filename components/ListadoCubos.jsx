import Cubo from "./Cubo"
import styles from "../styles/ListadoCubos.module.css"

const ListadoCubos = ({ cubos }) => {
  return (
    <div className={styles.contenido}>
         {cubos.data.map(cubo => (
            <Cubo
              key={cubo.id}
              cubo={cubo}
            />
        ))}
    </div>
  )
}

export default ListadoCubos