import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from "../../components/Header";
import { SearchBox } from '../../components/SearchBox';
import { useFavorite } from '../../hooks/useFavorite';
import { api } from '../../services/api';
import styles from './styles.module.scss';

type ResponseApiPokemon = {
    results: any;

    id: number,
    name: string;
    sprites?: {
        front_default: string;
        back_default: string;
    }
    types: [{
        type?: {
            name: string;
        }
    }]
}

export default function Search(){
    const [name, setName] = useState('');
    const [pokemon, setPokemon] = useState<ResponseApiPokemon>({} as ResponseApiPokemon);
    const {storage} = useFavorite()
    useEffect(() => {
            const searchPokemon = async() => {
                try{
                    const {data} = await api.get<ResponseApiPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    console.log(data)
                    setPokemon(data)
                }catch(err){
                    setPokemon({} as ResponseApiPokemon);
                }
            }
            searchPokemon()
    }, [name])

    return(
        <>
            <Head>
                <title>Search | PokeApi</title>
            </Head>
            <Header total={storage?.length}/>
            <main className={`${styles.container} ${ name === '' && styles.init}`}>
                <div className={styles.content}>
                    <SearchBox handlePokemon={setName} feedback={pokemon && name !== '' && `${pokemon.name ? '1': '0'} resultado encontrado`} />

                    {pokemon.name &&  <Card pokemon={pokemon}/>}
                    
                
                </div>
                {!pokemon.name && name !== '' && (<div className={styles.not_found}>
                        <img src="/images/woman.svg" alt="404_not_found" height={224}/>
                        <h1>Nada encontrado</h1>
                </div>)}
            </main>
        </>
    )
}