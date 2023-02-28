import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokemonData} ) {

  
  const displayPokemonCards = pokemonData.map((pokemon)=>
    <PokemonCard 
      key={pokemon.id}
      name={pokemon.name}
      hp={pokemon.hp}
      spritesFront={pokemon.sprites.front}
      spritesBack={pokemon.sprites.back}
      />
  ) 
  
  

  


  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
