import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { getChart, isUserLoggedIn, login } from "../actions";
import { useDispatch, useSelector } from 'react-redux'
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom'

function SignInForm() {
  // declaring useState variable
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const [quotes, setquotes] = useState({});
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getChart(auth.user._id))
  }, [])
  
  console.log(user)
  //   used to route through pages we create an instance of useNavigate which can be used called by passing the page route into the instance as a parameter
  const navigate = useNavigate();

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
  //The function checks if the user who is trying to login exists or not.
  // const checkuser = (e) => {
  //   e.preventDefault();
  //   if(quotes.length > 0) return false;
  //   //We fetch the user from the backend and if the resp is success we route to the home page.
  //   fetch("https://aryan672002.pythonanywhere.com/user/login",{
  //       method: 'POST', // or 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })
  //     .then(res => res.json())
  //     .then(res => {
  //       if(res["resp"] === "success"){
  //         navigate("/home");
  //       }
  //       setmessage(res["resp"]);
  //     })
  // }
  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
  },[])

  useEffect(() => {
    fetchquotes();
  }, []);

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };
  console.log(localStorage)
  if(auth.authenticate){
    console.log(user.chart)
    return <Navigate to={"/chart"} />;
  }

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
        {message === "failure" ? (
          <h3 style={{ color: "white" }}>*User doesn't exist</h3>
        ) : (
          <></>
        )}
        <div className="formCenter">
          <form className="formFields">
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
                onChange={(e) => {
                  setemail(e.target.value);
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
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <div className="formField">
              {/* <button className="formFieldButton" onClick = {checkuser}>Sign In</button>{" "} */}
              <button
                className="formFieldButton"
                onClick={(e) => {
                  userLogin(e);
                  setTimeout(() => {
                    window.location.reload()
                  }, 1000);
                }}
              >
                Sign In
              </button>{" "}
              <Link to="/signup" className="formFieldLink">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
