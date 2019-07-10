import React from "react";
import { Signupwrapper } from "./Wrappers/Wrapper";

const Signup = props => {
  return (
    <React.Fragment>
      <h1>Signup</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.signup({
            variables: {
              name: props.n,
              email: props.e,
              password: props.p
            }
          });
        }}
      >
        <input
          type="text"
          value={props.n}
          onChange={e => props.setn(e.target.value)}
          required
          placeholder="Name"
        />
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
        <button type="submit">Signup</button>
      </form>
      <button
        onClick={() => {
          props.setislogin(true);
        }}
      >
        Go to Login
      </button>
    </React.Fragment>
  );
};

export default Signupwrapper(Signup);
