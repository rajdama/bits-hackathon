import React,{useState,useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";
import './Login.css';
import {useNavigate} from "react-router-dom";
function SignInForm() {
  // declaring useState variable
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [message,setmessage] = useState("");
  const [quotes,setquotes] = useState({});
//   used to route through pages we create an instance of useNavigate which can be used called by passing the page route into the instance as a parameter
  const navigate = useNavigate();
  const data = {
    email,
    password
  }
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  const fetchquotes = () => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(response => { console.log(response[getRndInteger(0,1200)]); setquotes(response[getRndInteger(0,1200)])})
      .catch(err => console.error(err));
  }
  //The function checks if the user who is trying to login exists or not.
  const checkuser = (e) => {
    e.preventDefault();
    if(quotes.length > 0) return false;
    //We fetch the user from the backend and if the resp is success we route to the home page.
    fetch("https://aryan672002.pythonanywhere.com/user/login",{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        if(res["resp"] === "success"){
          navigate("/home");
        }
        setmessage(res["resp"]);
      })
  }
  useEffect(() => {
      fetchquotes();
  },[]);
  return (
    <div className="appAside">
          <div className="quotes">
            <div id = "say">{quotes["text"]}</div>
            <div id = "aname">- {quotes["author"]}</div>
          </div>  
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>
            {message === "failure" ? <h3 style={{color:"white"}}>*User doesn't exist</h3> : <></>}
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
          onChange = {(e) => {
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
          onChange = {(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>

      <div className="formField">
        <button className="formFieldButton" onClick = {checkuser}>Sign In</button>{" "}
        <Link to="/sign-in" className="formFieldLink">
          Create an account
        </Link>
      </div>
    </form>
  </div>
          </div>
        </div>
  )
}

export default SignInForm;