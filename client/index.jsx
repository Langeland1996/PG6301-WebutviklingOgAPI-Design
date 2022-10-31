import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function AddNewMovie() {
  return (
    <div>
      <h1>Add new movie</h1>
    </div>
  );
}

function ListMovies() {
  return (
    <div>
      <h1>List movies</h1>
    </div>
  );
}

function FrontPage() {
  return (
    <div>
      <h1>Movie Database</h1>
      <div>
        <Link to={"/movies"}>List movies</Link>
        <br></br>
        <Link to={"/movies/new"}>Add new movies</Link>
      </div>
    </div>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/movies"} element={<ListMovies />} />
        <Route path={"/movies/new"} element={<AddNewMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
