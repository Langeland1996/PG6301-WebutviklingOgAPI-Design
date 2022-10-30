import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class LoginLinks extends React.Component {
  render() {
    return (
      <div>
        <Link to={"/login"}>Login</Link>
        <br></br>
        <Link to={"/register"}>Register new user</Link>
      </div>
    );
  }
}

function Frontpage() {
  const [user, setUser] = useState();

  useEffect(async () => {
    const res = await fetch("/api/login");
    setUser(await res.json());
  }, []);

  return (
    <div>
      <h1>Welcome to the frontpage</h1>
      {user ? <div>{user.fullName}</div> : <LoginLinks />}
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
