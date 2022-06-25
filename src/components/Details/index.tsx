import { Card } from '../Card';
import { Ability } from '../Card/Ability';
import styles from './styles.module.scss';
import { GrClose } from "react-icons/gr";
import { BsBookmark, BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { PokemonProps } from '../../services/types';
import { useEffect, useRef, useState } from 'react';
import { api } from '../../services/api';
import { useFavorite } from '../../hooks/useFavorite';
import { Button } from './Button';
import { Estatistics } from './Estatistics';
import { Informations } from './Informations';



interface DetailsProps {
    handlePreview?: () => void;
    preview?: boolean;
    pokemon: PokemonProps;
}

export function Details({handlePreview, preview = false, pokemon}: DetailsProps){
    const [caracteristics, setCaracteristics] = useState([] as any);
    useEffect(() => {
        async function getCaracteristics() {
            const response = await api.get(`https://pokeapi.co/api/v2/characteristic/${pokemon?.id}`)
            setCaracteristics(response.data);
        }
        getCaracteristics();
    }, [pokemon])


    const {ids, handleFavorite} = useFavorite()
    const isFavorite = ids.includes(pokemon.id);
    

    return(
        <section className={styles.details_container}>
            <div className={styles.details_overlay}>
                <div className={`${styles.details_modal}`} >
                    <div className={styles.details_header}>
                        <h2>Detailhes</h2>
                        <GrClose size="14" onClick={handlePreview}/>
                    </div>
                    <div className={styles.details_informations}>
                       <Informations pokemon={pokemon} />
                    </div>
                    <div className={styles.statistics}>
                        <Estatistics caracteristics={caracteristics} />
                    </div>

                    <div className={styles.button_details}>
                        <Button isFavorite={isFavorite} onClick={() => handleFavorite(pokemon)}/>
                    </div>
                </div>
            </div>
        </section>
    )
}