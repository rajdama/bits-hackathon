import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signout } from "../actions";

function Home() {
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  if (token) {
    return (
      <Container style={{ backgroundColor: "cyan", textAlign:"center" }}>
        <div style={{ margin: "6rem", textAlign: "center" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            voluptatibus harum! Debitis provident veritatis, cumque recusandae
            ullam rerum ducimus possimus aliquid quia amet, assumenda itaque
            atque! Quo sit consequatur autem.
          </p>
        </div>
        <button
        
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </Container>
    );
  } else {
    return <Navigate to="/signin" />;
  }
}

export default Home;
