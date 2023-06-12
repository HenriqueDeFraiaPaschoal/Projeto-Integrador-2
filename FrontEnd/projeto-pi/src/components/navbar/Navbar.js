import React, { useState } from "react";
import { getData, setData } from "../../utils/firebaseapi";
import logo from "../../global-style/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const logoImg = logo;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fireData, setFireData] = useState();

  const onChangeLoginHandler = (e) => {
    setEmail(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const getFireBase = async () => {
    const firebaseData = await getData();
    console.log(fireData);
    setFireData(firebaseData);
    console.log(fireData);
  };

  const onGetHandler = async () => {
    const haa = await getFireBase();
    console.log(haa);
  };

  const onRegisterHandler = () => {
    setData(email, password);
  };
  return (
    <>
      <nav>
        <div class="logomarca">
          <img alt="my-pokemon-logo" src={logoImg} />
          <h1>MY POKEMON</h1>
        </div>
        <div class="userOptions">
          <div class="column">
            <button onClick={onGetHandler}>SEUS POKEMONS</button>
            <button>SALVAR ESTA FICHA</button>
          </div>
          <div class="column">
            <div>
              <input placeholder="Login" onChange={onChangeLoginHandler} />
              <p>Henrique</p>
            </div>
            <div>
              <input
                placeholder="Password"
                onChange={onChangePasswordHandler}
              />
              <p>LOGADO</p>
            </div>
            <button onClick={onRegisterHandler}>CADASTRAR-SE</button>
          </div>
        </div>
        {fireData}
      </nav>
    </>
  );
};

export default Navbar;
