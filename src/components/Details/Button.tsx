import { ButtonHTMLAttributes } from "react";
import { BsBookmark } from "react-icons/bs";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isFavorite: boolean;
}

export function Button({isFavorite, ...rest}: ButtonProps){
    if(isFavorite){
        return(
            <button
            {...rest}
            style={{
                background: 'var(--red-500)',
                color: 'var(--white)'
            }}  
            >Remover dos favoritos</button>
        )
    }
    
    return(
        <button
        {...rest}
        > <BsBookmark/>Adicionar aos favoritos</button>
    )

}