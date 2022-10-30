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
async function fetchJSON(url) {
  const res = await fetch(url);
  return await res.json();
}

function useLoader(loadingFn) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(async () => {
    setLoading(true);
    try {
      setData(await loadingFn());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, data };
}

function Frontpage() {
  const { loading, error, data } = useLoader(
    async () => await fetchJSON("api/login")
  );
  const user = data;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ border: "1px solid red", background: "Pink" }}>
        An error occurred: {error.toString()}
      </div>
    );
  }

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
