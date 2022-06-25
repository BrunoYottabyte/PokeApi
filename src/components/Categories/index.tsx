import styles from './styles.module.scss';
import { Button } from "./Button";
import { useEffect, useState } from 'react';


const categories = [
    "todos", "fire", "electric", "water", 'flying', "ice", "rock", "psychic"
]

interface CategoriesProps {
    request: (values: string) => void;
}

export function Categories({request}: CategoriesProps){
    const [categorie, setCategorie] = useState("todos");
    

    useEffect(() => {
        request(categorie);
    }, [categorie])

    return(
        <section className={styles.categories}>
            {categories.map(cat => {
                let active = cat === categorie ? true : false
                return(
                        <Button key={cat} className={`${active && styles.active}`} handleClick={setCategorie}>{cat}</Button>
                )
            })}
        </section>
    )
}