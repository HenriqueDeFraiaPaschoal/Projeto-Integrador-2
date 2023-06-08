import React from 'react';
import * as S from "./style.js";
import Input from '../Input/Input.js';
import Logo from '../Logo/Logo.js';
import { useNavigate } from "react-router-dom";

export const PokeIn = ({mainBtnText, redirectBtnText}) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/pokedex");
  }
  return (
    <S.PokeIn>
      <Logo />
      <Input placeholder="T R E I N A D O R" type="email" value=""/>
      <Input placeholder="S E N H A" type="password" value=""/>
      <S.btnLog onClick={handleClick}>{mainBtnText}</S.btnLog>
      <S.btnRedirect>{redirectBtnText}</S.btnRedirect>
    </S.PokeIn>
  )
};

export default PokeIn;