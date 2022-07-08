import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetailsPage = () => {
  const params = useParams();
  const { pokemon_name } = params;
  const [pokemon, setPokemon] = useState(null);

  const getPokemonDetails = async (name) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPokemonDetails(pokemon_name);
  }, [pokemon_name]);

  return (
    <div className="pokemon-details">
      {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width="200"
          ></img>
        </div>
      ) : (
        "Loading Pokemon..."
      )}
    </div>
  );
};

export default PokemonDetailsPage;
