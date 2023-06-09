import React, {useState} from 'react';
import * as S from './style.js'

export const InputPokeCard = ({
  labelTitle,
  placeholder,
  type,
  value,
  onChange
}) => {
  const [search, setSearch] = useState("ditto");
  const handleChange = (e) => {
    console.log(search);
    setSearch(e.target.value);
  };
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
