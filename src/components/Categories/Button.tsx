import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
    handleClick: (value: string) => void;
}

export function Button({children, handleClick, ...rest}:ButtonProps){
    return(
        <button {...rest} onClick={() => handleClick(children)}>
            {children}
        </button>
    )
}