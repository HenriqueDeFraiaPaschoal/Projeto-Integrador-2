import React from 'react';
import PokeIn from '../../components/PokeForm/PokeForm.js';

class Login extends React.Component {
  render() {
    return (
      <div>
        <PokeIn mainBtnText='Login' redirectBtnText='CADASTRAR-SE' />
      </div>
      
    )
  }
}

export default Login;