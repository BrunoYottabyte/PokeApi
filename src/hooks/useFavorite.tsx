import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PokemonProps } from "../services/types";


interface FavoriteContextData{
    handleFavorite: (data: PokemonProps) => void;
    ids: any;
    storage: any;
}

const FavoriteContext = createContext<FavoriteContextData>({} as FavoriteContextData);

interface FavoriteProviderProps {
    children: ReactNode
}

export function FavoriteProvider({children}: FavoriteProviderProps){

    const [storage, setStorage] = useState<PokemonProps []>([] as PokemonProps []);
    const [ids, setIds] = useState<[]>([]);

    
    useEffect(() => {
        if(typeof window !== "undefined"){
            setStorage(JSON.parse(String(localStorage.getItem('@favorite'))))
        }
    }, [])

    useEffect(() => {
        let arrUpdate: any = [];
        const storage = JSON.parse(String(localStorage.getItem('@favorite')));
        storage?.map((local: { id: number }) => arrUpdate.push(local.id));
        setIds(arrUpdate);
    }, [storage])

    const handleFavorite = (pokemon: PokemonProps) => {
        let arr = [];
        const storage = JSON.parse(String(localStorage.getItem('@favorite')))
        if(storage) arr.push(...storage);

        let index = arr.findIndex(val => val.id === pokemon.id);

        if(index < 0){
            arr.push(pokemon)
            localStorage.setItem('@favorite', JSON.stringify(arr));
        }else{
            arr.splice(index, 1)
            localStorage.setItem('@favorite', JSON.stringify(arr));
        }
        setStorage(arr);
    }

    return(
        <FavoriteContext.Provider value={{handleFavorite, ids, storage}}> 
            {children}
        </FavoriteContext.Provider>
    )

}

export const useFavorite = () => useContext(FavoriteContext);