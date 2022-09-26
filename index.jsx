import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes, Link, json, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const MOVIES = [
    {
        title: "movie 1",
        year: 1996,
        plot: "x"
    },
    {
        title: "movie 2",
        year: 1997,
        plot: "xx"
    },
    {
        title: "movie 2",
        year: 1997,
        plot: "xx"
    }
]

function FrontPage() {
    return <div>
        <h1>Movies</h1>
        <ul>
            <li><Link to={"/movies"}>Show movies</Link></li>
            <li><Link to={"/movies/new"}>Add movies</Link></li>
        </ul>
    </div>;
}

function MovieCard({movie}) {
    const {title, year, plot} = movie;
    return <div>
        <h2>{title} ({year})</h2>
        <p>{plot}</p>
    </div>;
}

function ListMovies() {
    return <div>
        <h1>Movies</h1>
        {MOVIES.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
    </div>;
}

function CreateMovie(){
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const [newMovie, setNewMovie] = useState({});

    useEffect(() => {
        setNewMovie({title, year, plot})
    }, [title, year, plot]);

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        MOVIES.push(newMovie);
        navigate("/movies");
    }

    return <form onSubmit={handleSubmit}>
        <h1>Add new movie</h1>
        <div>
            Title:<input value={title} onChange={event => setTitle(event.target.value)} />
        </div>
        <div>
            Year:<input value={year} onChange={event => setYear(event.target.value)} />
        </div>
        <div>
            plot:<textarea value={plot} onChange={event => setPlot(event.target.value)} />
        </div>
        <button>Submit</button>
        <pre>
            {JSON.stringify({newMovie})}
        </pre>
    </form>;

}

function MovieApplication() {
    return <Routes>
        <Route path={"/"} element={<ListMovies/>}/>
        <Route path={"/new"} element={<CreateMovie/>}/>
    </Routes>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/*"} element={<MovieApplication/>}/>
            <Route path={"/*"} element={<h1>404 not found</h1>}/>
        </Routes>
    </BrowserRouter>;
}

ReactDOM.render(<Application/>,
    document.getElementById("app"));