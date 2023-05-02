import React from 'react';
import * as S from './style.js'

export const InputPokeCard = ({
  labelTitle,
  placeholder,
  type,
  value,
}) => {

  return (
    <div>
      <p><label>{labelTitle}</label></p>
      <S.InputPokeCard
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default InputPokeCard;
