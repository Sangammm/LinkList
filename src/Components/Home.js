import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { clientProvider } from "./Wrappers/Wrapper";
import { ISLOGGEDIN } from "../Apollo/gql";
import { Query } from "react-apollo";
const Home = props => {
  console.log(props.client);
  useEffect(() => {
    let data = props.client.readQuery({
      query: ISLOGGEDIN
    });
    console.log(data.isLoggedIn);
  }, []);

  return (
    <React.Fragment>
      <Query query={ISLOGGEDIN}>
        {({ data }) => {
          console.log(data.isLoggedIn);
          return !data.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <React.Fragment>
              <h1>HOme</h1>
              {data && <h2>{data.isLoggedIn}</h2>}
            </React.Fragment>
          );
        }}
      </Query>
    </React.Fragment>
  );
};

export default clientProvider(Home);
