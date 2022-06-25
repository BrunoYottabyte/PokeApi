import axios from "axios";
import { api } from "./api";

export const fetchData = async() => {
    let arr = [];
    const {data} = await api.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=200"`)
    const listPokemon = data.results.slice(0,200).map(resp => resp.url);
   
    const response = await axios.all(listPokemon.map((endpoint) => axios.get(endpoint))).then(
        data => data.map(pokemon => {
            return pokemon.data
        })
    )

    return response;
}