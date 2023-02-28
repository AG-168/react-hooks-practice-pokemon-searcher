import React , {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCards, setPokemonCards] = useState([])
  const [pokemonSearch, setPokemonSearch] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:3001/pokemon`)
    .then((r)=>r.json())
    .then((data)=>{
      setPokemonCards(data)
    })
  },[])

  const handlePokemonSearch = (event) => {
    setPokemonSearch(event.target.value)
  }
  
  let filteredPokemon = pokemonCards.filter((pokemon)=>{
    return pokemon.name.includes(pokemonSearch)
  })

  function handleNewPokemon (newPokemon) {
    setPokemonCards([...pokemonCards, newPokemon])
    fetch(`http://localhost:3001/pokemon`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(newPokemon)
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onHandleNewPokemon={handleNewPokemon}/>
      <br />
      <Search onPokemonSearch={handlePokemonSearch} onPokemonSearchState={pokemonSearch}/>
      <br />
      <PokemonCollection pokemonData={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
