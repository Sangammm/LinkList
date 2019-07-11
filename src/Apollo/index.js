import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

let cache = new InMemoryCache();
cache.writeData({
  data: {
    isLoggedIn: false
  }
});
// console.log(localStorage.getItem("token"));

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});
