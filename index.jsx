import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const movies = [
    {
        title: "The Matrix",
        plot: "A computer hacker learns from mysterious rebels about the true nature of his reality.",
        year: 1999
    },
    {
        title: "The Color Purple",
        plot: "A black Southern woman (Whoopi Goldberg) struggles to find her identity after suffering years of abuse from her father.",
        year: 1985
    }
];


function FrontPage() {
    return <div>
        <h1>Kristiania Movie Database</h1>
        <ul>
            <li><Link to="/movies">List Movies</Link></li>
            <li><Link to="/movies/new">New Movies</Link></li>
        </ul>
    </div>;
}

function ListMovies() {
    return <div>
        <h1>List movies</h1>
        {movies.map(m =>
            <>
                <h2>{m.title} ({m.year})</h2>
                <div>{m.plot}</div>
            </>
        )}
    </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/new"} element={<h1>New movies</h1>}/>
            <Route path={"/movies"} element={<ListMovies/>}/>
        </Routes>
    </BrowserRouter>;

}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);