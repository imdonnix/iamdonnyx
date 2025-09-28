import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { TranslationProvider } from "./utils/translations/translations";

function App() {
  return (
    <TranslationProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Home />
      </BrowserRouter>
    </TranslationProvider>
  );
}

export default App;
