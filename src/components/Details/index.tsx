import { Card } from '../Card';
import { Ability } from '../Card/Ability';
import styles from './styles.module.scss';
import { GrClose } from "react-icons/gr";
import { BsBookmark } from 'react-icons/bs'
import { PokemonProps } from '../../services/types';
import { useEffect, useRef, useState } from 'react';
import { api } from '../../services/api';



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
        console.log(caracteristics)
    }, [pokemon])

    

    return(
        <section className={styles.details_container}>
            <div className={styles.details_overlay}>
                <div className={`${styles.details_modal}`} >
                    <div className={styles.details_header}>
                        <h2>Detailhes</h2>
                        <GrClose size="14" onClick={handlePreview}/>
                    </div>
                    <div className={styles.details_informations}>
                        <h1>{pokemon?.name}</h1>
                        <section className={styles.pictures}> 
                            <img src={pokemon?.sprites.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} alt="img_frente"/>
                            <img src={pokemon?.sprites.back_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'} alt="back_default" />
                        </section>

                        <div><span>1.23m</span> <span>54Kg</span></div>

                        <div className={styles.ability}>
                            <Ability name='electric' />
                            <Ability name='fire' />
                        </div>
                    </div>
                    <div className={styles.statistics}>
                        <h1>Estatistícas</h1>
                        <div className={styles.features}>
                            {caracteristics && caracteristics.possible_values?.map((resp, i) => {
                                  const list = ['HP', 'ATK','DEF','S.ATK','S.DEF', 'SPD']
                                return(
                                     <div className={styles.group_features}>
                                        <span className={styles.attr}>{list[i]}</span>
                                        <div className={styles.bar}>
                                            <div className={styles.progress}
                                                style={{width: `${resp}%`}}
                                            ></div>
                                        </div>
                                        <span className={styles.score}>{resp}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.button_details}>
                        <button> <BsBookmark/> Adicionar aos favoritos</button>
                    </div>
                </div>
            </div>
        </section>
    )
}