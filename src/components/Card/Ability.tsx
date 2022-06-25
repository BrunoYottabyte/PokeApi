
type options = {
    electric: object;
    fire: object;
    water: object;
}

interface AbilityProps{
    name: string
}

export function Ability({name}: AbilityProps){

    const colors = {
        electric: {
            bg: "var(--yellow-500)",
            color: "var(--gray-500)"
        },
        fire: {
            bg: "var(--red-500)" ,
            color: "var(--white)"
        },
        water: {
            bg: "var(--blue-500)" ,
            color: "var(--white)"
        },
        flying: {
            bg: "var(--blue-500)" ,
            color: "var(--white)"
        },
        ice: {
            bg: "var(--cyan-400)" ,
            color: "var(--white)"
        },
   
        psychic: {
            bg: "var(--purple-800)" ,
            color: "var(--white)"
        },
        rock: {
            bg: "var(--gray-400)" ,
            color: "var(--white)"
        },
        
    }

    return(
        <a style={{
            background: colors[name as keyof options].bg,
            color: colors[name as keyof options].color,
        }}>
            {name}
        </a>
    )
}