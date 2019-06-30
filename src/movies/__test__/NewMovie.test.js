import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import NewMovie from "../NewMovie";
afterEach(cleanup);

test("render properly", () => {
  const { debug, getByTestId, queryByTestId, container, getByText, getByLabelText } = render(<NewMovie />);
  //debug();
  expect(getByTestId("page-title").textContent).toBe("New Movie");
  expect(queryByTestId("movie-form").textContent).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
  // console.log(container.firstChild);


  fireEvent.click(getByText("Submit"));
  console.log(getByLabelText("Text").outerHTML);

});
