import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = props => {
  const [islogin, setislogin] = useState(true);
  const [n, setn] = useState("");
  const [e, sete] = useState("");
  const [p, setp] = useState("");
  const [err, seterr] = useState();
  return islogin ? (
    <Login
      setislogin={setislogin}
      n={n}
      e={e}
      p={p}
      setn={setn}
      sete={sete}
      setp={setp}
      err={err}
      seterr={seterr}
    />
  ) : (
    <Signup
      setislogin={setislogin}
      n={n}
      e={e}
      p={p}
      setn={setn}
      sete={sete}
      setp={setp}
      err={err}
      seterr={seterr}
    />
  );
};

export default Auth;
