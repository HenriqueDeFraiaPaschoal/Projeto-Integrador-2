import React, { useState } from "react";
import { searchPokemon } from "../../utils/pokeapi";

const Searchbar = () => {
  const logoAPI = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  // Recebe e altera o estado da variável search com o valor do input
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  }

  // Função de busca do pokemon na API
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log(result)
    setPokemon(result)
    if(search === "") {
      setPokemon(undefined)
    }
  }

  // Busca na pokeAPI o nome do pokemon guardado na variável search
  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

  return (
    <article className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
        <div>
          <img src={pokemon ? pokemon.sprites.versions['generation-v']['black-white'].animated.front_default : logoAPI} alt={pokemon ? pokemon.name : "arceus"} />
          <div>Name: {pokemon ? pokemon.name : "-"}</div>
          <div>Id: {pokemon ? pokemon.order : "-"}</div>
          <div>Type: {pokemon ? pokemon.types.reduce((acc, x) => {return acc + x.type.name + ", "}, "") : "-"}</div>
          <div>Weight: {pokemon ? `${pokemon.weight /10}kg` : "-"}</div>
          <div>Height: {pokemon ? `${pokemon.height /10}m` : "-"}</div>
          <div>Base Exp.: {pokemon ? pokemon.base_experience : "-"}</div>
          <div>Abilities: {pokemon ? pokemon.abilities.reduce((acc, x) => {return acc + x.ability.name + ", "}, "") : "-"}</div>
          <div>Moves: {pokemon ? pokemon.moves.reduce((accumulator, object) => {
    return accumulator + object.move.name + ", ";}, "") : "-"}</div>
        </div>
    </article>
  );
};

export default Searchbar;