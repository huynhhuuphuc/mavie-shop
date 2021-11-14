import React from "react";
import { Switch, Route } from "react-router-dom";

// Chakra-ui
import { ChakraProvider } from "@chakra-ui/react";

// layout
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";

// pages
import Homepage from "./pages/Homepage";
// import Search from "./pages/Search";
import ProductList from "./pages/ProductList";

import "./default.scss";

function App({ Component }) {
  return (
    <ChakraProvider>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <MainLayout>
                <ProductList />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    </ChakraProvider>
  );
}

export default App;
