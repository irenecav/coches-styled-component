import React from "react";
import Header from "./components/Header/Header";
import Showcase from "./components/Showcase/Showcase";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import theme from "./consts/theme";
import ModalProvider from "./context/ModalContext";
import CarModal from "./components/CarModal/CarModal";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ModalProvider>
        <Showcase />
        <CarModal />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
