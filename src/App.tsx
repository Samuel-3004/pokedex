import React from "react";
import { CardPokemon } from "./components/cardPokemon/cardPokemon";
import { GlobalStyled } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyled />
      <CardPokemon />
    </>
  );
}

export default App;
