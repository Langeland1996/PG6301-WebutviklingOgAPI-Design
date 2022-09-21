import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


function FrontPage() {
    return <div>
        <h1>Kristiania Movie Database</h1>
        <ul>
            <li><Link to="/movies">List Movies</Link></li>
            <li><Link to="/movies/new">New Movies</Link></li>
        </ul>
    </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/new"} element={<h1>New movies</h1>}/>
            <Route path={"/movies"} element={<h1>List movies</h1>}/>
        </Routes>
    </BrowserRouter>;

}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);