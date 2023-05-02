import styled from "styled-components";
import background from "../../img/Background2.gif";

//FUNDO
export const BackGround = styled.main`
  background-image: url(${background});
  width: 96vw;
  height: 91.3vh;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;
  padding: 2%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 8fr;
  grid-gap: 50px;
`
//ESQUERDA
export const PokemonCard = styled.form`
  height: 40%;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.01);
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7.5px);
  border-radius: 43px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  flex-wrap: wrap;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
`

//DIREITA
export const PokedexChart = styled.form`
  height: 40%;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.01);
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7.5px);
  border-radius: 43px;
  display: flex;
`;