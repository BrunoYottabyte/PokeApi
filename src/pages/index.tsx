import Head from 'next/head';
import Link from 'next/link';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { useFavorite } from '../hooks/useFavorite';
import styles from './home.module.scss';

export default function Home() {
  const {storage} = useFavorite(); 
  return (
    <>
      <Head>
        <title>Home | PokeApi</title>
      </Head>
      <Header total={storage?.length}/>
      <main className={styles.container}>
        
            { storage?.length === 0 || storage?.length === undefined ? (
              <div className={styles.content}>
              
                <img src="/images/woman.svg" alt="woman" height={224}/>

                <div className={styles.group_text}>
                  <h1>Está meio vazio por aqui!</h1>
                  <p>Procure por pokémons para adicioná-los aos seus <br /> favoritos.</p>
                </div>

                <Link href="/search">
                  <button>Procurar pokémons</button>
                </Link>
              </div>
            ) : 
              (
               <section className={styles.save_storage}>
                <div className={styles.content}>
                  <h1>Olá, você tem {storage.length} pokémon salvo!</h1>
                  <div>
                    {
                   storage?.length > 0 && storage?.map(pokemon => (
                        <Card pokemon={pokemon} key={pokemon.id}/>
                      ))
                    }
                  </div>
                 </div>
               </section>
              )
            }
      
      </main>
    </>
  )
}
