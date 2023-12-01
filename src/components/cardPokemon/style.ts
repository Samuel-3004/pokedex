import styled from "styled-components";

export const StyledSectionCards = styled.section`
  padding: 1rem;
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  @media screen and (min-width: 992px) {
    max-width: 992px;
    height: auto;
    margin: 1rem auto;
    border-radius: 1rem;
  }
`;
export const StyledCardPokemons = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 380px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export const StyledPokemon = styled.li`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0.5rem;
  padding: 1rem;
  background-color: #49d0b0;
  border-radius: 0.5rem;

  .pokemon-number {
    color: #000;
    opacity: 0.3;
    text-align: right;
    font-size: 0.625rem;
  }
  .pokemon-name {
    margin-bottom: 0.25rem;
    color: #fff;
  }
  @media screen and (min-width: 426px) {
    width: 200px;
  }
`;
export const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  img {
    max-width: 100%;
    height: 70px;
    align-self: flex-end;
  }
`;
export const StyledListTypes = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
  li {
    /* border: 1px solid; */
    border-radius: 1rem;
    padding: 0.25rem 0.5rem;
    background-color: #61e1ca;
    color: #fff;
    font-size: 0.625rem;
    /* font-weight: 300; */
    margin: 0.25rem 0;
  }
`;
