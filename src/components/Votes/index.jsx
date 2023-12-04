import React, { useState } from "react";
import CalculateWinner from "../Calculate";
import PokemonInput from "../PokemonInput";

const PokemonVote = ({ name }) => {
  const initialPokemonState = {
    bulbasaur: { name: 'Bulbasaur', votes: 0 },
    charmander: { name: 'Charmander', votes: 0 },
    squirtle: { name: 'Squirtle', votes: 0 },
  };

  const [pokemon, setPokemon] = useState(initialPokemonState);

  const handleVote = (pokemonName) => {
    setPokemon((prevPokemon) => {
      const updatedPokemon = { ...prevPokemon };
      updatedPokemon[pokemonName].votes += 1;
      return updatedPokemon;
    });
  };

  const handleNameChange = (pokemonName, newName) => {
    setPokemon((prevPokemon) => {
      const updatedPokemon = { ...prevPokemon };
      updatedPokemon[pokemonName].name = newName;
      return updatedPokemon;
    });
  };

  return (
    <div>
      {name && <p data-testid="user-input-display">Welcome {name}!</p>}
      <CalculateWinner
        bulbasaurVote={pokemon.bulbasaur.votes}
        charmanderVote={pokemon.charmander.votes}
        squirtleVote={pokemon.squirtle.votes}
      />
      <div>
        {Object.keys(pokemon).map((pokemonName) => (
          <div key={pokemonName}>
            <h3>{pokemon[pokemonName].name}</h3>
            <PokemonInput
              data-testid={`${pokemonName}-input`}
              onNameChange={(newName) =>
                handleNameChange(pokemonName, newName)
              }
            />
            <img src="" alt="" />
            <button onClick={() => handleVote(pokemonName)}>
              Vote {pokemon[pokemonName].name}
            </button>
            <p data-testid={`${pokemonName}-vote`}>
              {pokemon[pokemonName].votes} votes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonVote;
