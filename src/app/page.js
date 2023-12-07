import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import ListadoCubos from '../../components/ListadoCubos';
import ListadoBlogs from '../../components/ListadoBlogs';
import { getData } from './utils';

export default async function Home() {
  const cubosData = await getData("cubes?populate=*&pagination[pageSize]=3")
  const entradasData = await getData("blogs?populate=*&pagination[pageSize]=2")
  
  return (
    <Layout pagina="Inicio">
      <main className='contenedor'>
        <Heading title="Nuestra Colección"/>
        <ListadoCubos cubos={cubosData}/>
      </main>

      <ListadoBlogs entradas={entradasData}/>
    </Layout>
  )
}

