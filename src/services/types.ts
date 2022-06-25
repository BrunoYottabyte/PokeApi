export interface PokemonProps {
    results: any;
    id: number,
    name: string;
    height?: number,
    weight?: number,
    sprites: {
        front_default: string;
        back_default: string;
    }
    types: [{
        type: {
            name: string;
        }
    }]
}