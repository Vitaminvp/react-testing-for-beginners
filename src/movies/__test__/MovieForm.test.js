import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "../MovieForm";
afterEach(cleanup);

// const onSubmit = () => console.log("hi");
const onSubmit = jest.fn();

test("render properly", () => {
  const { debug, getByTestId, queryByTestId, container, getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit} />);
  //debug();
  expect(queryByTestId("movie-form").textContent).toBeTruthy();

  getByLabelText("Text").value= "Hello";
  // fireEvent.change(getByLabelText("Text"));
  fireEvent.change(getByLabelText("Text"), {
    target: {value: "Hello"}
  });

  fireEvent.click(getByText("Submit"));
  //console.log("container", container.firstChild);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({text: 'Hello'});
});
