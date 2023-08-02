import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Theme from "./theme.jsx";
import { createContext } from "react";

export const api = "https://combative-lime-hosiery.cyclic.cloud/api/user";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider theme={Theme}>
      <AppWrapper />
    </ChakraProvider>
  </React.StrictMode>
);
