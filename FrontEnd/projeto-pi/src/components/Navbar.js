import React, { useState } from "react";
import { getData, setData } from "../utils/firebaseapi";
import logo from "../img/logo.svg"

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
    console.log(fireData)
    setFireData(firebaseData);
    console.log(fireData)
  };

  const onGetHandler = async () => {
    const haa = await getFireBase();
    console.log(haa)
  };

  const onRegisterHandler = () => {
    setData(email, password);
  };
  return (
    <>
      <nav>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
        <div>
          <input placeholder="Login" onChange={onChangeLoginHandler} />
          <p>Henrique</p>
        </div>
        <div>
          <input placeholder="Password" onChange={onChangePasswordHandler} />
          <p>Logado</p>
        </div>
        <button onClick={onGetHandler}>My pokemon</button>
        <button>Save pokemon</button>
        <button onClick={onRegisterHandler}>Register</button>
        {fireData}
      </nav>
    </>
  );
};

export default Navbar;
