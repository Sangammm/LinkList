import React, { useState } from "react";
import { LoginWrapper } from "./Wrappers/Wrapper";
const Login = props => {
  return (
    <React.Fragment>
      <div>
        <h1>Login</h1>
        <form>
          <input
            type="email"
            value={props.e}
            onChange={e => props.sete(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            value={props.p}
            onChange={e => props.setp(e.target.value)}
            required
            placeholder="Password"
          />
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              props.login({
                variables: {
                  email: props.e,
                  password: props.p
                }
              });
            }}
          >
            Login
          </button>
        </form>
        <button
          onClick={() => {
            props.setislogin(false);
          }}
        >
          Go to Signup
        </button>
      </div>
    </React.Fragment>
  );
};
export default LoginWrapper(Login);
