import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import MoviesList from "../MoviesList";
import { MemoryRouter } from "react-router-dom";
import { POSTER_PATH } from "../Movie";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const movies = {
  results: [
    {
      id: "0004",
      title: "mock title",
      poster_path: "somepath.jpg"
    },
    {
      id: "0005",
      title: "mock title5",
      poster_path: "somepath.jpg"
    },
    {
      id: "0006",
      title: "mock title6",
      poster_path: "somepath.jpg"
    },
    {
      id: "0007",
      title: "mock title7",
      poster_path: "somepath.jpg"
    }
  ]
};
const movie = movies.results[0];
console.error = jest.fn();
test("<MoviesList />", async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  const {
    debug,
    getByText,
    getByTestId,
    queryByTestId,
    getAllByTestId
  } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(getByTestId("loading")).toBeTruthy();
  await waitForElement(() => getByTestId("movie-link"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("movie-img").src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
  //debug();
  console.log(getAllByTestId("movie-link").length);
  expect(getAllByTestId("movie-link").length).toBe(movies.results.length);
});
