import styled from "styled-components";
import url from "../../img/pokeball.svg";

export const PokeIn = styled.form`
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10vh auto;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: clamp(30rem, 100%, 70vh);
  height: clamp(30rem, 70vh, 50rem);
  display: flex;
`;

export const btnLog = styled.button`
  border: none;
  background-color: #0000;
  font-size: 1rem;
  margin-top: 3rem;
  cursor: pointer;
  font-weight: bold;
`

export const btnRedirect = styled.button`
  border: none;
  background-color: #FFF;
  color: #000;
  width: 15rem;
  height: 2rem;
  border-radius: 25px;
  box-shadow: 0px 0px 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  margin-top: 3rem;
  cursor: pointer;
  font-weight: bold;
`