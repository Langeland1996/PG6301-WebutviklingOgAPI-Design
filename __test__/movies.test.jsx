import React from "react";
import {createRoot} from "react-dom/client";
import {ListMovies} from "../application";
import {} from "react-dom/test-utils";
import {act} from "@testing-library/react";

describe("movie application", () => {

    it("check if body == movies", () => {
        const element = document.createElement("div");

        act(() => {
            createRoot(element).render(<ListMovies/>)
        })

        expect(element.querySelector("h1").innerHTML).toEqual("Movies")

        expect(element.innerHTML).toMatchSnapshot();
    })



    it("check if snapshot is matching", () => {
        const element = document.createElement("div");

        act(() => {
            createRoot(element).render(<ListMovies/>)
        })

        expect(element.innerHTML).toMatchSnapshot();
    })
})