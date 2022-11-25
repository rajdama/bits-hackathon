import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import {signup} from "../actions";

import "./Login.css";

function SignUpForm() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const [quotes, setquotes] = useState({});
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const checkuser = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     username,
  //     email,
  //     password
  //   }
  //   console.log(data);
  //   fetch("https://aryan672002.pythonanywhere.com/user/register",{
  //       method: 'POST', // or 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })
  //     .then(res => res.json())
  //     .then(res => {
  //       if(res["resp"] === "success"){
  //         navigate("/");
  //       }
  //       console.log(res)
  //       setmessage(res["resp"]);
  //     })
  // }
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const fetchquotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((response) => {
        console.log(response[getRndInteger(0, 1200)]);
        setquotes(response[getRndInteger(0, 1200)]);
      })
      .catch((err) => console.error(err));
  };
  let navigateflag = false

  const userSignUp = (e) => {
    e.preventDefault()
    const user = { firstName:firstname, lastName:lastname, email, userName:username,password };
    dispatch(signup(user));
    navigateflag = true
    setTimeout(() => {
      
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    fetchquotes();
  }, []);

  if (auth.authenticate) {
    return <Navigate to={"/chart"} />;
  }
  console.log(user)

  return (
    <div className="appAside">
      <div className="quotes">
        <div id="say">{quotes["text"]}</div>
        <div id="aname">- {quotes["author"]}</div>
      </div>
      <div className="appForm">
        <div className="pageSwitcher">
          <NavLink
            to="/signin"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/signup"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="formTitle">
          <NavLink
            to="/signin"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/signup"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="formCenter">
          {message === "failure" ? (
            <h3 style={{ color: "white" }}>*User Already exists</h3>
          ) : (
            <></>
          )}
          <form className="formFields">
            <div className="formField">
              <label className="formFieldLabel" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="formFieldInput"
                placeholder="Enter your first name"
                name="firstName"
                onInput={(e) => {
                  setfirstname(e.target.value);
                }}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="formFieldInput"
                placeholder="Enter your last name"
                name="lastName"
                onInput={(e) => {
                  setlastname(e.target.value);
                }}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="userName">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                className="formFieldInput"
                placeholder="Enter your user name"
                name="userName"
                onInput={(e) => {
                  setusername(e.target.value);
                }}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                onInput={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
                onInput={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>

            <div className="formField">
              <label className="formFieldCheckboxLabel">
                <input
                  className="formFieldCheckbox"
                  type="checkbox"
                  name="hasAgreed"
                />{" "}
                I agree all statements in{" "}
                <a href="null" className="formFieldTermsLink">
                  terms of service
                </a>
              </label>
            </div>

            <div className="formField">
              <button
                onClick={userSignUp}
                className="formFieldButton"
              >
                Sign Up
              </button>{" "}
              <Link to="/" className="formFieldLink">
                I'm already member
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
