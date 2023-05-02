import React from 'react';
import { redirect } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return redirect("/login");
  }
}

export default Home;