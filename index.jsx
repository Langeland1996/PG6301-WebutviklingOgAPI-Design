import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const MOVIES = [
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

function NewMovie({onAddMovie}){
    const [title, setTitle] = useState("");
    const [plot, setPlot] = useState("");
    const [year, setYear] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        onAddMovie({title, plot, year});
        navigate("/movies");
    }

    return <form onSubmit={handleSubmit}>
        <h1>New movie</h1>
        <div>
            <label>Title: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
        </div>
        <div>
            <label>Plot: <textarea value={plot} onChange={e => setPlot(e.target.value)} /></label>
        </div>
        <div>
            <label>Year: <input value={year} onChange={e => setYear(e.target.value)} /></label>
        </div>
        <button>Submit</button>

        <pre>
            {JSON.stringify({title, plot, year})}
        </pre>
    </form>;
}

function ListMovies({movies}) {
    return <div>
        <h1>List movies</h1>
        {movies.map(m =>
            <div key={m.title}>
                <h2>{m.title} ({m.year})</h2>
                <div>{m.plot}</div>
            </div>
        )}
    </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/new"} element={<NewMovie onAddMovie={m => MOVIES.push(m)}/>}/>
            <Route path={"/movies"} element={<ListMovies movies={MOVIES}/>}/>
        </Routes>
    </BrowserRouter>;

}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);