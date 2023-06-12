import React from "react";
import Navbar from "./components/navbar/Navbar";
import PokeSheet from "./components/poke-sheet/PokeSheet";
import Searchbar from "./components/api/Searchbar";

import "./global-style/index.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bookcase">
        <PokeSheet />
        <Searchbar />
      </div>
      <div className="App">
      </div>
    </div>
  );
}

export default App;
