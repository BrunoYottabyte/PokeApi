import styles from './styles.module.scss';
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';

interface SearchBoxProps {
    handlePokemon: (name: string) => void;
    feedback: string | false;
}

export function SearchBox({handlePokemon, feedback}: SearchBoxProps){
    const [valueInput, setValueInput] = useState('');
    const [search, setSearch] = useState(false);

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <input placeholder="Procure por pokémons"
                    type="text"
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                />
                <a
                    onClick={() =>{ 
                        handlePokemon(valueInput.toLowerCase());
                        setSearch(!search);
                    }}
                >
                    <FiSearch />
                </a>
                <span>{feedback}</span>
            </div>
        </div>
    )
}