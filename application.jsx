import React from "react";

export function ListMovies() {
    return <div>
        <h1>List movies</h1>
        <ul>
            <li>Movie 1</li>
            <li>Movie 1</li>
        </ul>
    </div>
}

export function NewMovieForm() {
    return <form>
        <h1>Add new movie</h1>
        <div>
            title: <input/>
        </div>
        <div>
            year: <input/>
        </div>
        <div>
            plot: <div><textarea/></div>
        </div>
    </form>
}