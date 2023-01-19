import Image from "next/image";
import Layout from "@/components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description="Sobre nosotros, guitarLA, Venta de guitarras y blog de música"
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image 
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros" />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur    
              adipisicing elit. Perspiciatis animi deserunt 
              incidunt in voluptatem. Maiores quis est ullam 
              aspernatur veritatis quisquam laborum dolore, rem 
              corporis ipsam inventore itaque cumque vitae.</p>
              <p>Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Sed corporis modi illum 
              molestiae porro veritatis corrupti mollitia 
              voluptatem. Quis delectus consectetur 
              excepturi rerum est deserunt obcaecati 
              pariatur voluptates in facere!</p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
