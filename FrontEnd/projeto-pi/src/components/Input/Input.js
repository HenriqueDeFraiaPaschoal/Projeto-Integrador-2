import React from 'react';
import * as S from "./style";

export const Input = ({ 
  placeholder,
  type,
  value,
  buttonName }) => {
  return <S.Input placeholder={placeholder} type={type} >{buttonName}</S.Input>;
};

export default Input;