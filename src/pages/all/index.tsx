
import Head from "next/head";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { useFavorite } from "../../hooks/useFavorite";
import { fetchData } from "../../services/favorite";

import styles from './styles.module.scss';

export default function All(){
    const [categorieActive, setCategorieActive] = useState("todos");
    const [arr, setArr] = useState([]);
    const {storage} = useFavorite();


    useEffect(() => {
        const types_allowed = ["water", "fire", "electric", "flying", "ice","psychic", "rock", "fighting"];
        
        fetchData().then(response => {
              const dataFilter = response.filter(pokemon => {
                
                const types = pokemon.types.map(data => data.type.name);
                if(types.includes(categorieActive)){
                    return pokemon
                } 
                
                if(categorieActive === 'todos'){
                    if(types.findIndex(type => types_allowed.includes(type)) !== -1){
                        return pokemon
                    }
                }
            })
            
            setArr(dataFilter)
        });
    }, [categorieActive])
    

    return(
        <>
            <Head>
                <title>All | PokeApi</title>
            </Head>
            <Header total={storage?.length}/>
            <main className={styles.container}>
                <div className={styles.content}>
                    <Categories request={setCategorieActive}/>

                    <section className={styles.save_storage}>
                        <div className={styles.all_pokemons}>
                            
                                {
                                arr.map(pokemon => {
                                   
                                    return(
                                        <Card key={pokemon?.id} pokemon={pokemon} />
                                    )
                                })
                                }
                           
                        </div>
                    </section> 
                </div>

            </main>
        </>
    )
}