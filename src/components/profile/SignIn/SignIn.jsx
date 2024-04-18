import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../../assets/profile.png";
import google from '../../../assets/google.png';
import facebook from '../../../assets/facebook.png';
import twitter from '../../../assets/Twitter.png';
import "./sign-in.scss";
import { Button, TextField } from "@mui/material";

const SignIn = () => {
  const nav = useNavigate();
  let [loggedUser, setLoggedUser] = useState({
    email: '',
    password: '',
  });

  const validateUser = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.user);
    if (user.email === loggedUser.email && user.password === loggedUser.password) {
      nav('/posts');
      sessionStorage.userLoggedIn = true;
    }
    else {
      alert('Invalid username or password');
    }
  }

  return (
    <main className="sign-up">
      <nav className="navigation">
        <h3>Insta Sign In</h3>
        <p>
          New User? <Link to="/signup">Sign Up</Link>
        </p>
      </nav>
      <section className="signup-container">
        <article className="img-container">
          <img src={login} alt="signin-pic" />
        </article>
        <div className="signup-form-container">
          <div className="log-text">
            <h1>Welcome Back!</h1>
            <p>Login to continue</p>
          </div>
          <form className="form-container">
            <TextField fullWidth id="fullWidth" value={loggedUser.email} type="email" label="E-mail" variant="standard" size="small" onChange={(event) => {
              setLoggedUser({
                ...loggedUser,
                email: event.target.value
              });
            }} />
            <TextField fullWidth id="fullWidth" type="password" label="Password" variant="standard" size="small" onChange={(event) => {
              setLoggedUser({
                ...loggedUser,
                password: event.target.value
              });
            }} />

            <div className="login-password">
              <Button className="login-btn" type="submit" variant="contained" onClick={(event) => validateUser(event)}>Login</Button>
              <div>
                <p>forget password</p>
              </div>
            </div>
          </form>
          <div className="social-btns">
            <p>Login with</p> <img src={google} alt="google" className="google" /> <img src={facebook} alt="facebook" className="facebook" /> <img src={twitter} alt="twitter" className="twitter" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
