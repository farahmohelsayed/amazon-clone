import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const submitFormHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        // redirect home
        navigate("/", { replace: true });
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        navigate("/", { replace: true });
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className={styles.login}>
      <Link to="/">
        <img
          className={styles.loginLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className={styles.loginContainer}>
        <h1>Sign In</h1>
        <form onSubmit={submitFormHandler}>
          <h5>E-mail</h5>
          <input
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            type="password"
          />
          <button>Sign in</button>
        </form>
        <p>
          By signing-in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register}>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
