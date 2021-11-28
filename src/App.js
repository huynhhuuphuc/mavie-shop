import React from "react";
import { Switch, Route } from "react-router-dom";

// Chakra-ui
import { ChakraProvider } from "@chakra-ui/react";

// layout
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";

// pages
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

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
            path="/search"
            render={() => (
              <MainLayout>
                <ProductList />
              </MainLayout>
            )}
          />
          <Route
            path="/detail"
            render={() => (
              <MainLayout>
                <ProductDetails />
              </MainLayout>
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <MainLayout>
                <Cart />
              </MainLayout>
            )}
          />
          <Route
            path="/payment"
            render={() => (
              <MainLayout>
                <Payment />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    </ChakraProvider>
  );
}

export default App;
