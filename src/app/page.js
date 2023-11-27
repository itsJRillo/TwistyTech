import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import ListadoCubos from '../../components/ListadoCubos';

export default async function Home({cubos}) {
  const data = await getData()
  return (
    <Layout pagina="Inicio">
      <main className='contenedor'>
        <Heading title="Nuestra Colección"/>
        <ListadoCubos cubos={data}/>
      </main>
    </Layout>
  )
}

async function getData() {
  const urlCubos = "http://localhost:1337/api/cubes?populate=display_image&price";
  const resCubos = await fetch(urlCubos);

  if (!resCubos.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return resCubos.json()
}
