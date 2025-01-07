import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    anterior : "",
    siguiente : "",
    pokemones : []
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers:{
        addPokemon : (state, action) => {
            state.antterior = action.payload.previous
            state.siguiente = action.payload.next
            state.pokemones = action.payload.results
        }
    }
})

export const {addPokemon} = pokemonSlice.actions
export default pokemonSlice.reducer