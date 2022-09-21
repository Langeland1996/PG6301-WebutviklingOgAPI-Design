import express from "express";
import path from "path";
const app = express();

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

app.get("/api/movies", (req, res) => {
    res.json(MOVIES);
})

app.use(express.static(path.resolve("../dist")));

const server = app.listen(3000, () => {
    console.log("listening on http://localhost:"+ server.address().port);
});