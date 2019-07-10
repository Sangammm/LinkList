//import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

let cache = new InMemoryCache();
cache.writeData({
  data: {
    isLoggedIn: false
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache
});
