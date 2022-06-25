
import { useState } from 'react';
import { useFavorite } from '../../hooks/useFavorite';
import { PokemonProps } from '../../services/types';
import { Details } from '../Details';
import { Ability } from './Ability';
import styles from './styles.module.scss';

interface CardProps{
    pokemon: PokemonProps;
}

export function Card({ pokemon }: CardProps) {
    const types_allowed = ["water", "fire", "electric", "flying", "ice","psychic", "rock"];
    const {handleFavorite, ids} = useFavorite()
    const isFavorite = ids.includes(pokemon.id);
    const [isActivePreview, setIsActivePreview] = useState(false);

    const handlePreview = () => {
        setIsActivePreview(!isActivePreview);
    }

    return (
        <>
        <div className={styles.container}>
            <img src={pokemon.sprites.front_default} alt={`pokemon`} />
            <img className={styles.heart} src={ isFavorite ? "/images/hearts/heart_full.svg" : "/images/hearts/heart.svg"} alt="heart" onClick={() => handleFavorite(pokemon)} />
            <div className={styles.content}>
                <h1>{pokemon.name}</h1>
                <p>ID: {pokemon.id}</p>

                <div className={styles.ability}>
                    {pokemon.types?.map((response, i) => {
                        if(types_allowed.includes(response.type.name)){
                            return (
                                <Ability key={i} name={response.type.name} />
                            )
                        }
    
                    })}

                </div>

                <button onClick={handlePreview}>
                    Ver detalhes
                </button>

            </div>

            
        </div>
            {isActivePreview && <Details pokemon={pokemon} handlePreview={handlePreview} preview={isActivePreview}/>}
        </>
    )
}