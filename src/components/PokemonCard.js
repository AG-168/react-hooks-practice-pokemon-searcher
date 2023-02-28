import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from "react";

function PokemonCard({name, hp, spritesFront, spritesBack}) {

const [spritesDisplay, setSpritesDisplay] = useState(spritesFront)

const handleSpritesClick = () => {
  if (spritesDisplay === spritesFront) {
    setSpritesDisplay(spritesBack)
  } else {setSpritesDisplay(spritesFront)}
}


  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={spritesDisplay} onClick={handleSpritesClick}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
