import React from "react";
import {
  StyledCardDetails,
  StyledCardPokemons,
  StyledListTypes,
  StyledPokemon,
  StyledSectionCards,
} from "./style";

const CardPokemon = () => {
  return (
    <StyledSectionCards>
      <StyledCardPokemons>
        <StyledPokemon>
          <span className="pokemon-number">#001</span>
          <span className="pokemon-name">Bulbasaur</span>
          <StyledCardDetails>
            <StyledListTypes>
              <li>grass</li>
              <li>poison</li>
            </StyledListTypes>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="bulbasaur"
            />
          </StyledCardDetails>
        </StyledPokemon>
      </StyledCardPokemons>
    </StyledSectionCards>
  );
};
export { CardPokemon };
