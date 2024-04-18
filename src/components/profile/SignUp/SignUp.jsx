import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import login from "../../../assets/profile.png";
import "./SignUp.scss";

const SignUp = () => {
  let navigate = useNavigate();

  let [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    role: '',
    country: '',
    about: ''
  });

  console.log(user);

  function getUserData(e) {
    e.preventDefault();
   
    if (user.password.length < 5) {
      alert('Password must be at least 5 characters');
      return;
    }
    if (user.password !== user.cpassword) {
      alert('PASSWORDS NOT MATCHED');
      return;
    }
    if (Object.values(user).every((e) => e !== '')) {
      localStorage.user = JSON.stringify(user);
      navigate('/posts');
      sessionStorage.userLoggedIn = true;
    }

  }


  return (
    <main className="sign-up">
      <nav className="navigation">
        <h3>Insta Sign Up</h3>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </nav>
      <section className="signup-container">
        <article className="img-container">
          <img src={login} alt="signup-pic" />
        </article>
        <article className="signup-form-container">
          <h2>Create your account</h2>
          <form className="signup-form" onSubmit={(event) => getUserData(event)}>
            <label htmlFor="fullname">
              Full Name
              <input type="text" id="fullname" placeholder="Enter your full name" required onChange={(e) => setUser({
                ...user,
                name: e.target.value
              })} />
            </label>
            <label htmlFor="email">
              E-mail
              <input type="email" id="email" placeholder="Enter your e-mail" onChange={(e) => setUser({
                ...user,
                email: e.target.value
              })} required />
            </label>
            <label htmlFor="password">
              Password
              <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setUser({
                ...user,
                password: e.target.value
              })} required />
            </label>
            <label htmlFor="cnfpassword">
              Confirm Password
              <input type="password" id="cnfpassword" placeholder="Re-enter your password" onChange={(e) => setUser({
                ...user,
                cpassword: e.target.value
              })} required />
            </label>
            <div className="row">
              <label htmlFor="role">
                Role
                <input type="text" id="role" placeholder="Your role" onChange={(e) => setUser({
                  ...user,
                  role: e.target.value
                })} required />
              </label>
              <label htmlFor="country">
                Country
                <select onChange={(e) => setUser({
                  ...user,
                  country: e.target.value
                })}>
                  <option value="">SELECT</option>
                  <option value="india">
                    INDIA
                  </option>
                  <option value="china">CHINA</option>
                  <option value="japan">JAPAN</option>
                  <option value="kuwait">KUWAIT</option>
                </select>
              </label>
            </div>

            <label htmlFor="about">
              About Yourself
              <textarea name="about" id="about" cols="30" rows="3" placeholder="Writer about yourself....." onChange={(e) => setUser({
                ...user,
                about: e.target.value
              })} required></textarea>
            </label>
            <div className="create-btn">
              <input type="checkbox" name="tnc" id="tnc" required />
              <label htmlFor="tnc">agree to the terms and privacy policy</label>
            </div>
            <button type="submit" >Create Account</button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default SignUp;
