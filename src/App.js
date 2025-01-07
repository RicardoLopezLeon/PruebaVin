import './App.css';

import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import ConsumoAPI from './componentes/ConsumoAPI';
import { addPokemon } from './redux/pokemonSlice';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const pokemons = await response.json();
            dispatch(addPokemon(pokemons))
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };
    fetchPokemon();
}, [dispatch]);

  return (
    <div className="App">
      <ConsumoAPI/>
    </div>
  );
}

export default App;
