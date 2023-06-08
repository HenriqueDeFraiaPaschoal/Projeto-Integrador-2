import React, { useState, useEffect } from 'react';
import * as S from "./style.js";
import Input from '../Input/Input.js';
import Logo from '../Logo/Logo.js';
import { useNavigate } from "react-router-dom";

export const PokeIn = ({mainBtnText, redirectBtnText}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Username:', setUserName);
    console.log('Password:', password);
  }, [setUserName, password]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
   if (userName && password) { // faz a autenticação
      navigate('/pokedex');
  } else {
    }
  };

   
  return (
    <S.PokeIn>
      <Logo />
      <Input placeholder="T R E I N A D O R" 
      type="email" 
      value={setUserName} 
      onChange={(e) => setUserName(e.target.value)}/>
      <Input placeholder="S E N H A" 
      type="password" 
      value={setPassword} 
      onChange={(e) => setPassword(e.target.value)}/>
      <S.btnLog onClick={handleSubmit}>{mainBtnText}</S.btnLog>
      <S.btnRedirect>{redirectBtnText}</S.btnRedirect>
    </S.PokeIn>
  )
};

export default PokeIn;