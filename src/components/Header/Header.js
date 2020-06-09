import React from "react";
import Search from "../Search/Search";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1>La mayor oferta de coches Seminuevos y Km 0</h1>
      <Search />
    </StyledHeader>
  );
};

export default Header;
