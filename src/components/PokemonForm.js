import React , {useEffect, useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onHandleNewPokemon}) {
  const [newPokemonName, setNewPokemonName] = useState("")
  const [newPokemonHp, setNewPokemonHp] = useState(null)
  const [newPokemonFrontSprite, setNewPokemonFrontSprite]= useState("")
  const [newPokemonBackSprite, setNewPokemonBackSprite] = useState("")
  
  const handleNameForm = (e)=> setNewPokemonName(e.target.value)
  const handleHpForm = (e)=> setNewPokemonHp(parseInt(e.target.value))
  const handleFrontSprite = (e)=> setNewPokemonFrontSprite(e.target.value)
  const handleBackSprite = (e)=> setNewPokemonBackSprite(e.target.value)


  function handleSubmit () {
    const newPokemonInfo = {
      "name":newPokemonName,
      "hp":newPokemonHp,
      "sprites":{
        "front":newPokemonFrontSprite,
        "back":newPokemonBackSprite
      }
    }
    onHandleNewPokemon(newPokemonInfo)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemonName} onChange={handleNameForm}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" type="number" value={newPokemonHp} onChange={handleHpForm}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemonFrontSprite}
            onChange={handleFrontSprite}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemonBackSprite}
            onChange={handleBackSprite}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
