import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPokemon } from '../redux/pokemonSlice';

function ConsumoAPI(){

    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemon)
    const [Pokemonimg, setPokemonimg] = useState()

    const hanndleClick = async(e) => {
        try {
            const response = await fetch(e.target.value);
            const pokemons = await response.json();
            setPokemonimg(pokemons.sprites.front_default)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    const Paginanext = async (e) => {
        try {
            const response = await fetch(e.target.value);
            const pokemons = await response.json();
            dispatch(addPokemon(pokemons))
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    return(
        <div>
            {
                pokemons.pokemones.map((pokemon, index) =>
                <button key={index} value={pokemon.url} onClick={hanndleClick}>
                    {pokemon.name}
                </button>
                
            )}
            <div>
                <img src={Pokemonimg} style={{width:"300px", height:"300px"}}/>
            </div>
            
            <button value={pokemons.siguiente} onClick={Paginanext}>Siguiente</button>
        </div>
    )
}

export default ConsumoAPI;