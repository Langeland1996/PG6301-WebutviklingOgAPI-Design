import React from "react";
import {createRoot} from "react-dom/client";
import {ListMovies, NewMovieForm} from "../application";
import {act} from "@testing-library/react";

describe("movie application", () => {

    it("check if body == movies", () => {
        const element = document.createElement("div");

        act(() => {
            createRoot(element).render(<ListMovies/>)
        })

        expect(element.querySelector("h1").innerHTML).toEqual("List movies")

    })



    it("check if snapshot is matching", () => {
        const element = document.createElement("div");

        act(() => {
            createRoot(element).render(<ListMovies/>)
        })

        expect(element.innerHTML).toMatchSnapshot();
    })

    it("show me movie form", () => {
        const element = document.createElement("div")

        act(() => {
            createRoot(element).render(<NewMovieForm/>)
        })

        expect(element.innerHTML).toMatchSnapshot();

    })
})