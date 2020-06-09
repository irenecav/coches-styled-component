import React from "react";
import Button from "./../Button/Button";
import {  SearchContainer } from "./Search.styles";
import IosSearch from "react-ionicons/lib/IosSearch";

const Search = () => {
  return (
    <SearchContainer>
      <input type="text" placeholder="Buscar entre 15.531 ofertas" />
      <Button icon={<IosSearch fontSize="2.5rem" color="#292929" />} />
    </SearchContainer>
  );
};

export default Search;
