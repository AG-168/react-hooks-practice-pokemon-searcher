import React from "react";

function Search({onPokemonSearch, onPokemonSearchState}) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={onPokemonSearchState} onChange={onPokemonSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
