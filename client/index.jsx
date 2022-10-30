import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Frontpage() {
  return (
    <div>
      <h1>Welcome to the frontpage</h1>
      <div>
        <Link to={"/login"}>Login</Link>
        <br></br>
        <Link to={"/register"}>Register new user</Link>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login page</h1>
    </div>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Frontpage />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
