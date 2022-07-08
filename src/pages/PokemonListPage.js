import axios from "axios";
import { useEffect, useState } from "react";
import PokemonNameBlock from "../components/PokemonNameBlock";

const PokemonListPage = (params) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Pokemon List</h1>
      </div>
      <div className="pokemon-list">
        {pokemons
          ? pokemons.map((pokemon, index) => (
              <PokemonNameBlock key={index} name={pokemon.name} />
            ))
          : "Loading.."}
      </div>
    </div>
  );
};

export default PokemonListPage;
