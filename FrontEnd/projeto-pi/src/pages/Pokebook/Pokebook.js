import React from 'react';
import * as S from "./style.js";
import Logo from '../../components/Logo/Logo';
import InputPokeCard from '../../components/InputRating/InputRating.js';

class Pokebook extends React.Component {
  render() {
    return (
      <S.BackGround>
          <S.Header>
            <Logo />
            <h1>MY POKEMON</h1>
          </S.Header>
          <InputPokeCard placeholder='Pokemon' type='text' />
        <S.PokemonCard>
          <InputPokeCard labelTitle='VITALIDADE' placeholder='0' type='number'/>
          <InputPokeCard labelTitle='BELEZA' placeholder='0' type='number'/>
          <InputPokeCard labelTitle='PECULIARIDADE' placeholder='0' type='number'/>
          <InputPokeCard labelTitle='FOFURA' placeholder='0' type='number'/>
          <InputPokeCard labelTitle='FORÇA' placeholder='0' type='number'/>
          <InputPokeCard labelTitle='RESISTÊNCIA' placeholder='0' type='number'/>
          <InputPokeCard labelTitle='DESTREZA' placeholder='0' type='number'/>
          <InputPokeCard labelTitle='MANEIRISMO' placeholder='0' type='number'/>
          <InputPokeCard labelTitle='PERCEPÇÃO' placeholder='0' type='number' />
          <InputPokeCard labelTitle='INTELIGÊNCIA' placeholder='0' type='number'/>

        </S.PokemonCard>
        <S.PokedexChart>
          <img alt='Imagem Pokemon' />
          <main>
            <h2>Charizard</h2>
            <p>FOGO</p>
            <p>VOADOR</p>
            <p>90.5KG</p>
            <p>1.70M</p>
            <h3>Movements</h3>
            <ol>
              <li>Movement1</li>
              <li>Movement2</li>
              <li>Movement3</li>
              <li>Movement4</li>
              <li>Movement5</li>
              <li>Movement6</li>
            </ol>
          </main>


        </S.PokedexChart>
      </S.BackGround>
      
    )
  }
}

export default Pokebook;