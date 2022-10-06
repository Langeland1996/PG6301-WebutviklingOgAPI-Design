import React from "react";
import {createRoot} from "react-dom/client";
import {ListMovies, NewMovieForm} from "../application";
import {act} from "@testing-library/react";
import {Simulate} from "react-dom/test-utils";
import * as reactDOM from "react-dom";

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

    it("submit new movie", async () => {
        const onAddMovie = jest.fn();
        const element = document.createElement("div")

        await act(() => {
            createRoot(element).render(<NewMovieForm onAddMovie={onAddMovie}/>)
        })

        await act(() => {
            Simulate.change(
                // finn elementet med date-testid=title og send en input event til det
                element.querySelector("[data-testid=title]"),
                {target: {value: "Movie 1"}}
            );
            Simulate.change(
                // finn elementet med date-testid=year og send en input event til det
                element.querySelector("[data-testid=year]"),
                {target: {value: "2022"}}
            );
        })

        // finn elementet av type form og send en submit event til det
        await act(() => {
            Simulate.submit(element.querySelector("form"));
        })

        expect(onAddMovie).toHaveBeenCalledWith({
            title: "Movie 1",
            year: "2022",
            plot: "",
        })
    })
})