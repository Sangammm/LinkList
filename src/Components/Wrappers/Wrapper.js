import React, { useState, useEffect, cleanUp } from "react";
import { Mutation } from "react-apollo";
import { ApolloConsumer } from "react-apollo";
import { SIGNUP } from "../../Apollo/gql";
import { LOGIN } from "../../Apollo/gql";
import { Redirect } from "react-router-dom";
import { checkerror } from "../../Errors";
export const Loader = () => {
  const [string, set] = useState("Loading.");

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, [string]);

  const interval = setInterval(() => {
    set(`${string}` + "..");
  }, 500);
  return <div>{string}</div>;
};

export const Signupwrapper = Wrappedcomponent => {
  return propsNew => (
    <Mutation mutation={SIGNUP}>
      {(signup, { data, loading, error }) => {
        if (error) {
          propsNew.seterr(checkerror(error.graphQLErrors[0].message));
          propsNew.setislogin(true);
        }
        if (data) {
          console.log("User=", data);
          localStorage.setItem("token", data.signup.token);
        }
        return data ? (
          <React.Fragment>
            <ApolloConsumer>
              {client => {
                client.writeData({
                  data: { isLoggedIn: true, id: data.signup.user.id }
                });
              }}
            </ApolloConsumer>
            <Redirect to="/home" />
          </React.Fragment>
        ) : loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {propsNew.err && (
              <React.Fragment>
                <div>{propsNew.err.message}</div>
              </React.Fragment>
            )}
            <Wrappedcomponent
              signup={signup}
              loading={loading}
              data={data}
              {...propsNew}
            />
          </React.Fragment>
        );
      }}
    </Mutation>
  );
};

export const LoginWrapper = Wrappedcomponent => {
  return propsNew => (
    <Mutation mutation={LOGIN}>
      {(login, { error, data, loading }) => {
        if (error) {
          propsNew.seterr(checkerror(error.graphQLErrors[0].message));
        }
        if (data) {
          console.log("User=", data);
          localStorage.setItem("token", data.login.token);
          //localStorage.setItem("username", data.login.user.email);
        }
        return data ? (
          <React.Fragment>
            <ApolloConsumer>
              {client => {
                client.writeData({
                  data: { isLoggedIn: true, id: data.login.user.id }
                });
              }}
            </ApolloConsumer>
            <Redirect to="/home" />
          </React.Fragment>
        ) : loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {propsNew.err && (
              <React.Fragment>
                <div>{propsNew.err.message}</div>
              </React.Fragment>
            )}
            <Wrappedcomponent
              login={login}
              loading={loading}
              data={data}
              {...propsNew}
            />
          </React.Fragment>
        );
      }}
    </Mutation>
  );
};

export const clientProvider = Wrappedcomponent => {
  return props => (
    <ApolloConsumer>
      {client => {
        return <Wrappedcomponent client={client} {...props} />;
      }}
    </ApolloConsumer>
  );
};
