import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { client } from "./Apollo/index";
import Auth from "./Components/Auth";
import home from "./Components/Home";
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/" exact component={Auth} />
        <Route path="/home" component={home} />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
