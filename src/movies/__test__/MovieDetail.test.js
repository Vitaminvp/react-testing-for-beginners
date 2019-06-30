import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import MovieDetail from "../MovieDetail";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const movie = {
    id: "0004",
    title: "mock title"
};

const match = {
  params: {
    id: "0003"
  }
};
//const onSubmit = jest.fn();
console.error = jest.fn();
test("<MovieDetail />", async () => {
  fetch.mockResponseOnce(
    JSON.stringify(movie)
  );
  const { debug, getByText, getByTestId } = render(<MovieDetail match={match} />);
  await waitForElement(() => getByText("mock title"));
  expect(getByTestId("movie-title").textContent).toBe(movie.title);
  debug();
});
