import { PokemonProps } from "../../services/types";
import { Ability } from "../Card/Ability";
import styles from './styles.module.scss';

interface InformationsProps {
    pokemon: PokemonProps
}

export function Informations({pokemon}: InformationsProps) {
    return (
        <>
            <h1>{pokemon?.name}</h1>
            <section className={styles.pictures}>
                <img src={pokemon?.sprites.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} alt="img_frente" />
                <img src={pokemon?.sprites.back_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'} alt="back_default" />
            </section>

            <div><span>{pokemon.height}m</span> <span>{pokemon.weight}Kg</span></div>

            <div className={styles.ability}>
                {

                    pokemon.types.map((type) => {
                        const types_allowed = ["water", "fire", "electric", "flying", "ice", "psychic", "rock", "fighting"];
                        if (!types_allowed.includes(type.type.name)) return
                        return (
                            <Ability key={pokemon.id} name={type.type.name} />
                        )
                    })
                }

            </div>

        </>
    )
}