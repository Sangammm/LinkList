import React, { useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { clientProvider } from "./Wrappers/Wrapper";
import { ISLOGGEDIN } from "../Apollo/gql";
import { Query } from "react-apollo";
import { FEED } from "../Apollo/gql";
import { Loader } from "./Wrappers/Wrapper";
import Feed from "./Feed";
const Home = props => {
  console.log(props.history);
  useEffect(() => {
    let data = props.client.readQuery({
      query: ISLOGGEDIN
    });
    if (!data.isLoggedIn) {
      props.history.push("/");
    }
  }, []);

  return (
    <React.Fragment>
      <Query query={FEED}>
        {({ loading, data, error }) =>
          loading ? (
            <Loader />
          ) : error ? (
            <h5>Some Error Occured</h5>
          ) : (
            <React.Fragment>
              <Feed {...data} />
            </React.Fragment>
          )
        }
      </Query>
    </React.Fragment>
  );
};
export default clientProvider(withRouter(Home));
