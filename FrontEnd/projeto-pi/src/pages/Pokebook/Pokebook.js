import React from 'react';

// import * as S from "./style.js";

import Logo from '../../components/Logo/Logo';
import InputPokeCard from '../../components/InputRating/InputRating.js';

import './styles.css';

class Pokebook extends React.Component {
  render() {
    return (
      <div className="container">

        <div className='websiteTop'>

          {/* Logomarca */}
          <div className='logomarca'>
            {/* <S.Header> */}
              <Logo />
              <h1>MY POKEMON</h1>
            {/* </S.Header> */}
          </div>

          {/* PARTE QUE PESQUISA O POKEMON NA API */}
          <div className='sarch'>
            <InputPokeCard placeholder='Pokemon' type='text' />
          </div>

        </div>

          <div className='shelf'>
            {/* PARTE DO POKEMON DO USUÁRIO */}
            <div className='sheetBox'>
              <div className='pokeData'>
                <p>HP</p>
                <p>INICIATIVA</p>
                <p>PRECISÃO</p>
                <p>LEVEL</p>
                <p>EXP</p>
              </div>
              {/* <S.PokemonCard> */}
                <div className='primarySkills'>
                  <table>
                    <InputPokeCard labelTitle='FORÇA' placeholder='0' type='number'/>
                    <InputPokeCard labelTitle='RESISTÊNCIA' placeholder='0' type='number'/>
                  </table>
                  <table>
                    <InputPokeCard labelTitle='DESTREZA' placeholder='0' type='number'/>
                    <InputPokeCard labelTitle='MANEIRISMO' placeholder='0' type='number'/>
                  </table>
                  <table>
                    <InputPokeCard labelTitle='VITALIDADE' placeholder='0' type='number'/>
                    <InputPokeCard labelTitle='BELEZA' placeholder='0' type='number'/>
                  </table>
                  <table>
                    <InputPokeCard labelTitle='PECULIARIDADE' placeholder='0' type='number'/>
                    <InputPokeCard labelTitle='FOFURA' placeholder='0' type='number'/>
                  </table>
                  <table>
                    <InputPokeCard labelTitle='PERCEPÇÃO' placeholder='0' type='number' />
                    <InputPokeCard labelTitle='INTELIGÊNCIA' placeholder='0' type='number'/>
                  </table>
                </div>
                <div className='secondarySkills'>
                  <table>
                    <InputPokeCard labelTitle='COMBATE' placeholder='0' type='number'/>
                    <p>LUTA</p>
                    <p>CANALIZAR</p>
                    <p>EVASÃO</p>
                    <p>MARCIAL</p>
                  </table>
                  <table>
                    <InputPokeCard labelTitle='SOBREVIVÊNCIA' placeholder='0' type='number'/>
                    <p>ALERTA</p>
                    <p>ATLETICO</p>
                    <p>NATUREZA</p>
                    <p>FURTIVIDADE</p>
                  </table>
                  <table>
                    <InputPokeCard labelTitle='CONCURSO' placeholder='0' type='number'/>
                    <p>FACINANTE</p>
                    <p>ETIQUETA</p>
                    <p>INTIMIDAR</p>
                    <p>PERFORMANCE</p>
                  </table>
                </div>
              {/* </S.PokemonCard> */}
            </div>

            <div className='PokedexChart'>
              {/* PARTE DA API QUE DEVOLVE O POKEMON */}
              {/* <S.PokedexChart> */}
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
              {/* </S.PokedexChart> */}
            </div>
          </div>

      </div>
    )
  }
}

export default Pokebook;