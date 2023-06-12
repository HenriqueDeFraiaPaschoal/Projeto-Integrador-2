import React, { useState } from "react";
import { searchPokemon } from "../../utils/pokeapi";
import "./Searchbar.css";

const Searchbar = () => {
  const logoAPI =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  // Recebe e altera o estado da variável search com o valor do input
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  // Função de busca do pokemon na API
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log(result);
    setPokemon(result);
    if (search === "") {
      setPokemon(undefined);
    }
  };

  // Busca na pokeAPI o nome do pokemon guardado na variável search
  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  return (
    <article className="searchbar-container">
      <div className="searchbar">
        <input placeholder="PESQUISAR POKEMON" onChange={onChangeHandler} />
        <button onClick={onButtonClickHandler}>
          <img
            src={require("../../global-style/search.svg").default}
            alt="search"
          />
        </button>
      </div>
      <div class="api">
        <div class="dexNumbers">
          <div>
            <h1># {pokemon ? pokemon.order : "-"}</h1>
          </div>
          <div>EXP : {pokemon ? pokemon.base_experience : "-"}</div>
        </div>
        <img
          src={
            pokemon
              ? pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              : logoAPI
          }
          alt={pokemon ? pokemon.name : "arceus"}
        />
        <div class="name">
          <p>NOME</p>
          <h1>{pokemon ? pokemon.name : "-"}</h1>
        </div>
        <div class="dexColumn">
          <div class="qualitieDex">
            <div>
              <p>TIPAGEM</p>
              <h1>
                {" "}
                {pokemon
                  ? pokemon.types.reduce((acc, x) => {
                      return "| " + acc + x.type.name + " | ";
                    }, "")
                  : "-"}
              </h1>
            </div>
            <div>
              <p>HABILIDADES</p>
              <h1>
                {" "}
                {pokemon
                  ? pokemon.abilities.reduce((acc, x) => {
                      return "| " + acc + x.ability.name + " | ";
                    }, "")
                  : "-"}
              </h1>
            </div>
          </div>
          <div class="proportions">
            <div>
              <h1>{pokemon ? `${pokemon.weight / 10}kg` : "-"}</h1>
              <p>PESO</p>
            </div>
            <div>
              <h1>{pokemon ? `${pokemon.height / 10}m` : "-"}</h1>
              <p>ALTURA</p>
            </div>
          </div>
        </div>
        <div class="moviments">
          <h1>MOVIMENTOS</h1>
          <p>
            {" "}
            {pokemon
              ? pokemon.moves.reduce((accumulator, object) => {
                  return accumulator + object.move.name + " || ";
                }, "")
              : "-"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Searchbar;
