import React from 'react';
import PokeIn from '../../components/PokeForm/PokeForm.js';

class Register extends React.Component {
  render() {
    return (
      <div>
        <PokeIn mainBtnText='OK' redirectBtnText='FAZER LOGIN'/>
      </div>
    )
  }
}

export default Register;