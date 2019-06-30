import React from "react";
import { render, cleanup } from "react-testing-library";
import Movie, { POSTER_PATH } from "./Movie";
import { MemoryRouter } from "react-router-dom";
afterEach(() => {
  cleanup();
  console.error.mockClear();
});

//const onSubmit = jest.fn();
console.error = jest.fn();
test("<Movie />", () => {
  render(<Movie />);
  expect(console.error).toBeCalled();
  expect(console.error).toHaveBeenCalledTimes(1);
});

const movie = {
  id: "001",
  title: "test title",
  poster_path: "somepath.jpg"
};

test("<Movie /> with movies", () => {
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();
  //expect(console.error).toHaveBeenCalledTimes(1);
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("movie-img").src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
  debug();
});
